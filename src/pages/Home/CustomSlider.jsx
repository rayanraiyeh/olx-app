import { Box, Container } from "@mui/material";
import Slider from "react-slick";

function CustomSlider() {
  const images = [
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15667084/da0592cb6ed04b18bd55377f6b84d5f2",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15667112/e67ae11d34e94f2e91a953d7d472db89",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15667129/0005be273ce2469ba66e1c7e9792a1c6",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15667150/90454c67564f4a5c83daf781abfc94b1",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15667197/a591df51e1e6462a80d681e7fffdb23d",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15283988/0c5cdb69ebc24cee8e10bedb87d161ce",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14904282/a8bd4218f13f48e0aa7cffb4a74061d8",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/14685947/1e2b97e8ada8454cb8a9faa4511d82d1",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15450624/d0754bcff7c84e8280b77241f355e24b",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15454696/654b73f868d64582bed3f1c10f21f3fe",
    "https://olx-lb-production.s3.eu-west-1.amazonaws.com/image/15557441/240e60a40bd945b29ee1ac7826e6d68c",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => <Box component="ul">{dots}</Box>,
    customPaging: (i) => <Box className="slick-dot-custom" />,
  };

  return (
    <Box>
      <Container maxWidth="auto">
        <Box>
          <Slider {...settings}>
            {images.map((img, i) => (
              <Box key={i}>
                <img
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-full rounded-lg"
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default CustomSlider;
