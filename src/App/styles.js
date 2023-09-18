import styled from "styled-components";

export const Header = styled.header``;

const Main = styled.main`
  padding: 0 10%;

  div + div,
  & {
    margin-top: 6rem;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.6rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3,
  a {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5%;
    text-align: center;

    div + div,
    & {
      margin-top: 3rem;
    }
  }
`;

export default Main;
