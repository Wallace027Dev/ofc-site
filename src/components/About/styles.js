import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;

  .about {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    max-width: 40%;

    h1 {
      margin-bottom: 2.4rem;
    }
  }

  .logo-ofc {
    img {
      height: 24rem;
    }
  }
`;

export default Container;
