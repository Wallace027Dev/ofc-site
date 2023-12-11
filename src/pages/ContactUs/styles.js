import styled from "styled-components";

const Container = styled.main`
  &,
  form {
    display: flex;
    flex-direction: column;
  }
  align-items: center;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 1.2rem auto;
    text-align: center;
  }
`;

export const Form = styled.form`
  max-width: 32rem;

  label {
    font-size: 1.6rem;
    font-weight: 600;
  }

  input,
  select,
  textarea,
  option {
    padding: 0.25rem;
    border: 1px solid var(--tertiary);
    border-radius: 0.25rem;
    font-size: 1.2rem;
  }

  label:not(:first-of-type),
  button {
    margin-top: 0.6rem;
  }

  input,
  select,
  button {
    height: 3rem;
  }

  button {
    background-color: var(--bt);
    color: var(--bg);
    border: none;
    letter-spacing: 0.25rem;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 0.25rem;
    cursor: pointer;

    :hover {
      background-color: var(--primary);
      border-radius: 4rem;
      transition: 0.4s;
      color: var(--bt);
      border: 1px solid var(--bt);
      letter-spacing: 0.75rem;
    }
  }
`;

export default Container;
