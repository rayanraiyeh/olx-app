import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App.jsx";
import { queryClient } from "./core/apis/ReactQueryInstance.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
