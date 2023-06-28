import Container from "./styles";

import ofc from "../../assets/images/ofc.png";
import arrow from "../../assets/images/icons/arrow.svg";

export default function Footer() {
  return (
    <Container>
      <div>
        <img src={ofc} alt="Staart logo" />
        <h4>Dê identidade a sua marca!</h4>
      </div>
      <div>
        <h3>© 1996 Oficina de Bordados, Inc.</h3>
      </div>
      <div>
        <a href="#header">
          <img src={arrow} alt="botão seta para cima" />
        </a>
      </div>
    </Container>
  );
}
