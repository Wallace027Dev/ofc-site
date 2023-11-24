import styled from "styled-components";

export const Container = styled.main`
  h1 {
    text-align: center;
    font-size: 3rem;
  }

  form {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    flex-direction: column;

    select,
    input,
    button {
      font-size: 2.4rem;
      width: 30rem;
      height: 4rem;
      padding-left: 1rem;
      border-radius: 0.5rem;
    }
    select,
    input {
      border: 0.2rem solid var(--tertiary);
      color: var(--tertiary);
    }

    select:not(:first-child),
    input,
    button {
      margin-top: 1rem;
    }

    button {
      background-color: var(--bt);
      color: var(--bg);
      border: none;
    }
  }
`;
