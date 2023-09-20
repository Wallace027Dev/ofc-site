import Container from "./style";

import menu from "../../assets/images/icons/menuMobile.svg";
import xCirclePrimary from "../../assets/images/icons/xCirclePrimary.svg";
import home from "../../assets/images/icons/home.svg";
import apps from "../../assets/images/icons/apps.svg";
import phoneCall from "../../assets/images/icons/phoneCall.svg";
import ofc from "../../assets/images/icons/ofcB.svg";

import scrollToSection from "../utils/scrollToSection";

export default function Nav() {
  const menuShow = () => {
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
  };

  return (
    <Container>
      <nav id="header" className="nav-bar">
        <div className="logo">
          <img src={ofc} alt="Oficina de bordados" />
        </div>

        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <img src={home} alt="home" />
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="nav-link remove-effect-button"
              >
                QUEM SOMOS
              </button>
            </li>
            <li className="nav-item">
              <img src={apps} alt="apps" />
              <button
                type="button"
                onClick={() => scrollToSection("works")}
                className="nav-link remove-effect-button"
              >
                CATÁLOGO
              </button>
            </li>
            <li className="nav-item">
              <img src={phoneCall} alt="phoneCall" />
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="nav-link remove-effect-button"
              >
                CONTATO
              </button>
            </li>
          </ul>
        </div>

        <div />

        <div className="mobile-menu-icon">
          <button
            className="remove-effect-button"
            type="button"
            onClick={menuShow}
          >
            <img className="icon" src={menu} alt="Mobile menu icon" />
          </button>
        </div>
      </nav>

      <div className="mobile-menu nav-list">
        <ul>
          <li className="nav-item">
            <img src={home} alt="home" />

            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="nav-link remove-effect-button"
            >
              QUEM SOMOS
            </button>
          </li>
          <li className="nav-item">
            <img src={apps} alt="apps" />
            <button
              type="button"
              onClick={() => scrollToSection("works")}
              className="nav-link remove-effect-button"
            >
              CATÁLOGO
            </button>
          </li>
          <li className="nav-item">
            <img src={phoneCall} alt="phoneCall" />
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="nav-link remove-effect-button"
            >
              CONTATO
            </button>
          </li>
        </ul>

        <div />
      </div>
    </Container>
  );
}
