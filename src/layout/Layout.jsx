import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import DownloadOlxApp from "../pages/Home/DownloadOlxApp";
import { fetchCategoriesThunk } from "../redux/reducers/categoriesReducer";

function Layout({ children }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch categories when app loads
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "background.default",
          px: { xs: 1.25, sm: 10 },
          py: { xs: 1.25, sm: 5 },
        }}
      >
        {children}
      </Box>
      {pathname === "/" && <DownloadOlxApp />}
      <Footer />
    </Box>
  );
}

export default Layout;
