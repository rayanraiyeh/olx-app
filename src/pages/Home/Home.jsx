import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { CarouselApartmentsData } from "../../core/data/CarouselApartmentsData";
import { CarouselCarsForSaleData } from "../../core/data/CarouselCarsForSaleData";
import { CarouselPhoneData } from "../../core/data/CarouselPhoneData";
import Categories from "./Categories";
import CustomSlider from "./CustomSlider";
import ListingCarousel from "./ListingCarousel";

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <CustomSlider />
      <Categories />
      <ListingCarousel
        data={CarouselPhoneData}
        category="phones"
        title={"Mobile Phones"}
        viewMorePath={"/mobile-phones-accessories"}
      />

      <ListingCarousel
        data={CarouselCarsForSaleData}
        category="cars"
        title={"Cars for Sale"}
      />
      <ListingCarousel
        data={CarouselApartmentsData}
        category="properties"
        title={"Apartments & Villas for Sale"}
      />

      <Zoom in={showBackToTop}>
        <Button
          onClick={scrollToTop}
          variant="backToTop"
          startIcon={<KeyboardArrowUpIcon />}
          aria-label="back to top"
        >
          Back to top
        </Button>
      </Zoom>
    </>
  );
}

export default Home;
