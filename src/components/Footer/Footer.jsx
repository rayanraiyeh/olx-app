import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const socialIcons = [
  { icon: <FacebookIcon />, url: "https://www.facebook.com/dubizzlelebanon" },
  {
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/channel/UCPg0SSnmnUeq8rmJpaKjAtg",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/dubizzlelebanon/",
  },
];

const appStores = [
  {
    url: "https://apps.apple.com/lb/app/dubizzle-lebanon-olx/id1605794268",
    icon: <AppleIcon className="text-2xl" />,
    small: "Download on the",
    big: "App Store",
    bg: "#000",
  },
  {
    url: "https://play.google.com/store/apps/details?id=com.empg.olxlb",
    icon: <AndroidIcon className="text-2xl" />,
    small: "GET IT ON",
    big: "Google Play",
    bg: "#000",
  },
  {
    url: "https://appgallery.huawei.com/app/C105789951",
    icon: (
      <Typography className="text-lg font-bold text-white">
        AG
      </Typography>
    ),
    small: "EXPLORE IT ON",
    big: "AppGallery",
    bg: "#db3236",
  },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.secondaryPeper",
        borderTop: "1px solid rgba(0,47,52,.2)",
      }}
    >
      <Container maxWidth={false}>
        <Box className="px-20 py-12">
          <Grid container spacing={4}>
            <FooterColumn
              title={t("Popular Categories")}
              items={[
                t("Cars"),
                t("Flats for rent"),
                t("Mobile Phones"),
                t("Jobs"),
              ]}
            />

            <FooterColumn
              title={t("Trending Searches")}
              items={[t("Bikes"), t("Watches"), t("Books"), t("Dogs")]}
            />

            <FooterColumn
              title={t("About Us")}
              items={[t("Contact Us"), t("OLX for Businesses")]}
            />

            <FooterColumn
              title="OLX"
              items={[
                t("Help"),
                t("Sitemap"),
                t("Terms of use"),
                t("Privacy Policy"),
              ]}
            />

            <Grid item
            size={{xs:12,sm:12,md:4}} >
              <FooterTitle>{t("Follow Us")}</FooterTitle>

              <Box className="flex gap-3 mb-4">
                {socialIcons.map((s, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={s.url}
                    target="_blank"
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    sx={{
                      borderColor: "text.primary",
                      color: "text.primary",
                      "&:hover": {
                        borderColor: "secondary.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </Box>

              <Box className="flex flex-wrap gap-2">
                {appStores.map((app, i) => (
                  <Box
                    key={i}
                    component="a"
                    href={app.url}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-white min-w-[110px] no-underline transition-opacity duration-300 hover:opacity-80"
                    style={{ backgroundColor: app.bg }}
                  >
                    {app.icon}
                    <Box>
                      <p className="text-[8px]">
                        {app.small}
                      </p>
                      <p className="text-xs font-semibold">
                        {app.big}
                      </p>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "secondary.main" }} className="py-4">
        <Container maxWidth="xl">
          <Box className="flex items-center flex-wrap justify-end gap-2">
            <Typography className="font-semibold text-sm">
              {t("Classifieds in Lebanon.")}
            </Typography>
            <Typography className="text-sm">
              © 2006–{new Date().getFullYear()} OLX
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

/* —————— Small Reusable Components —————— */

const FooterTitle = ({ children }) => (
  <Typography
    className="font-bold mb-4 text-sm uppercase"
    sx={{ color: "text.primary" }}
  >
    {children}
  </Typography>
);

const FooterColumn = ({ title, items }) => (
  <Grid item size={{xs:12,sm:6,md:2}}>
    <FooterTitle>{title}</FooterTitle>
    <Box className="flex flex-col gap-2">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href="#"
          underline="none"
          className="text-sm"
          sx={{
            color: "text.primary",
            "&:hover": { color: "text.secondary" },
          }}
        >
          {item}
        </Link>
      ))}
    </Box>
  </Grid>
);

export default Footer;