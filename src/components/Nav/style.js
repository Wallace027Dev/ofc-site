import styled from "styled-components";

const Container = styled.header`
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary);
    box-shadow: 0px 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 1.5rem 6rem;

    img {
      height: 5rem;
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    margin-right: 1.5;

    ul {
      display: flex;
      justify-content: center;
      list-style: none;

      img {
        margin-right: 1rem;
      }

      .nav-item {
        margin: 0 1.5rem;
        display: flex;
        align-items: center;

        @media (min-width: 769px) {
          :hover {
            background-color: var(--primary);
            border: 0.75rem solid var(--primary);
            border-radius: 4rem;
            transition: 0.4s;
            color: var(--bg);
            margin: 0 2rem;

            .nav-link {
              color: var(--bg);
              transition: 0.4s;
            }
          }
        }

        img {
          height: 2rem;
        }

        .nav-link {
          color: var(--primary);
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: bold;
        }
      }
    }
  }

  .mobile-menu-icon {
    display: none;
  }

  .mobile-menu {
    display: none;
  }

  @media screen and (max-width: 730px) {
    .nav-bar {
      padding: 1.5rem 4rem;

      .nav-list {
        display: none;
      }
    }

    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block !important;
    }

    .mobile-menu {
      background: var(--secondary);
      ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 1rem;

        .nav-item {
          display: block !important;
          padding-top: 1.2rem;
        }
      }
    }

    .open {
      display: block !important;
    }

    .icon {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export default Container;
