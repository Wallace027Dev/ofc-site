import Container from "./styles";

import ofc from "../../assets/images/icons/ofcbordados.svg";
import arrow from "../../assets/images/icons/arrow.svg";

import scrollToSection from "../utils/scrollToSection";

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={ofc} alt="Oficina de bordados" />
        <h4>Dê identidade a sua marca!</h4>
      </div>
      <div>
        <h3>© 1996 Oficina de Bordados, Ind. e Com.</h3>
      </div>
      <div>
        <button
          type="button"
          onClick={() => scrollToSection("header")}
          className="remove-effect-button"
        >
          <img src={arrow} alt="botão seta para cima" />
        </button>
      </div>
    </Container>
  );
}
