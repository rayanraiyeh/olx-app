import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#57b9df",
      light: "#7fc9e6",
      dark: "#3a9bc4",
    },
    secondary: {
      main: "#fcde68",
      light: "#fde88f",
      dark: "#dbc053",
    },
    success: {
      main: "#25D366",
      light: "#e8f7e8",
      lighter: "#d0f7d0",
      dark: "#128C7E",
    },
    info: {
      main: "#00bcd4",
    },
    background: {
      default: "#f7f8f9",
      paper: "#ffffff",
      secondaryPeper: "#f1f1f2",
    },
    text: {
      primary: "#404041",
      secondary: "#ec5b3e",
      tertiary: "#57b9df",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
      startIcon: {
        marginLeft: "0px",
      },
    },
    variants: [
      {
        props: { variant: "backToTop" },
        style: {
          position: "fixed",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: `1px solid #e0e0e0`,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          borderRadius: "24px",
          padding: "8px 20px",
          fontWeight: 500,
          fontSize: "14px",
          zIndex: 1000,
          "&:hover": {
            backgroundColor: "#f5f5f5",
            borderColor: "#bdbdbd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      {
        props: { variant: "postButton" },
        style: {
          backgroundColor: "#404041",
          border: `1px solid #e0e0e0`,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          borderRadius: "12px",
          fontWeight: 600,
          color: "white",
          padding: "10px 30px",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#313132ff",
            borderColor: "#bdbdbd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      {
        props: { variant: "refreshCircle" },
        style: {
          minWidth: "unset",
          width: 64,
          height: 64,
          borderRadius: "50%",
          backgroundColor: theme.palette.primary.main,
          color: "#FFFFFF",
          padding: 0,
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            transform: "scale(1.1)",
            boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
          "@media (max-width: 600px)": {
            width: 56,
            height: 56,
          },
        },
      },
      {
        props: { variant: "phoneAction" },
        style: {
          paddingTop: 12,
          paddingBottom: 12,
          border: "1px solid",
          borderColor: theme.palette.divider,
          color: theme.palette.text.primary,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
          },
        },
      },
      {
        props: { variant: "whatsappAction" },
        style: {
          paddingTop: 12,
          paddingBottom: 12,
          border: "1px solid",
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.success.light,
          color: theme.palette.text.primary,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.palette.success.lighter,
          },
        },
      },
      {
        props: { variant: "shareAction" },
        style: {
          color: theme.palette.text.primary,
          border: "1px solid",
          borderColor: theme.palette.divider,
        },
      },
      {
        props: { variant: "chatAction" },
        style: {
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
          },
        },
      },
      {
        props: { variant: "callAction" },
        style: {
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,
          },
        },
      },
      {
        props: { variant: "whatsappButton" },
        style: {
          fontWeight: "bold",
          backgroundColor: theme.palette.success.light,
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.success.lighter,
          },
        },
      },
      {
        props: { variant: "sellButton" },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "25px",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
            boxShadow: "none",
          },
        },
      },
      {
        props: { variant: "languageButton" },
        style: {
          color: theme.palette.text.primary,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          minWidth: "auto",
        },
      },
      {
        props: { variant: "loginButton" },
        style: {
          color: theme.palette.text.primary,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          minWidth: "auto",
          textDecoration: "underline",
          textDecorationColor: "#ec5b3e",
          textDecorationThickness: "1.5px",
          textUnderlineOffset: "4px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
      {
        props: { variant: "dialogPrimary" },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
          fontWeight: "bold",
          textTransform: "none",
          padding: "12px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
      },
      {
        props: { variant: "dialogSecondary" },
        style: {
          color: theme.palette.text.secondary,
          borderColor: "#e0e0e0",
          textTransform: "none",
          padding: "12px",
          borderRadius: "8px",
          "&.Mui-disabled": {
            color: theme.palette.text.disabled,
            borderColor: "#e0e0e0",
          },
        },
      },
    ],
  },
  MuiIconButton: {
    variants: [
      {
        props: { variant: "carouselNav" },
        style: {
          width: 48,
          height: 48,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
          "@media (max-width: 900px)": {
            display: "none",
          },
        },
      },
      {
        props: { variant: "favoriteIcon" },
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        },
      },
      {
        props: { variant: "menuToggle" },
        style: {
          color: theme.palette.text.primary,
        },
      },
      {
        props: { variant: "closeButton" },
        style: {
          color: theme.palette.text.secondary,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    ],
  },
  MuiCard: {
    variants: [
      {
        props: { variant: "listingCard" },
        style: {
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
          },
        },
      },
      {
        props: { variant: "phoneCardHorizontal" },
        style: {
          display: "flex",
          gap: theme.spacing(2),
          padding: theme.spacing(3),
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
          position: "relative",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
      },
    ],
  },
  MuiBox: {
    variants: [
      {
        props: { variant: "categoryCard" },
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": {
            backgroundColor: "#F9FAFB",
            borderColor: "#9CA3AF",
          },
        },
      },
      {
        props: { variant: "categoryItem" },
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
          cursor: "pointer",
          borderBottom: "1px solid #E5E7EB",
          transition: "background-color 0.2s",
          "&:hover": {
            backgroundColor: "#F9FAFB",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      {
        props: { variant: "categoryItemSelected" },
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
          cursor: "pointer",
          borderBottom: "1px solid #E5E7EB",
          backgroundColor: "#EFF6FF",
          transition: "background-color 0.2s",
          "&:hover": {
            backgroundColor: "#DBEAFE",
          },
          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
      {
        props: { variant: "emptyState" },
        style: {
          padding: theme.spacing(4),
          textAlign: "center",
          color: "#9CA3AF",
        },
      },
    ],
  },
  MuiGrid: {
    variants: [
      {
        props: { variant: "categoryGrid" },
        style: {
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          overflow: "hidden",
        },
      },
      {
        props: { variant: "categoryColumn" },
        style: {
          "@media (min-width: 900px)": {
            borderRight: "1px solid #E5E7EB",
          },
          "@media (max-width: 899px)": {
            borderBottom: "1px solid #E5E7EB",
          },
        },
      },
    ],
  },
  MuiTypography: {
    variants: [
      {
        props: { variant: "linkText" },
        style: {
          color: theme?.palette?.text?.primary,
          cursor: "pointer",
          transition: "color 0.3s ease",
          textDecoration: "none",
          "&:hover": {
            color: theme?.palette?.primary?.main,
          },
        },
      },
      {
        props: { variant: "viewMore" },
        style: {
          color: theme.palette.text.tertiary,
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
      {
        props: { variant: "ellipsis2Lines" },
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        },
      },

      {
        props: { variant: "errorText" },
        style: {
          color: "red",
          marginTop: 0.5,
          display: "block",
          fontSize: "12px",
        },
      },
    ],
  },
  MuiChip: {
    styleOverrides: {
      filledPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        fontWeight: 600,
        "&:hover": {
          backgroundColor: "#3a9bc4",
        },
      },
      outlinedDefault: {
        borderColor: "#ccc",
        color: "#404041",
        fontWeight: 500,
        "&:hover": {
          borderColor: "#57b9df",
          color: "#57b9df",
        },
      },
    },
    variants: [
      {
        props: { variant: "productBadge" },
        style: {
          backgroundColor: theme.palette.secondary.main,
          color: "#404041",
          fontWeight: 600,
        },
      },
    ],
  },
  MuiLink: {
    styleOverrides: {
      root: {
        cursor: "pointer",
      },
    },
  },
};
