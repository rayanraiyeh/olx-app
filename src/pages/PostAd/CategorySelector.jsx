import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Box,
    Breadcrumbs,
    Grid,
    Link,
    Skeleton,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getIconEmoji } from "../../core/helpers/CommonHelpers";
import { getCategoryName } from "../../utils/categoryHelper";

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

const CategoryCardSkeleton = () => (
  <Box className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
    <Box className="flex items-center gap-4 flex-1">
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" width="60%" height={24} />
    </Box>
    <Skeleton variant="circular" width={24} height={24} />
  </Box>
);

export const CategorySelector = ({
  categories,
  onSelectCategory,
  showBreadcrumbs = true,
  showBackButton = true,
  onBackToHome,
  isLoading = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { t, i18n } = useTranslation();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    if (subcategory.children && subcategory.children.length > 0) {
      setSelectedSubcategory(subcategory);
    } else {
      onSelectCategory(selectedCategory, subcategory);
    }
  };

  const handleSubSubcategoryClick = (subSubcategory) => {
    onSelectCategory(selectedCategory, selectedSubcategory, subSubcategory);
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else if (onBackToHome) {
      onBackToHome();
    }
  };

  const getChevronIcon = () => (
    <ChevronRightIcon
      className={`text-gray-400 ${i18n.language === "ar" ? "rotate-180" : ""}`}
    />
  );

  if (isLoading) {
    return (
      <Box>
        {showBreadcrumbs && (
          <Box className="mb-2">
            <Skeleton variant="text" width={200} height={24} className="mb-1" />
            {showBackButton && (
              <Skeleton variant="text" width={100} height={20} />
            )}
          </Box>
        )}
        <Grid container spacing={2}>
          {[...Array(6)].map((_, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <CategoryCardSkeleton />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
      {showBreadcrumbs && (
        <Box className="mb-2">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={
              <ChevronRightIcon
                className={`text-gray-400 ${
                  i18n.language === "ar" ? "rotate-180" : ""
                }`}
              />
            }
          >
            {onBackToHome && (
              <Link
                underline="hover"
                color="inherit"
                onClick={onBackToHome}
                className="cursor-pointer"
              >
                {t("Home")}
              </Link>
            )}
            {selectedCategory ? (
              <Link
                underline="hover"
                color="inherit"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedSubcategory(null);
                }}
                className="cursor-pointer"
              >
                {t("Categories")}
              </Link>
            ) : (
              <Typography color="text.primary">{t("Categories")}</Typography>
            )}
            {selectedCategory && (
              <Typography color="text.primary">
                {getCategoryName(selectedCategory)}
              </Typography>
            )}
          </Breadcrumbs>
          {showBackButton && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mt-2"
            >
              <ChevronRightIcon
                className={`${i18n.language !== "ar" && "rotate-180"}`}
              />
              <span>{t("Back")}</span>
            </button>
          )}
        </Box>
      )}
      {!selectedCategory ? (
        <Grid container spacing={2}>
          {categories?.map((category) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={category.id}>
              <Box
                onClick={() => handleCategoryClick(category)}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:bg-gray-50 hover:border-gray-400"
              >
                <Box className="flex items-center gap-4">
                  <CategoryIcon slug={category.slug} size="small" />
                  <Typography variant="body1">
                    {getCategoryName(category)}
                  </Typography>
                </Box>
                {category.children &&
                  category.children.length > 0 &&
                  getChevronIcon()}
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            className="border-b md:border-b-0 md:border-r border-gray-200"
          >
            {categories?.map((category) => (
              <Box
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center justify-between p-4 cursor-pointer border-b border-gray-200 last:border-b-0 ${
                  selectedCategory?.id === category.id
                    ? "bg-blue-50"
                    : "bg-white"
                } hover:bg-gray-50`}
              >
                <Box className="flex items-center gap-3">
                  <CategoryIcon slug={category.slug} size="small" />
                  <Typography variant="body2">
                    {getCategoryName(category)}
                  </Typography>
                </Box>
                {category.children &&
                  category.children.length > 0 &&
                  getChevronIcon()}
              </Box>
            ))}
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            className="border-b md:border-b-0 md:border-r border-gray-200"
          >
            {selectedCategory?.children &&
            selectedCategory.children.length > 0 ? (
              selectedCategory.children.map((subcategory) => (
                <Box
                  key={subcategory.id}
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className={`flex items-center justify-between p-4 cursor-pointer border-b border-gray-200 last:border-b-0 ${
                    selectedSubcategory?.id === subcategory.id
                      ? "bg-blue-50"
                      : "bg-white"
                  } hover:bg-gray-50`}
                >
                  <Typography variant="body2">
                    {getCategoryName(subcategory)}
                  </Typography>
                  {subcategory.children &&
                    subcategory.children.length > 0 &&
                    getChevronIcon()}
                </Box>
              ))
            ) : (
              <Box className="p-8 text-center text-gray-400">
                <Typography variant="body2">{t("No subcategories")}</Typography>
              </Box>
            )}
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            {selectedSubcategory?.children &&
            selectedSubcategory.children.length > 0 ? (
              selectedSubcategory.children.map((subSubcategory) => (
                <Box
                  key={subSubcategory.id}
                  onClick={() => handleSubSubcategoryClick(subSubcategory)}
                  className="p-4 cursor-pointer border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <Typography variant="body2">
                    {getCategoryName(subSubcategory)}
                  </Typography>
                </Box>
              ))
            ) : (
              <Box className="p-8 text-center text-gray-400">
                <Typography variant="body2">
                  {selectedSubcategory
                    ? t("No subcategories")
                    : t("Select a subcategory")}
                </Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
