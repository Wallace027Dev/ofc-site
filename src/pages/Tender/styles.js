import styled from "styled-components";

export const Container = styled.main`
  form {
    margin-top: 2rem;
    display: flex;
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
