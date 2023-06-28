import Container from "./styles";

import instagram from "../../assets/images/icons/instagram.svg";

export default function Contacts() {
  return (
    <Container>
      <h1>Entre em contato conosco!</h1>
      <div className="contact">
        <h2>Instagram</h2>
        <img src={instagram} alt="Instagram Icon" />
        <a className="btn-instagram" href="https://instagram.com">
          @OfcBordados
        </a>
      </div>
    </Container>
  );
}
