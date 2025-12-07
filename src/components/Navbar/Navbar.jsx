import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [selectedLocation, setSelectedLocation] = React.useState("Lebanon");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [sellDialogOpen, setSellDialogOpen] = React.useState(false);

  const isPostAdPage = location.pathname.includes("post-ad");

  const handleLanguageChange = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (action) => {
    setMobileMenuOpen(false);
    if (action) action();
  };

  const handleSellClick = () => {
    setSellDialogOpen(true);
  };

  const handleCloseSellDialog = () => {
    setSellDialogOpen(false);
  };

  const handleContinueAsGuest = () => {
    setSellDialogOpen(false);
    navigate("/post-ad");
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
              py: 1.5,
              px: { xs: 0.25, sm: 10 },
              display: "flex",
              justifyContent: isPostAdPage ? "space-between" : "space-between",
              gap: { xs: 1 },
            }}
          >
            <Box
              onClick={() => navigate("/")}
              className="cursor-pointer flex items-center"
            >
              <Box
                sx={{
                  width: { xs: "auto" },
                  height: { xs: 40, sm: 48 },
                  mr: { xs: 1, sm: 2 },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 64"
                  width="64"
                  height="auto"
                >
                  <path
                    d="M25.12 0A25.1 25.1 0 0 0 0 25.08c0 13.84 11.28 25.08 25.15 25.08s25.12-11.21 25.12-25.08A25.12 25.12 0 0 0 25.12 0m.03 32.68a7.58 7.58 0 0 1-7.62-7.6c0-4.22 3.4-7.6 7.62-7.6a7.58 7.58 0 0 1 7.61 7.6 7.58 7.58 0 0 1-7.61 7.6m42.4-25.81A7.23 7.23 0 0 0 60.32 0a7.21 7.21 0 0 0-7.21 6.8h-.02v36.13a7.23 7.23 0 0 0 14.47 0l-.01-.34h.01V6.87h-.02zm36.6 31.2l-5.81-5.81 4.79-4.78a7.2 7.2 0 0 0 2.87-5.75 7.23 7.23 0 0 0-7.24-7.23 7.22 7.22 0 0 0-5.63 2.7l-4.94 4.93-4.84-4.83a7.22 7.22 0 0 0-5.8-2.93c-4 0-7.25 3.24-7.25 7.23a7.2 7.2 0 0 0 2.64 5.57l5.1 5.09-4.6 4.6a7.21 7.21 0 0 0-3.14 5.94 7.23 7.23 0 0 0 7.24 7.23 7.2 7.2 0 0 0 4.86-1.89h.03l5.76-5.74 4.55 4.54a7.24 7.24 0 0 0 6.02 3.22c4 0 7.24-3.24 7.24-7.23a7.2 7.2 0 0 0-1.85-4.81v-.05z"
                    fill="#000"
                  />
                </svg>
              </Box>
            </Box>

            {!isPostAdPage && (
              <>
               
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    px: 2,
                    py: 1,
                    minWidth: 200,
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{ color: "secondary.main", mr: 1, fontSize: 20 }}
                  />
                  <Select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    displayEmpty
                    variant="standard"
                    disableUnderline
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      flex: 1,
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "text.primary",
                      ".MuiSelect-icon": {
                        color: "text.primary",
                      },
                    }}
                  >
                    <MenuItem value="Lebanon">{t("Location")}</MenuItem>
                    <MenuItem value="Beirut">Beirut</MenuItem>
                    <MenuItem value="Tripoli">Tripoli</MenuItem>
                    <MenuItem value="Sidon">Sidon</MenuItem>
                  </Select>
                </Box>

                <Box
                  className="flex-grow flex items-center border border-gray-200 rounded bg-background-paper"
                  sx={{
                    maxWidth: { xs: "100%", md: 700 },
                  }}
                >
                  <InputBase
                    placeholder={t("Find Cars, Mobile Phones and more...")}
                    sx={{
                      flex: 1,
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.5, sm: 1 },
                      fontSize: { xs: "13px", sm: "14px" },
                      color: "text.primary",
                      "&::placeholder": {
                        color: "text.secondary",
                        opacity: 0.7,
                      },
                    }}
                  />
                  <Box
                    className="flex items-center justify-center cursor-pointer hover:opacity-90"
                    sx={{
                      backgroundColor: "primary.main",
                      color: "background.paper",
                      p: { xs: 1, sm: 1.5 },
                    }}
                  >
                    <SearchIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </Box>
                </Box>
              </>
            )}

            <Button
              variant="languageButton"
              onClick={handleLanguageChange}
              sx={{
                display: { xs: "none", sm: "block" },
                px: 2,
              }}
            >
              <Typography variant="linkText">
                {i18n.language === "en" ? "العربية" : "English"}
              </Typography>
            </Button>

            {!isPostAdPage && (
              <>
                <Button
                  variant="loginButton"
                  sx={{
                    display: { xs: "none", md: "block" },
                    px: 2,
                  }}
                >
                  {t("Login")}
                </Button>

                <Button
                  variant="sellButton"
                  startIcon={
                    <AddIcon sx={{ display: { xs: "none", sm: "block" } }} />
                  }
                  onClick={handleSellClick}
                  sx={{
                    display: { xs: "none", md: "inherit" },
                 
                  }}
                >
                  {t("Sell")}
                </Button>

                <IconButton
                  variant="menuToggle"
                  onClick={toggleMobileMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        open={sellDialogOpen}
        onClose={handleCloseSellDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          <Box className="flex items-center justify-between">
            <Typography variant="h6" className="font-bold">
              {t("Start Selling")}
            </Typography>
            <IconButton
              variant="closeButton"
              onClick={handleCloseSellDialog}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.primary" className="mb-4">
            {t("Choose how you want to continue")}
          </Typography>
        </DialogContent>
        <DialogActions className="px-6 pb-6 gap-2 flex-col">
          <Button
            variant="dialogPrimary"
            fullWidth
            onClick={handleContinueAsGuest}
          >
            {t("Continue as Guest")}
          </Button>
          <Button
            variant="dialogSecondary"
            fullWidth
            disabled
          >
            {t("Sign In")}
          </Button>
        </DialogActions>
      </Dialog>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box className="w-[280px]">
          <Box className="flex items-center justify-between p-4 border-b border-gray-200">
            <Box className="flex items-center">
              <Box className="w-10 h-10 mr-2"></Box>
            </Box>
            <IconButton onClick={toggleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem
              className="cursor-pointer"
              button
              onClick={() => handleMenuItemClick(() => navigate("/"))}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary={t("Home")} />
            </ListItem>

            <ListItem
              className="cursor-pointer"
              button
              onClick={() => handleMenuItemClick(handleSellClick)}
            >
              <ListItemIcon>
                <AddIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary={t("Sell")} />
            </ListItem>

            <Divider />

            <ListItem
              className="cursor-pointer"
              button
              onClick={() => handleMenuItemClick(handleLanguageChange)}
            >
              <ListItemIcon>
                <LanguageIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText
                primary={i18n.language === "en" ? "العربية" : "English"}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <Box className="w-full">
                <Box className="flex items-center mb-2">
                  <LocationOnOutlinedIcon
                    sx={{ color: "primary.main", mr: 1, fontSize: 20 }}
                  />
                  <ListItemText primary={t("Location")} />
                </Box>
                <Select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  fullWidth
                  size="small"
                  className="text-sm"
                  sx={{
                    color: "text.primary",
                  }}
                >
                  <MenuItem value="Lebanon">Lebanon</MenuItem>
                  <MenuItem value="Beirut">Beirut</MenuItem>
                  <MenuItem value="Tripoli">Tripoli</MenuItem>
                  <MenuItem value="Sidon">Sidon</MenuItem>
                </Select>
              </Box>
            </ListItem>
            
            <ListItem className="cursor-pointer" button>
              <ListItemIcon>
                <LoginIcon sx={{ color: "text.primary" }} />
              </ListItemIcon>
              <ListItemText secondary={t("Login")} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;