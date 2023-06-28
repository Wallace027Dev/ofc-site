import styled from "styled-components";

const Container = styled.div`
  &,
  .contact {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .contact {
    a {
      text-decoration: none;
      color: var(--primary);
    }
  }
`;

export default Container;
