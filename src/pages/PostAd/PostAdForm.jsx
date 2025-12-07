
import { Add as AddIcon, Close as CloseIcon } from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Link,
    Paper,
    Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DynamicForm } from "../../components/DynamicForm";
import { fetchCategoryFields } from "../../core/apis/homeAPI";
import { getIconEmoji } from "../../core/helpers/CommonHelpers";
import {
    findCategoryById,
    getCategoryIdFromSlug,
    getCategoryName,
    getCategoryPath
} from "../../utils/categoryHelper";
import { CategorySelector } from "./CategorySelector";

// Category Icon Component
const CategoryIcon = ({ slug, size = "large" }) => {
  const sizeClasses =
    size === "large" ? "w-14 h-14 text-3xl" : "w-10 h-10 text-2xl";

  return (
    <div
      className={`${sizeClasses} rounded-full bg-secondary flex items-center justify-center`}
    >
      {getIconEmoji(slug)}
    </div>
  );
};

const CategoryChangeDialog = ({ open, onClose, onSelectCategory, categories, categoriesLoading }) => {
  const { t } = useTranslation();

  const handleSelect = (category, subcategory, subSubcategory) => {
    onSelectCategory(category, subcategory, subSubcategory);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{t("Change Category")}</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <CategorySelector
          categories={categories}
          onSelectCategory={handleSelect}
          showBreadcrumbs={true}
          showBackButton={true}
          isLoading={categoriesLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export const PostAdForm = () => {
  const { categorySlug, subcategorySlug, subSubcategorySlug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Get categories from Redux
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useSelector((state) => state.categories);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);

  // Get the most specific slug
  const currentSlug = subSubcategorySlug || subcategorySlug || categorySlug;

  // Get category ID from slug
  const categoryId = getCategoryIdFromSlug(categories, currentSlug);

  // Get category path for breadcrumbs
  const categoryPath = getCategoryPath(categories, currentSlug);

  // Get current category info
  const currentCategory = categoryId
    ? findCategoryById(categories, categoryId)
    : null;

  // ✅ Use React Query with axios to fetch fields
  const {
    data: fieldsData,
    isLoading: fieldsLoading,
    isError: fieldsError,
    error: fieldsErrorMessage,
  } = useQuery({
    queryKey: ["categoryFields", currentSlug],
    queryFn: () => fetchCategoryFields(currentSlug),
    enabled: !!currentSlug, // Only run if currentSlug exists
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 2, // Retry failed requests twice
    onError: (error) => {
      console.error("❌ Error fetching fields:", error);
    },
  });

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prev) => [...prev, ...imageUrls].slice(0, 12));
  };

  // Handle image remove
  const handleRemoveImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle category change
  const handleCategoryChange = (
    category,
    subcategory = null,
    subSubcategory = null
  ) => {
    if (subSubcategory) {
      navigate(
        `/post-ad/${category.slug}/${subcategory.slug}/${subSubcategory.slug}/form`
      );
    } else if (subcategory) {
      navigate(`/post-ad/${category.slug}/${subcategory.slug}/form`);
    } else {
      navigate(`/post-ad/${category.slug}/form`);
    }
  };

  // Handle form submission
  const handleSubmit = async (formData) => {
    const fullPayload = {
      ...formData,
      categoryId: categoryId,
      categorySlug: currentSlug,
      images: uploadedImages,
    };


    try {
      // TODO: Submit to your backend API
      toast.success("Form submitted successfully!");
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  // Loading state
  if (categoriesLoading || fieldsLoading) {
    return (
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="400px"
          flexDirection="column"
          gap={2}
        >
          <CircularProgress size={60} />
          <Typography>
            {categoriesLoading
              ? t("Loading categories")
              : t("Loading form fields")}
          </Typography>
        </Box>
      </Container>
    );
  }

  // Error state - categories
  if (categoriesError) {
    return (
      <Container maxWidth="md">
        <Box py={4}>
          <Alert severity="error">
            <strong>{t("Error")}:</strong> {t("Failed to load categories")}
          </Alert>
          <Box mt={2}>
            <Link
              component="button"
              onClick={() => navigate("/")}
              underline="hover"
            >
              {t("Go to home")}
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }

  // Error state - fields
  if (fieldsError) {
    return (
      <Container maxWidth="md">
        <Box py={4}>
          <Alert severity="error">
            <strong>{t("Error")}:</strong>{" "}
            {fieldsErrorMessage?.response?.data?.message ||
              fieldsErrorMessage?.message ||
              t("Failed to load form fields")}
          </Alert>
          <Box mt={2}>
            <Link
              component="button"
              onClick={() => navigate("/post-ad")}
              underline="hover"
            >
              {t("Back to categories")}
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }

  // Category not found
  if (!categoryId || !fieldsData || !fieldsData[categoryId]) {
    return (
      <Container maxWidth="md">
        <Box py={4}>
          <Alert severity="warning">
            {t("Category not found or no fields available for this category.")}
          </Alert>
          <Box mt={2}>
            <Link
              component="button"
              onClick={() => navigate("/post-ad")}
              underline="hover"
            >
              {t("Back to categories")}
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }

  return (
    <Box className="flex gap-6 max-w-[1400px] mx-auto py-8 px-4">
  <Box className="flex-1">
  <Box className="mb-6">
          <Typography
            variant="h4"
            className="text-2xl font-bold text-textPrimary mb-4"
            color="textPrimary"
          >
            {t("Post your ad")}
          </Typography>

          <Box className="mt-4">
            <button
              onClick={() => navigate("/post-ad")}
              className={
                `flex items-center gap-2 text-primary hover:text-primary-dark transition-colors` +
                (i18n.language !== "ar" ? "" : " flex-row-reverse")
              }
            >
              <ChevronRightIcon className={i18n.language !== "ar" ? "rotate-180" : ""} />
              <span>{t("Back")}</span>
            </button>
          </Box>
        </Box>

  <Paper elevation={2} className="p-6 mb-6">
          <Grid container spacing={2} alignItems="center">
            <Grid item size={{xs:12,sm:2}}>
              <Typography variant="body1" fontWeight={600}>
                {t("Category")}
              </Typography>
            </Grid>
            <Grid item size={{xs:12,sm:10}} >
              <Box className="flex items-center justify-between">
                <Box className="flex items-center gap-4">
                  {currentCategory && (
                    <CategoryIcon slug={categorySlug} size="small" />
                  )}
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {getCategoryName(currentCategory)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {categoryPath
                        .slice(0, -1)
                        .map((cat) => getCategoryName(cat))
                        .join(" > ")}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => setCategoryDialogOpen(true)}
                  sx={{ textTransform: "none", fontWeight: 600 }}
                  className="font-semibold normal-case"
                >
                  {t("Change")}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

  <Paper elevation={2} className="p-6 mb-6">
          <Grid container spacing={2}>
            <Grid item size={{xs:12,sm:2}}>
              <Typography variant="body1" fontWeight={600}>
                {t("Upload Images")}
              </Typography>
            </Grid>
            <Grid item size={{xs:12,sm:10}} >
              <Box className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-4 mb-2">
                <Box
                  component="label"
                  className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50 transition-all hover:bg-gray-200 hover:border-gray-400"
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageUpload}
                  />
                  <AddIcon sx={{ fontSize: 32, color: "#9CA3AF" }} />
                </Box>

                {uploadedImages.map((image, index) => (
                  <Box
                    key={index}
                    className="aspect-square relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-black/60 text-white hover:bg-black/80"
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}

                {Array.from({
                  length: Math.max(0, 12 - uploadedImages.length - 1),
                }).map((_, index) => (
                  <Box
                    key={`empty-${index}`}
                    className="aspect-square border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50"
                  >
                    <Box
                      component="img"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'%3E%3C/path%3E%3C/svg%3E"
                      alt="Camera"
                      className="w-8 h-8 opacity-30"
                    />
                  </Box>
                ))}
              </Box>

              <Typography variant="caption" color="text.secondary" className="text-xs text-gray-500">
                {t(
                  "For the cover picture we recommend using the landscape mode"
                )}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <DynamicForm
          categoryId={categoryId}
          fieldsData={fieldsData}
          onSubmit={handleSubmit}
          t={t}
        />
      </Box>

      <Box className="w-[300px] hidden lg:block">
        <Paper elevation={2} className="p-8 sticky top-5">
          <div className="grid gap-6">
            <Typography variant="h6" gutterBottom className="font-semibold">
              {t("Need help getting started?")}
            </Typography>

            <ul className="flex flex-col gap-2 list-disc pl-5">
              <Typography
                variant="body2"
                color="text.primary"
                className="opacity-80 mb-2"
              >
                {t(
                  "Review these resource to learn how to create a great ad and increase your selling chances"
                )}
              </Typography>
              <li>
                <Typography 
                  variant="subtitle2" 
                  className="font-semibold underline"
                >
                  <a 
                    href="https://help.dubizzle.com.lb/hc/en-us/articles/8601986646415-How-to-get-more-responses-to-my-ad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit underline"
                  >
                    {t("Tips for improving your ads and your chances of selling")}
                  </a>
                </Typography>
              </li>

              <li>
                <Typography
                  variant="subtitle2"
                  className="font-semibold underline"
                >
                  <a 
                    href="https://help.dubizzle.com.lb/hc/en-us/sections/8601895008271-Posting-an-Ad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit underline"
                  >
                    {t("All you need to know about Posting Ads")}
                  </a>
                </Typography>
              </li>
            </ul>

            <Typography
              variant="body2"
              color="text.primary"
              className="opacity-80"
            >
              {t("You can always come back to change your ad")}
            </Typography>
          </div>
        </Paper>
      </Box>

      <CategoryChangeDialog
        open={categoryDialogOpen}
        onClose={() => setCategoryDialogOpen(false)}
        onSelectCategory={handleCategoryChange}
        categories={categories}
        categoriesLoading={categoriesLoading}
      />
    </Box>
  );
};

export default PostAdForm;