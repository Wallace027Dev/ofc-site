import { useState } from "react";
import { Container } from "./styles";

export default function Tender() {
  const [embroideryType, setEmbroideryType] = useState("");
  const [embroideryFrameWidth, setEmbroideryFrameWidth] = useState("");

  function handleEmbroideryTypeChange(event) {
    const selectedValue = event.target.value;
    setEmbroideryType(selectedValue);
  }

  function handleEmbroideryFrameChange(event) {
    const selectedValue = event.target.value;
    setEmbroideryFrameWidth(selectedValue);
  }

  return (
    <Container>
      <form>
        <select
          name="Tipo de Bordado"
          value={embroideryType}
          onChange={handleEmbroideryTypeChange}
        >
          <option value="" disabled>
            Tipo de Bordado
          </option>
          <option value="complete-table">Mesa Completa</option>
          <option value="paper-with-cut">Papel com Corte</option>
          <option value="embroidery-frame">Bastidor</option>
        </select>
        {embroideryType === "embroidery-frame" && (
          <select
            name="Tamanho do Bastidor"
            value={embroideryFrameWidth}
            onChange={handleEmbroideryFrameChange}
            defaultValue=""
          >
            <option value="12">12cm (padrão)</option>
            <option value="15">15cm</option>
            <option value="18">18cm</option>
            <option value="45">45cm (Retangular)</option>
          </select>
        )}
        {embroideryType && (
          <>
            <input type="number" placeholder="Número de Pontos" />
            <input type="number" placeholder="Número de Cores" />
            <input type="number" placeholder="Número de Cortes" />
          </>
        )}
        {embroideryType !== "" && <button>Calcular</button>}
      </form>
    </Container>
  );
}
