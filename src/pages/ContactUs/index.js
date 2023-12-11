import { useState } from "react";
import Container, { Form } from "./styles";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [email, setEmail] = useState("");
  const [piecesQuantity, setPiecesQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [photoFile, setPhotoFile] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (!(name, telNumber, email, piecesQuantity, location, photoFile)) {
      alert("preencha os campos obrigatórios");
      return;
    }
  }

  return (
    <Container>
      <h1>Faça um orçamento conosco</h1>
      <Form onSubmit={sendEmail}>
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
        <select name="location" id="location">
          <option value="" disabled selected></option>
          <option value="peito-padrao">Peito Esquerdo</option>
          <option value="peito-direito">Peito Direito</option>
          <option value="peito-centralizado">Peito Centralizado</option>
          <option value="costa-ou-pala">Costa Centralizada / Pala</option>
          <option value="perna-bermuda">Perna de Bermuda</option>
          <option value="outro">Outras opções</option>
        </select>

        <label htmlFor="photo-file">Sua logomarca *</label>
        <input type="file" name="photo-file" id="photo-file" />

        <label htmlFor="fmessage">Descreva mais sobre seu bordado</label>
        <textarea
          name="fmessage"
          id="fmessage"
          cols="30"
          rows="5"
          placeholder="Tamanhos aproximado, cores desejadas, posição desejada, etc."
        />

        <button>ENVIAR</button>
      </Form>
    </Container>
  );
}
