import { useState } from "react";
import { Container } from "./styles";

export default function Tender() {
  const [embroideryMachine, setEmbroideryMachine] = useState("");
  const [embroideryType, setEmbroideryType] = useState("");
  const [piecesQuantity, setPiecesQuantity] = useState(0);
  const [embroideryPoints, setEmbroideryPoints] = useState(0);
  const [embroideryColors, setEmbroideryColors] = useState(0);
  const [embroideryCuts, setEmbroideryCuts] = useState(0);

  function handleEmbroideryTypeChange(event) {
    const selectedValue = event.target.value;
    setEmbroideryType(selectedValue);
  }

  function HandleCalculateTerder() {
    let newTablePreparation;
    let newEmbroideryPoints;
    let piecesPerRound;

    if (embroideryMachine === "8-machine") {
      newEmbroideryPoints = 0.55;
      piecesPerRound = 8;
    } else if (embroideryMachine === "12-machine") {
      newEmbroideryPoints = 0.55;
      piecesPerRound = 12;
    } else if (embroideryMachine === "ballerina-machine") {
      newEmbroideryPoints = 0.9;
      piecesPerRound = 12;
    } else {
      return newEmbroideryPoints && piecesPerRound;
    }

    if (embroideryType === "complete-table") {
      newTablePreparation = 10;
    } else if (embroideryType === "paper-with-cut") {
      newTablePreparation = 45;
    } else if (embroideryType === "embroidery-frame") {
      newTablePreparation = 2;
    } else {
      return newTablePreparation;
    }

    const calculatedTender =
      newTablePreparation / piecesQuantity +
      (newEmbroideryPoints / 1000) * embroideryPoints +
      0.5 * (embroideryColors / piecesQuantity) +
      0.05 * (embroideryCuts / piecesPerRound);

    console.log("R$", calculatedTender.toFixed(2));
    return calculatedTender.toFixed(2);
  }

  return (
    <Container>
      <form>
        <select
          name="Embroidery Machine"
          value={embroideryMachine}
          onChange={(e) => setEmbroideryMachine(e.target.value)}
        >
          <option value="" disabled>
            Máquina de Bordado
          </option>
          <option value="8-machine">Máquina de 8</option>
          <option value="12-machine">Máquina de 12</option>
          <option value="ballerina-machine">Bailarina</option>
        </select>
        {embroideryMachine && (
          <select
            name="Embroidery Type"
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
        )}
        {embroideryType && (
          <>
            <input
              type="number"
              onChange={(e) => setPiecesQuantity(parseInt(e.target.value))}
              placeholder="Número de Peças"
            />
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
        {
          (embroideryType,
          embroideryMachine,
          embroideryPoints,
          embroideryColors,
          embroideryCuts ? (
            <button type="button" onClick={HandleCalculateTerder}>
              Calcular
            </button>
          ) : (
            ""
          ))
        }
      </form>
    </Container>
  );
}
