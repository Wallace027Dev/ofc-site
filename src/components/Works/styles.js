import styled from "styled-components";

const Container = styled.div``;

export const CompanyWorks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;

  .work-images {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 24rem;
  height: 24rem;
  margin: 2rem;
  border-radius: 0.5rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
`;

export const ShowMoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.6rem;
  width: 100%;
  max-width: 20rem;
  background-color: var(--bt);
  color: var(--bg);
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export default Container;
