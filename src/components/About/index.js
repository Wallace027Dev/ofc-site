import SocialMedias, { Container } from "./styles";

import ofcLogo from "../../assets/images/icons/ofcbordados.svg";
import whatsapp from "../../assets/images/icons/whatsapp-mono.svg";
import instagram from "../../assets/images/icons/instagram-mono.svg";
import locationPin from "../../assets/images/icons/locationPin.svg";

export default function About() {
  const phoneNumber = "27997062775";

  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <SocialMedias>
        <a
          className="btn"
          href="https://www.instagram.com/ofc.bordados/"
          target="blank"
        >
          <img src={instagram} alt="Instagram Icon" />
        </a>
        <button
          className="btn remove-effect-button"
          type="button"
          onClick={handleWhatsAppRedirect}
        >
          <img src={whatsapp} alt="Whatsapp Icon" />
        </button>
        <a
          className="btn"
          href="https://goo.gl/maps/jLWHNUaVrdSWDj6V7"
          target="blank"
        >
          <img src={locationPin} alt="Location Pin" />
        </a>
      </SocialMedias>
      <Container>
        <div className="about" id="about">
          <h1>Sobre a Oficina de Bordados</h1>
          <p>
            Somos líderes em bordados industriais desde 1996, oferecendo
            soluções de alta qualidade para a indústria têxtil. Com equipe
            experiente e tecnologia de ponta, atendemos às demandas complexas
            dos clientes com excelência. Valorizamos a pontualidade e o
            atendimento, proporcionando um serviço confiável.
            <br />
            Bem-vindos à Oficina de Bordados!
          </p>
        </div>
        <div className="logo-ofc">
          <img src={ofcLogo} alt="Logo from Oficina de Bordados" />
        </div>
      </Container>
    </>
  );
}
