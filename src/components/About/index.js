import Container from "./styles";

import ofcLogo from "../../assets/images/ofc.png";

export default function About() {
  return (
    <Container>
      <div className="about" id="about">
        <h1>Sobre a Oficina de Bordados</h1>
        <p>
          Somos líderes em bordados industriais há 27 anos, oferecendo soluções
          de alta qualidade para a indústria têxtil. Com equipe experiente e
          tecnologia de ponta, atendemos às demandas complexas dos clientes com
          excelência. Valorizamos a pontualidade e o atendimento, proporcionando
          um serviço confiável.
          <br />
          Bem-vindos à Oficina de Bordados!
        </p>
      </div>
      <div className="logo-ofc">
        <img src={ofcLogo} alt="Logo from Oficina de Bordados" />
      </div>
    </Container>
  );
}
