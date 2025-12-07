import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CategorySelector } from "./CategorySelector";

const PostAd = () => {
  const { data: categories, isLoading } = useSelector(
    (state) => state.categories
  );
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFinalSelection = (category, subcategory, subSubcategory) => {
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

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <Box mb={4}>
        <Typography
          variant="h4"
          className="text-xl font-bold text-textPrimary mb-3"
        >
          {t("Post your ad")}
        </Typography>

        <Typography variant="h6" className="text-lg font-bold text-textPrimary">
          {t("Choose a category")}
        </Typography>
      </Box>

      <CategorySelector
        categories={categories}
        onSelectCategory={handleFinalSelection}
        showBreadcrumbs={true}
        showBackButton={false}
        onBackToHome={() => navigate("/")}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PostAd;
