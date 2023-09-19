import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import Container from "./styles";

import bordado1 from "../../assets/images/slider/bordado1.jpeg";
import bordado2 from "../../assets/images/slider/bordado2.jpeg";
import bordado3 from "../../assets/images/slider/bordado3.jpeg";
import bordado4 from "../../assets/images/slider/bordado4.jpeg";

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
          <img src={bordado1} alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={bordado2} alt="Slide 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={bordado3} alt="Slide 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={bordado4} alt="Slide 4" />
        </SplideSlide>
      </Splide>
    </Container>
  );
}
