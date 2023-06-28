import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .about {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    max-width: 50%;
  }

  .logo-ofc {
    img {
      height: 24rem;
    }
  }
`;

export default Container;
