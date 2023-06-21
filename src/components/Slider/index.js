import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import Container from "./styles";

import images1 from "../../assets/images/images1.jpg";
import images2 from "../../assets/images/images2.jpg";
import images3 from "../../assets/images/images3.jpg";

export default function Slider() {
  return (
    <Container>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 2500,
        }}
      >
        <SplideSlide>
          <img src={images1} alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={images2} alt="Slide 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={images3} alt="Slide 3" />
        </SplideSlide>
      </Splide>
    </Container>
  );
}
