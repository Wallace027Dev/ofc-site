import Container from "./style";

import menu from "../../assets/images/icons/menuMobile.svg";
import xCirclePrimary from "../../assets/images/icons/xCirclePrimary.svg";
import ofc from "../../assets/images/ofc.png";

export default function Nav() {
  function menuShow() {
    const menuMobile = document.querySelector(".mobile-menu");
    const icon = document.querySelector(".icon");

    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
      if (icon) {
        icon.src = menu;
      }
    } else {
      menuMobile.classList.add("open");
      if (icon) {
        icon.src = xCirclePrimary;
      }
    }
  }

  return (
    <Container>
      <nav id="header" className="nav-bar">
        <div className="logo">
          <img src={ofc} alt="Oficina de bordados" />
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                QUEM SOMOS
              </a>
            </li>
            <li className="nav-item">
              <a href="#works" className="nav-link">
                CATÁLOGO
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-link">
                CONTATO
              </a>
            </li>
          </ul>
        </div>

        <div />

        <div className="mobile-menu-icon">
          <button type="button" onClick={menuShow}>
            <img className="icon" src={menu} alt="Mobile menu icon" />
          </button>
        </div>
      </nav>

      <div className="mobile-menu nav-list">
        <ul>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              QUEM SOMOS
            </a>
          </li>
          <li className="nav-item">
            <a href="#works" className="nav-link">
              CATÁLOGO
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="nav-link">
              CONTATO
            </a>
          </li>
        </ul>

        <div />
      </div>
    </Container>
  );
}
