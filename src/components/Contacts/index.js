import Container from "./styles";

import instagram from "../../assets/images/icons/instagram.svg";

export default function Contacts() {
  return (
    <Container>
      <h1>Entre em contato conosco!</h1>
      <div className="contact">
        <h2>Instagram</h2>
        <a href="https://instagram.com">
          <img src={instagram} alt="Instagram Icon" />
          <h3>@OfcBordados</h3>
        </a>
      </div>
    </Container>
  );
}
