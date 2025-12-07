import {
  Chat,
  Favorite,
  FavoriteBorder,
  LocationOn,
  NavigateNext,
  Phone,
  Share,
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
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_IMAGE } from "../../core/apis/API";
import { PhoneData } from "../../core/data/PhoneData";

dayjs.extend(relativeTime);

const PhoneDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [phone, setPhone] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const isArabic = i18n.language === "ar";
  dayjs.locale(i18n.language);

  // Find phone by slug or objectID
  useEffect(() => {
    const allEliteAds =
      PhoneData[1]?.hits?.hits?.map((hit) => hit._source) || [];
    const allFeaturedAds =
      PhoneData[2]?.hits?.hits?.map((hit) => hit._source) || [];
    const allRegularAds =
      PhoneData[3]?.hits?.hits?.map((hit) => hit._source) || [];
    const allPhones = [...allEliteAds, ...allFeaturedAds, ...allRegularAds];

    const foundPhone = allPhones.find(
      (p) => p.slug === slug || p.objectID === slug
    );

    if (foundPhone) {
      setPhone(foundPhone);
    } else {
      navigate("/phones");
    }
  }, [slug, navigate]);

  if (!phone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="h5">{t("Loading")}...</Typography>
      </div>
    );
  }

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

  const getImages = () => {
    const images = [];
    if (phone.coverPhoto?.id) {
      images.push(`${GET_IMAGE}/${phone.coverPhoto.id}-800x600.webp`);
    }
    if (phone.images && phone.images.length > 0) {
      phone.images.forEach((img) => {
        if (img.id) {
          images.push(`${GET_IMAGE}/${img.id}-800x600.webp`);
        }
      });
    }
    return images.length > 0
      ? images
      : ["https://via.placeholder.com/800x600?text=No+Image"];
  };

  const images = getImages();

  const canShowPhone = phone.contactInfo?.roles?.includes("show_phone_number");
  const canShowWhatsApp = phone.contactInfo?.roles?.includes(
    "show_whatsapp_phone_number"
  );
  const canChat = phone.contactInfo?.roles?.includes(
    "allow_chat_communication"
  );

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
  const isFeatured = phone.product === "featured";
  const isElite = phone.product === "elite";

  return (
    <div className="min-h-screen bg-background">
      <Container maxWidth="xl" className="py-8">
        <div className="mb-8">
          <Typography
            variant="h3"
            className="text-textPrimary font-semibold mb-2"
          >
            {getLocalizedText("title") || t("Untitled")}
          </Typography>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
            className="mb-6"
          >
            <Link to="/" color="inherit" className="no-underline">
              <Typography color="inherit">{t("Home")}</Typography>
            </Link>
            <Link
              color="inherit"
              className="cursor-pointer"

              to="/mobile-phones-accessories"
            >
              <Typography color="inherit">{t("Mobile Phones")}</Typography>
            </Link>
            <Typography variant="linkText" fontWeight={500}>
              {getLocalizedText("title") || t("Untitled")}
            </Typography>
          </Breadcrumbs>
        </div>

        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Card className="p-4 relative">
              {(isFeatured || isElite) && (
                <div className="absolute ">
                  <Chip
                    label={isElite ? t("Elite") : t("Featured")}
                    variant="productBadge"
                  />
                </div>
              )}

              <img
                src={images[selectedImage]}
                alt={getLocalizedText("title")}
                className="w-full h-[500px] object-contain rounded bg-background-paper"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=No+Image";
                }}
              />

              {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${getLocalizedText("title")} ${index + 1}`}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 object-cover rounded cursor-pointer transition-opacity duration-200 hover:opacity-100 ${
                        selectedImage === index
                          ? "border-2 border-primary opacity-100"
                          : "border-2 border-transparent opacity-60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </Card>

            <div className="grid gap-5">
              <Card className="p-6  grid gap-2">
                <Typography variant="h5" className="mb-4 font-semibold">
                  {t("Details")}
                </Typography>
                <Grid container spacing={2}>
                  {phone.extraFields?.brand && (
                    <>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("Brand")}
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" className="font-medium">
                          {phone.extraFields.brand}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  {phone.extraFields?.model && (
                    <>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("Model")}
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" className="font-medium">
                          {phone.extraFields.model}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  {phone.extraFields?.condition && (
                    <>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("Condition")}
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" className="font-medium">
                          {phone.extraFields.condition}
                        </Typography>
                      </Grid>
                    </>
                  )}
                  {phone.extraFields?.seller_type && (
                    <>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("Seller Type")}
                        </Typography>
                      </Grid>
                      <Grid item size={{ xs: 6 }}>
                        <Typography variant="body2" className="font-medium">
                          {phone.extraFields.seller_type}
                        </Typography>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Card>

              <Card className="p-6  grid gap-2">
                <Typography variant="h5" className="mb-4 font-semibold">
                  {t("Description")}
                </Typography>
                <Typography
                  variant="body1"
                  className="whitespace-pre-line leading-relaxed"
                >
                  {getLocalizedText("description") ||
                    t("No description available")}
                </Typography>
              </Card>

              <Card className="p-6 grid gap-2">
                <Typography variant="h5" className="mb-4 font-semibold">
                  {t("Location")}
                </Typography>
                <div className="flex items-center gap-2 mb-4">
                  <LocationOn color="primary" />
                  <Typography variant="body1">{getLocation()}</Typography>
                </div>
              </Card>
            </div>
          </Grid>

          <Grid item size={{ xs: 12, md: 5 }}>
            <Card className="p-6 sticky top-4 grid gap-2">
              <Typography variant="h3" className="font-bold mb-4">
                {price > 0
                  ? `USD ${price.toLocaleString()}`
                  : t("Contact for price")}
              </Typography>

              <Typography variant="h5" className="mb-2 font-semibold">
                {getLocalizedText("title") || t("Untitled")}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                className="mb-6"
              >
                {getLocation()} •{" "}
                {getTimeAgo(phone.timestamp || phone.createdAt)}
              </Typography>

              <Divider className="mb-6" />

              {hasAgency && (
                <div className="mb-6">
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className="mb-4"
                  >
                    {t("Listed by agency")}
                  </Typography>

                  {phone.agency.logo?.url && (
                    <img
                      src={phone.agency.logo.url}
                      alt={phone.agency.name}
                      className="w-[140px] h-auto max-h-[60px] object-contain bg-black p-2 rounded mb-4"
                    />
                  )}

                  <Typography variant="h6" className="mb-1">
                    {isArabic
                      ? phone.agency.name_l1 || phone.agency.name
                      : phone.agency.name}
                  </Typography>

                  {phone.agency.createdAt && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-2"
                    >
                      {t("Member since")}{" "}
                      {formatMemberSince(phone.agency.createdAt)}
                    </Typography>
                  )}

                  {phone.isSellerVerified && (
                    <div className="flex items-center gap-1">
                      <Verified className="text-lg text-[#00bcd4]" />
                      <Typography
                        variant="body2"
                        className="text-[#00bcd4] font-medium"
                      >
                        {t("Verified Business")}
                      </Typography>
                    </div>
                  )}

                  <Button
                    variant="outlined"
                    fullWidth
                    className="mt-4"
                    onClick={() => {
                      /* Navigate to agency profile */
                    }}
                  >
                    {t("See profile")}
                  </Button>

                  <Divider className="my-6" />
                </div>
              )}

              <div className="flex flex-col gap-4">
                {canShowPhone && (
                  <Button
                    variant="phoneAction"
                    size="large"
                    fullWidth
                    startIcon={<Phone />}
                    onClick={() => setShowPhoneNumber(!showPhoneNumber)}
                  >
                    {showPhoneNumber
                      ? phone.contactInfo?.phoneNumber || t("Show phone number")
                      : t("Show phone number")}
                  </Button>
                )}

                {canShowWhatsApp && (
                  <Button
                    variant="whatsappAction"
                    size="large"
                    fullWidth
                    startIcon={<WhatsApp className="text-green-700" />}
                  >
                    {t("WhatsApp")}
                  </Button>
                )}

                {canChat && (
                  <Button
                    variant="phoneAction"
                    size="large"
                    fullWidth
                    startIcon={<Chat />}
                  >
                    {t("Chat")}
                  </Button>
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <Button variant="shareAction" fullWidth startIcon={<Share />}>
                  {t("Share")}
                </Button>
                <IconButton
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="border border-gray-300 rounded"
                >
                  {isFavorite ? (
                    <Favorite className="text-red-500" />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
              </div>

              <Paper elevation={0} className="bg-background-paper p-4 mt-6">
                <Typography variant="subtitle2" className="mb-2 font-semibold">
                  {t("Your safety matters to us!")}
                </Typography>
                <ul className="pl-4 m-0">
                  <li>
                    <Typography variant="body2" className="mb-1">
                      {t(
                        "Only meet in public / crowded places for example metro stations and malls."
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" className="mb-1">
                      {t(
                        "Never go alone to meet a buyer / seller, always take someone with you."
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2" className="mb-1">
                      {t(
                        "Check and inspect the product properly before purchasing it."
                      )}
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      {t(
                        "Never pay anything in advance or transfer money before inspecting the product."
                      )}
                    </Typography>
                  </li>
                </ul>
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PhoneDetails;
