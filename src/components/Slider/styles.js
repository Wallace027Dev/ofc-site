import styled from "styled-components";

// eslint-disable-next-line import/no-unresolved
import "@splidejs/react-splide/css";

const Container = styled.div`
  img {
    width: 100vw;
    height: 45rem;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 25rem;
    }
  }
`;

export default Container;
