import { ThemeProvider } from "@emotion/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { theme } from "./theme/theme";

import ScrollToTop from "./components/ScrollToTop";
import "./locales/i18n";
import Home from "./pages/Home/Home";
import PhoneDetails from "./pages/MobileListing/PhoneDetails";
import PhoneListings from "./pages/MobileListing/PhoneListing";
import PostAd from "./pages/PostAd/PostAd";
import PostAdForm from "./pages/PostAd/PostAdForm";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {


  return (
    <Provider store={store}>

    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
          <ToastContainer
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            progressClassName="Toast__progress_bar"
            closeButton={false}
          />

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/post-ad" element={<PostAd />} />
            <Route path="/post-ad/:categorySlug" element={<PostAd />} />
            <Route
              path="/post-ad/:categorySlug/:subcategorySlug"
              element={<PostAd />}
            />
            
            <Route
              path="/post-ad/:categorySlug/form"
              element={<PostAdForm />}
            />
            <Route
              path="/post-ad/:categorySlug/:subcategorySlug/form"
              element={<PostAdForm />}
            />
            <Route
              path="/post-ad/:categorySlug/:subcategorySlug/:subSubcategorySlug/form"
              element={<PostAdForm />}
            />

            <Route
              path="/mobile-phones-accessories"
              element={<PhoneListings />}
            />
            <Route
              path="/mobile-phones-accessories/:slug"
              element={<PhoneDetails />}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;