import styled from "styled-components";

export const Container = styled.main`
  h1 {
    text-align: center;
    font-size: 4.5rem;
  }

  form {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      font-weight: 700;
      color: var(--bt);
    }

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

    label:not(:first-child),
    button {
      margin-top: 0.75rem;
    }

    button {
      background-color: var(--bt);
      color: var(--bg);
      border: none;
    }

    button:disabled {
      background-color: var(--primary);
    }
  }
`;
