import Container, { Form } from "./styles";

export default function ContactUs() {
  return (
    <Container>
      <h1>Faça um orçamento conosco</h1>
      <Form>
        <label htmlFor="fname">Nome</label>
        <input type="text" name="fname" id="fname" />
        <label htmlFor="number">Número de telefone</label>
        <input type="tel" name="number" id="number" />
        <label htmlFor="fmail">Email</label>
        <input type="email" name="fmail" id="fmail" />
        <label htmlFor="pieces-quantity">Número de peças</label>
        <input type="number" name="pieces-quatity" id="pieces-quatity" />
        <label htmlFor="location">Posição da peça</label>
        <select name="location" id="location">
          <option value="" disabled selected></option>
          <option value="peito-padrao">Peito Esquerdo</option>
          <option value="peito-direito">Peito Direito</option>
          <option value="peito-centralizado">Peito Centralizado</option>
          <option value="costa-ou-pala">Costa Centralizada / Pala</option>
          <option value="perna-bermuda">Perna de Bermuda</option>
          <option value="outro">Outras opções</option>
        </select>
        <label htmlFor="photo-file">Sua logomarca</label>
        <input type="file" name="photo-file" id="photo-file" />
        <label htmlFor="fmessage">Descreva mais sobre seu bordado</label>
        <textarea
          name="fmessage"
          id="fmessage"
          cols="30"
          rows="5"
          placeholder="Tamanhos aproximado, cores desejadas, posição desejada, etc."
        />
        <button type="submit">ENVIAR</button>
      </Form>
    </Container>
  );
}
