import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const appStores = [
  {
    url: "https://apps.apple.com/lb/app/dubizzle-lebanon-olx/id1605794268",
    icon: <AppleIcon className="text-[28px]" />,
    small: "Download on the",
    big: "App Store",
    bg: "#000",
  },
  {
    url: "https://play.google.com/store/apps/details?id=com.empg.olxlb",
    icon: <AndroidIcon className="text-[28px]" />,
    small: "GET IT ON",
    big: "Google Play",
    bg: "#000",
  },
  {
    url: "https://appgallery.huawei.com/app/C105789951",
    icon: (
      <Typography className="text-[22px] font-bold text-white">
        AG
      </Typography>
    ),
    small: "EXPLORE IT ON",
    big: "AppGallery",
    bg: "#db3236",
  },
];

function DownloadOlxApp() {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.secondaryPeper",
        borderTop: "1px solid rgba(0,47,52,.2)",
      }}
    >
      <Box className="py-8">
        <Container maxWidth={false}>
          <Box
            className="flex items-center justify-between flex-wrap gap-6 px-4 md:px-20"
          >
            <Box>
              <Typography
                className="text-xl md:text-[28px] font-bold mb-1"
                sx={{
                  color: "text.primary",
                }}
              >
                {t("Find amazing deals on the go.")}
              </Typography>
              <Typography
                className="text-lg md:text-2xl font-semibold"
                sx={{
                  color: "primary.main",
                }}
              >
                {t("Download OLX app now!")}
              </Typography>
            </Box>

            <Box className="flex gap-4 flex-wrap items-center">
              <img
                className="w-[200px] h-[180px]"
                src="https://www.olx.com.lb/assets/olxMobileApp.e928f8475339cf7b05bbf6db4e610b13.webp"
                alt="olx-app"
              />

              {appStores?.map((app, i) => (
                <Box
                  key={i}
                  component="a"
                  href={app.url}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-white min-w-[140px] no-underline transition-opacity duration-300 hover:opacity-80"
                  style={{ backgroundColor: app.bg }}
                >
                  {app.icon}
                  <Box>
                    <p className="text-[10px] leading-tight">
                      {app.small}
                    </p>
                    <p className="text-sm font-semibold leading-tight">
                      {app.big}
                    </p>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default DownloadOlxApp;