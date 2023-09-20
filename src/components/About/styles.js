import styled from "styled-components";

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 5rem;
    margin: 0 2rem;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .about {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    max-width: 50%;

    p {
      font-size: 2.1rem;
      color: var(--secondary);
    }
  }

  .logo-ofc {
    img {
      height: 24rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .about {
      max-width: 100%;

      p {
        font-size: 1.6rem;
      }
    }

    .logo-ofc {
      img {
        height: 18rem;
      }
    }
  }
`;

export default SocialMedias;
