import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { PhoneData } from "../../core/data/PhoneData";

import {
  Chat,
  FavoriteBorder,
  NavigateNext,
  Phone,
  Verified,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  IconButton,
  Pagination as MuiPagination,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { GET_IMAGE } from "../../core/apis/API";

dayjs.extend(relativeTime);

const PhoneCardHorizontal = ({ phone }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isFeatured = phone.product === "featured";
  const isElite = phone.product === "elite";

  dayjs.locale(i18n.language);

  const isArabic = i18n.language === "ar";

  const getLocalizedText = (key) => {
    if (isArabic && phone[`${key}_l1`]) {
      return phone[`${key}_l1`];
    }
    return phone[key];
  };

  const getLocation = () => {
    const lvl1 = isArabic
      ? phone["location.lvl1"]?.name_l1 || phone["location.lvl1"]?.name
      : phone["location.lvl1"]?.name;

    const lvl2 = isArabic
      ? phone["location.lvl2"]?.name_l1 || phone["location.lvl2"]?.name
      : phone["location.lvl2"]?.name;

    if (lvl2 && lvl1) {
      return `${lvl2}, ${lvl1}`;
    } else if (lvl1) {
      return lvl1;
    } else if (lvl2) {
      return lvl2;
    }
    return t("Lebanon");
  };

  const showPhoneNumber =
    phone.contactInfo?.roles?.includes("show_phone_number");
  const showWhatsApp = phone.contactInfo?.roles?.includes(
    "show_whatsapp_phone_number"
  );
  const allowChat = phone.contactInfo?.roles?.includes(
    "allow_chat_communication"
  );

  const getPrice = () => {
    if (phone.extraFields?.price) {
      return phone.extraFields.price;
    }
    if (phone.price && phone.price > 0) {
      return phone.price;
    }
    return 0;
  };

  const price = getPrice();

  const getImageUrl = () => {
    if (phone?.coverPhoto?.id) {
      return `${GET_IMAGE}/${phone?.coverPhoto?.id}-400x300.webp`;
    }
    return "https://via.placeholder.com/240x180?text=No+Image";
  };

  const getTimeAgo = (timestamp) => {
    if (!timestamp) return t("recently");
    const date = dayjs(timestamp * 1000);
    return date.fromNow();
  };

  const formatMemberSince = (dateString) => {
    if (!dateString) return null;
    return dayjs(dateString).format("MMM YYYY");
  };

  const hasAgency = phone?.agency?.logo?.url;

  const handleCardClick = (e) => {
    if (e.target.closest("button") || e.target.closest('[role="button"]')) {
      return;
    }

    if (phone.slug) {
      navigate(`/mobile-phones-accessories/${phone.slug}`);
    } else {
      navigate(`/mobile-phones-accessories/${phone.objectID}`);
    }
  };

  const handleButtonClick = (e, action) => {
    e.stopPropagation();
  };

  return (
    <Card variant="phoneCardHorizontal" onClick={handleCardClick}>
      <div className="relative flex-shrink-0">
        {(isFeatured || isElite) && (
          <Chip
            label={isElite ? t("Elite") : t("Featured")}
            size="small"
            className="absolute top-0 left-0 z-10 rounded-tl rounded-br-lg"
            sx={{
              bgcolor: "secondary.main",
              color: "text.primary",
              fontWeight: 600,
            }}
          />
        )}
        <img
          src={getImageUrl()}
          alt={getLocalizedText("title") || "Phone"}
          className="w-48 h-36 object-cover rounded"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/240x180?text=No+Image";
          }}
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <Typography variant="h4" className="text-accent font-bold">
          {price > 0 ? `USD ${price.toLocaleString()}` : t("Contact for price")}
        </Typography>

        <Typography variant="h6" className="text-textPrimary line-clamp-1">
          {getLocalizedText("title") || t("Untitled")}
        </Typography>

        {getLocalizedText("description") && (
          <Typography
            variant="body2"
            className="text-textPrimary opacity-70 line-clamp-2"
          >
            {getLocalizedText("description")}
          </Typography>
        )}

        <Typography variant="body2" className="text-textPrimary opacity-80">
          {getLocation()} • {getTimeAgo(phone.timestamp || phone.createdAt)}
        </Typography>

        <div className="flex gap-2 mt-auto">
          {allowChat && (
            <Button
              variant="chatAction"
              startIcon={<Chat />}
              onClick={(e) => handleButtonClick(e, "Chat")}
            >
              {t("Chat")}
            </Button>
          )}

          {showPhoneNumber && (
            <Button
              variant="callAction"
              startIcon={<Phone />}
              onClick={(e) => handleButtonClick(e, "Call")}
            >
              {t("Call")}
            </Button>
          )}

          {showWhatsApp && (
            <Button
              variant="whatsappButton"
              startIcon={<WhatsApp className="text-green-700" />}
              onClick={(e) => handleButtonClick(e, "WhatsApp")}
            >
              {t("WhatsApp")}
            </Button>
          )}
        </div>
      </div>

      {hasAgency && <Divider orientation="vertical" flexItem className="mx-4" />}

      <div className="flex flex-col items-end justify-between flex-shrink-0 min-w-[180px]">
        <IconButton
          onClick={(e) => handleButtonClick(e, "Favorite")}
          className="hover:bg-background-default"
        >
          <FavoriteBorder className="text-accent" />
        </IconButton>

        {hasAgency && (
          <div className="text-right flex flex-col items-end gap-2">
            <Typography variant="body2" className="font-medium text-textPrimary">
              {isArabic
                ? phone.agency.name_l1 || phone.agency.name
                : phone.agency.name}
            </Typography>

            {phone.agency.createdAt && (
              <Typography variant="caption" className="text-textPrimary opacity-70">
                {t("Member since")} {formatMemberSince(phone.agency.createdAt)}
              </Typography>
            )}

            {phone.agency.logo?.url && (
              <img
                src={phone.agency.logo.url}
                alt={phone.agency.name}
                className="w-[140px] h-auto max-h-[60px] object-contain bg-black p-2 rounded"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            )}

            {phone.isSellerVerified && (
              <div className="flex items-center gap-1">
                <Verified className="text-base text-[#00bcd4]" />
                <Typography variant="caption" className="text-[#00bcd4] font-medium">
                  {t("Verified Business")}
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

const PhoneListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const ITEMS_PER_PAGE = 12;
  const ELITE_PER_PAGE = 2;
  const FEATURED_PER_PAGE = 3;

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n.language]);

  const allEliteAds = PhoneData[1]?.hits?.hits?.map((hit) => hit._source) || [];
  const allFeaturedAds =
    PhoneData[2]?.hits?.hits?.map((hit) => hit._source) || [];
  const allRegularAds =
    PhoneData[3]?.hits?.hits?.map((hit) => hit._source) || [];

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(allRegularAds.length / ITEMS_PER_PAGE);

  const eliteStartIndex = (currentPage - 1) * ELITE_PER_PAGE;
  const eliteEndIndex = eliteStartIndex + ELITE_PER_PAGE;
  const currentEliteAds = allEliteAds.slice(eliteStartIndex, eliteEndIndex);

  const featuredStartIndex = (currentPage - 1) * FEATURED_PER_PAGE;
  const featuredEndIndex = featuredStartIndex + FEATURED_PER_PAGE;
  const currentFeaturedAds = allFeaturedAds.slice(
    featuredStartIndex,
    featuredEndIndex
  );

  const regularStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const regularEndIndex = regularStartIndex + ITEMS_PER_PAGE;
  const currentRegularAds = allRegularAds.slice(
    regularStartIndex,
    regularEndIndex
  );

  const handlePageChange = (event, page) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      setSearchParams({ page: "1" });
    }
  }, [currentPage, totalPages, setSearchParams]);

  return (
    <div className="min-h-screen bg-background">
      <Container maxWidth="xl" className="py-8">
        <div className="mb-8">
          <Typography variant="h3" className="text-textPrimary font-semibold mb-2">
            {t("Mobile Phones")}
          </Typography>

          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
            className="mb-6"
          >
            <Link to="/" color="secondary" className="no-underline">
              <Typography color="inherit">{t("Home")}</Typography>
            </Link>

            <Typography color="text.primary" fontWeight={500}>
              {t("Mobile Phones")}
            </Typography>
          </Breadcrumbs>
          <Typography variant="body1" className="text-textPrimary opacity-80">
            {t("Page")} {currentPage} {t("of")} {totalPages} • {t("Total")}:{" "}
            {allRegularAds.length} {t("regular listings")}
          </Typography>
        </div>

        {currentEliteAds.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h5" className="text-textPrimary font-semibold">
                {t("Elite ads")} ({t("showing")} {eliteStartIndex + 1}-
                {Math.min(eliteEndIndex, allEliteAds.length)} {t("of")}{" "}
                {allEliteAds.length})
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              {currentEliteAds.map((phone) => (
                <PhoneCardHorizontal key={phone.objectID} phone={phone} />
              ))}
            </div>
          </div>
        )}

        {currentFeaturedAds.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h5" className="text-textPrimary font-semibold">
                {t("Featured ads")} ({t("showing")} {featuredStartIndex + 1}-
                {Math.min(featuredEndIndex, allFeaturedAds.length)} {t("of")}{" "}
                {allFeaturedAds.length})
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              {currentFeaturedAds.map((phone) => (
                <PhoneCardHorizontal key={phone.objectID} phone={phone} />
              ))}
            </div>
          </div>
        )}

        <div className="mb-4">
          <Typography variant="h5" className="text-textPrimary font-semibold mb-4">
            {t("All listings")} ({t("showing")} {regularStartIndex + 1}-
            {Math.min(regularEndIndex, allRegularAds.length)} {t("of")}{" "}
            {allRegularAds.length})
          </Typography>

          <div className="flex flex-col gap-4">
            {currentRegularAds.map((phone) => (
              <PhoneCardHorizontal key={phone.objectID} phone={phone} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <MuiPagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            siblingCount={1}
            boundaryCount={1}
          />
        </div>

        <div className="flex justify-center mt-4">
          <Typography variant="body2" className="text-textPrimary">
            {t("Page")} {currentPage} {t("of")} {totalPages}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default PhoneListings;