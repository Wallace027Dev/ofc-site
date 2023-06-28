import styled from "styled-components";

const Container = styled.div`
  &,
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contact {
    a {
      text-decoration: none;
      color: var(--primary);
      font-weight: bold;
    }
  }
`;

export default Container;
