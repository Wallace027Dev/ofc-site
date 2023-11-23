import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Tender() {
  const [embroideryType, setEmbroideryType] = useState("");
  const [tablePreparation, setTablePreparation] = useState(0);
  const [embroideryPoints, setEmbroideryPoints] = useState(0);
  const [embroideryColors, setEmbroideryColors] = useState(0);
  const [embroideryCuts, setEmbroideryCuts] = useState(0);

  useEffect(() => {
    if (embroideryType === "complete-table") {
      setTablePreparation(10);
    } else if (embroideryType === "paper-with-cut") {
      setTablePreparation(45);
    } else if (embroideryType === "embroidery-frame") {
      setTablePreparation(2);
    } else {
      return;
    }
  }, [embroideryType]);

  function handleEmbroideryTypeChange(event) {
    const selectedValue = event.target.value;
    setEmbroideryType(selectedValue);
  }

  function HandleCalculateTerder() {
    const calculatedTender =
      tablePreparation +
      (0.55 / 1000) * embroideryPoints +
      0.5 * embroideryColors +
      0.05 * embroideryCuts;

    console.log(
      tablePreparation,
      embroideryPoints,
      embroideryColors,
      embroideryCuts
    );

    console.log(calculatedTender);
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
        {embroideryType && (
          <>
            <input
              type="number"
              onChange={(e) => setEmbroideryPoints(parseInt(e.target.value))}
              placeholder="Número de Pontos"
            />
            <input
              type="number"
              onChange={(e) => setEmbroideryColors(parseInt(e.target.value))}
              placeholder="Número de Cores"
            />
            <input
              type="number"
              onChange={(e) => setEmbroideryCuts(parseInt(e.target.value))}
              placeholder="Número de Cortes"
            />
          </>
        )}
        {embroideryType !== "" && (
          <button type="button" onClick={HandleCalculateTerder}>
            Calcular
          </button>
        )}
      </form>
    </Container>
  );
}
