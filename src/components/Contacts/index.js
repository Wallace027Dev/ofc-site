import Container from "./styles";

import instagram from "../../assets/images/icons/instagram.svg";
import whatsapp from "../../assets/images/icons/whatsapp.svg";

export default function Contacts() {
  const phoneNumber = "27997062775";

  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Container id="contacts">
      <h1>Entre em contato conosco!</h1>
      <div>
        <a
          className="btn"
          href="https://www.instagram.com/ofc.bordados/"
          target="blank"
        >
          <h2>Instagram</h2>
          <img src={instagram} alt="Instagram Icon" />
          @OfcBordados
        </a>
        <button className="btn" type="button" onClick={handleWhatsAppRedirect}>
          <h2>Whatsapp</h2>
          <img src={whatsapp} alt="Whatsapp Icon" />
          <p>Converse comigo!</p>
        </button>
      </div>
    </Container>
  );
}
