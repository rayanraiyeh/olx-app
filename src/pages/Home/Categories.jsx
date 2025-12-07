import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIconEmoji } from "../../core/helpers/CommonHelpers";
import { getCategoryName } from "../../utils/categoryHelper";

const CategoryIcon = ({ slug }) => {
  return (
    <div className="w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px] rounded-full bg-[#FFE082] flex items-center justify-center text-5xl sm:text-6xl md:text-7xl transition-all duration-300 shadow-md">
      {getIconEmoji(slug)}
    </div>
  );
};

const CategoryCard = ({ category, onClick }) => {
  return (
    <div
      onClick={() => onClick(category)}
      className="cursor-pointer transition-all duration-200 flex flex-col items-center gap-4 hover:-translate-y-2 group"
    >
      <div className=" transition-all duration-300">
        <CategoryIcon slug={category.slug} name={category.name} />
      </div>
      <Typography
        variant="body1"
        component="div"
        className="font-semibold text-sm sm:text-base text-[#2C3E50] text-center max-w-[150px] leading-tight"
      >
        {getCategoryName(category)}
      </Typography>
    </div>
  );
};

// Skeleton for category card
const CategorySkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Skeleton
        variant="circular"
        className="w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px]"
      />
      <Skeleton variant="text" className="w-[120px] h-6" />
    </div>
  );
};

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.categories);

  const handleCategoryClick = (category) => {
    navigate(`/${category.slug}`);
  };

  const handleRefetch = () => {
    dispatch(fetchCategoriesThunk());
  };

  if (isError) {
    return (
      <Container maxWidth="xl">
        <div className="flex flex-col items-center justify-center py-16 gap-6">
          <Typography
            variant="h5"
            className="font-semibold text-[#2C3E50] text-center"
          >
            {t("Failed to load categories")}
          </Typography>
          <Typography
            variant="body1"
            className="text-[#546E7A] text-center max-w-[400px]"
          >
            {error || t("Something went wrong. Please try again.")}
          </Typography>
          <Button
            onClick={handleRefetch}
            variant="refreshCircle"
            aria-label="refresh categories"
          >
            <RefreshIcon className="text-3xl sm:text-4xl" />
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} className="py-6 md:py-10 grid gap-[20px]">
      <Typography
        variant="h4"
        component="h2"
        className="font-bold mb-8 text-[#2C3E50] text-2xl sm:text-3xl md:text-4xl"
      >
        {t("All categories")}
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 4 }}
        className="justify-around sm:justify-start"
      >
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => (
              <Grid
                item
                size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1.7 }}
                key={index}
                className="flex justify-center"
              >
                <CategorySkeleton />
              </Grid>
            ))
          : categories?.map((category) => (
              <Grid
                item
                size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1.7 }}
                key={category.id}
                className="flex justify-center"
              >
                <CategoryCard
                  category={category}
                  onClick={handleCategoryClick}
                />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default Categories;
