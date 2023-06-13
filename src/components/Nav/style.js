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

    ul {
      display: flex;
      justify-content: center;
      list-style: none;

      .nav-item {
        margin: 0 1.5rem;

        .nav-link {
          color: var(--primary);
          text-decoration: none;
          font-size: 1.6rem;
          font-weight: bold;
          :hover {
            color: var(--bg);
            transition: 0.4s;
          }
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
    }

    .nav-item {
      display: none;
    }

    .mobile-menu-icon {
      display: block !important;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
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
      width: 5rem;
      height: 5rem;
    }
  }
`;

export default Container;
