import Container from "./styles";

import ofcLogo from "../../assets/images/ofc.png";

export default function About() {
  return (
    <Container>
      <div className="about">
        <h1>Sobre a Oficina de Bordados</h1>
        <p>
          Somos uma empresa líder em bordados industriais há 27 anos,
          comprometida em fornecer soluções de alta qualidade e precisão para a
          indústria têxtil. Com uma equipe experiente e equipamentos de última
          geração, estamos preparados para atender às demandas mais complexas e
          personalizadas de nossos clientes. Nossa paixão pelo bordado
          tradicional se combina com a inovação tecnológica para entregar
          resultados excepcionais em grande escala. Orgulhamo-nos da nossa
          dedicação à excelência, pontualidade e atendimento ao cliente,
          oferecendo um serviço confiável e de alto padrão. Seja qual for o seu
          projeto, estamos prontos para torná-lo realidade com a beleza e a
          perfeição do bordado industrial. Sejam bem-vindos a Oficina de
          bordados!
        </p>
      </div>
      <div className="logo-ofc">
        <img src={ofcLogo} alt="Logo from Oficina de Bordados" />
      </div>
    </Container>
  );
}
