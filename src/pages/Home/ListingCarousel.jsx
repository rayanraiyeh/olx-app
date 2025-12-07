import {
  Bathtub,
  Bed,
  ChevronLeft,
  ChevronRight,
  Favorite,
  FavoriteBorder,
  SquareFoot,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ListingCarousel = ({ data, category, title, viewMorePath }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const scrollContainerRef = useRef(null);
  const [favorites, setFavorites] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320;
    const newScrollPosition =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getLocationName = (item) => {
    return isRTL ? item.ad_location_name_lc : item.ad_location_name_en;
  };

  const renderCardDetails = (item) => {
    switch (category) {
      case "properties":
        return (
          <Stack direction="row" spacing={2} className="text-gray-600 text-sm">
            {item.ad_bedroom_count && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Bed fontSize="small" />
                <span>{item.ad_bedroom_count}</span>
              </Stack>
            )}
            {item.ad_bathroom_count && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Bathtub fontSize="small" />
                <span>{item.ad_bathroom_count}</span>
              </Stack>
            )}
            {item.ad_area && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <SquareFoot fontSize="small" />
                <span>{item.ad_area} m²</span>
              </Stack>
            )}
          </Stack>
        );
      case "cars":
      case "phones":
        return (
          <Typography
            variant="ellipsis2Lines"
            className="text-gray-600 text-sm"
          >
            {item.ad_title}
          </Typography>
        );
      default:
        return null;
    }
  };

  const SkeletonCard = () => (
    <Card className="flex-shrink-0 w-[280px] rounded-xl shadow-sm">
      <Skeleton variant="rectangular" height={180} />
      <CardContent className="p-6">
        <Stack spacing={1.5}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Skeleton variant="text" width="40%" height={32} />
            <Skeleton variant="circular" width={32} height={32} />
          </Stack>
          <Skeleton variant="text" width="80%" height={20} />
          <Stack spacing={0.5}>
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={16} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Box className="w-full mb-8 md:px-6">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="mb-6"
      >
        {isLoading ? (
          <>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={100} height={24} />
          </>
        ) : (
          <>
            <Typography variant="h5" color="text.primary">
              {t(title)}
            </Typography>
            <Typography
              variant="viewMore"
              sx={{cursor:!viewMorePath&&"not-allowed"}}
              onClick={() => viewMorePath && navigate(viewMorePath)}
            >
              {t("View More")} →
            </Typography>
          </>
        )}
      </Stack>

      <div className="relative flex items-center gap-4">
        {!isLoading && (
          <IconButton
            variant="carouselNav"
            onClick={() => scroll(isRTL ? "right" : "left")}
            disabled={isLoading}
            className="flex-shrink-0 z-10"
          >
            {isRTL ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-4 flex-1 overflow-x-auto md:overflow-x-hidden scrollbar-hide smooth-scroll"
        >
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : data.map((item) => (
                <Card
                  key={item.ad_external_id}
                  variant="listingCard"
                  className="flex-shrink-0 w-[280px] cursor-pointer"
                >
                  <div className="relative">
                    <CardMedia
                      component="img"
                      image={item.ad_image_url}
                      alt={item.ad_title}
                      className="h-[180px] object-cover"
                    />

                    {item.ad_product && (
                      <div
                        className={`absolute top-2 ${
                          isRTL ? "right-2" : "left-2"
                        }`}
                      >
                        <Chip
                          label={item.ad_product.split(",")[0].toUpperCase()}
                          size="small"
                          variant="productBadge"
                        />
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <Stack spacing={1.5}>
                      <div className="flex justify-between items-center">
                        <Typography
                          color="text.secondary"
                          variant="h6"
                          className="font-bold"
                        >
                          {formatPrice(item.ad_price)}
                        </Typography>

                        <IconButton
                          variant="favoriteIcon"
                          onClick={() => toggleFavorite(item.ad_external_id)}
                          size="small"
                        >
                          {favorites.has(item.ad_external_id) ? (
                            <Favorite
                              className="text-red-500"
                              fontSize="small"
                            />
                          ) : (
                            <FavoriteBorder fontSize="small" />
                          )}
                        </IconButton>
                      </div>

                      {renderCardDetails(item)}

                      <Stack spacing={0.5}>
                        <Typography variant="ellipsis2Lines">
                          {getLocationName(item)}
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          {new Date(item.timestamp * 1000).toLocaleDateString(
                            isRTL ? "ar-LB" : "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </Typography>
                      </Stack>

                      {item.ad_agent_name && (
                        <Typography variant="caption" className="text-gray-500">
                          {item.ad_agent_name}
                        </Typography>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
        </div>

        {!isLoading && (
          <IconButton
            variant="carouselNav"
            onClick={() => scroll(isRTL ? "left" : "right")}
            disabled={isLoading}
            className="flex-shrink-0 z-10"
          >
            {isRTL ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        )}
      </div>
    </Box>
  );
};

export default ListingCarousel;
