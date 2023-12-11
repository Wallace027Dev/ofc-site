import { useState } from "react";
import Container, { Form } from "./styles";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [piecesQuantity, setPiecesQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("from_name", name);
    formData.append("phone", telNumber);
    formData.append("from_email", email);
    formData.append("location", location);
    formData.append("pieces_quantity", piecesQuantity);
    formData.append("message", message);

    emailjs
      .sendForm(
        "service_kqkdsvv",
        "template_atmh9ut",
        document.querySelector("form"),
        "wKg0O3WLJGXQxw2sp"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setName("");
          setTelNumber("");
          setEmail("");
          setPiecesQuantity("");
          setLocation("");
          setMessage("");
        },
        (error) => {
          console.log("ERROR:", error);
        }
      );
  }

  return (
    <Container>
      <h1>Faça um orçamento conosco</h1>
      <Form enctype="multipart/form-data" method="post" onSubmit={sendEmail}>
        <label htmlFor="fname">Nome *</label>
        <input
          name="fname"
          id="fname"
          type="text"
          value={name}
          placeholder="Fulano da Silva"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="tel-number">Número de telefone *</label>
        <input
          name="tel-number"
          id="telnumber"
          type="tel"
          value={telNumber}
          placeholder="27 99999-9999"
          onChange={(e) => setTelNumber(e.target.value)}
        />

        <label htmlFor="fmail">Email *</label>
        <input
          name="fmail"
          id="fmail"
          type="email"
          value={email}
          placeholder="fulano@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="pieces-quantity">Número de peças *</label>
        <input
          name="pieces-quatity"
          id="pieces-quatity"
          type="number"
          value={piecesQuantity}
          placeholder="24"
          onChange={(e) => setPiecesQuantity(e.target.value)}
        />

        <label htmlFor="location">Posição da peça *</label>
        <select
          name="location"
          id="location"
          onChange={(e) =>
            setLocation(e.target.options[e.target.selectedIndex].text)
          }
          value={location || ""}
          defaultValue="Peito Padrão"
        >
          <option value="Peito Esquerdo">Peito Esquerdo</option>
          <option value=">Peito Direito">Peito Direito</option>
          <option value="Peito Centralizado">Peito Centralizado</option>
          <option value="Costa">Costa Centralizada / Pala</option>
          <option value="Perna de Bermuda">Perna de Bermuda</option>
          <option value="Outras opções">Outras opções</option>
        </select>

        <label htmlFor="fmessage">Descreva mais sobre seu bordado</label>
        <textarea
          name="fmessage"
          id="fmessage"
          cols="30"
          rows="5"
          placeholder="Tamanhos aproximado, cores desejadas, posição desejada, etc."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">ENVIAR</button>
      </Form>
    </Container>
  );
}
