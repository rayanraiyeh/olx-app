import { ThemeProvider } from "@emotion/react";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./layout/Layout";
import "./locales/i18n";
import { store } from "./redux/store";
import { theme } from "./theme/theme";

// Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const PhoneDetails = lazy(() => import("./pages/MobileListing/PhoneDetails"));
const PhoneListings = lazy(() => import("./pages/MobileListing/PhoneListing"));
const PostAd = lazy(() => import("./pages/PostAd/PostAd"));
const PostAdForm = lazy(() => import("./pages/PostAd/PostAdForm"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    Loading...
  </div>
);

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
            <Suspense fallback={<PageLoader />}>
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

                {/* 404 Not Found - must be last */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
