import styled from "styled-components";

const Container = styled.div`
  &,
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    a,
    button {
      margin: 0 3rem;
    }
  }

  a,
  button,
  p {
    text-decoration: none;
    color: var(--primary);
    font-weight: bold;
    font-size: 1.6rem;
  }

  button {
    border: none;
    cursor: pointer;
  }

  img {
    height: 5rem;
  }
`;

export default Container;
