import styled from "styled-components";

const Container = styled.footer`
  margin-top: 3rem;
  background: var(--secondary);
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: var(--primary);

  div {
    width: 40%;
    text-align: center;
  }

  img {
    height: 3rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  a {
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`;

export default Container;
