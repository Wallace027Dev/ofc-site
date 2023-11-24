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

  function HandleCalculateTerder(
    newTablePreparation,
    newEmbroideryPoints,
    piecesPerRound,
    roundQuantity
  ) {
    if (embroideryMachine === "8-machine") {
      if (piecesQuantity >= 1 && piecesQuantity <= 12) {
        newEmbroideryPoints = 1;
      } else if (piecesQuantity >= 13 && piecesQuantity <= 24) {
        newEmbroideryPoints = 0.75;
      } else if (piecesQuantity >= 25 && piecesQuantity <= 36) {
        newEmbroideryPoints = 0.65;
      } else if (piecesQuantity >= 36 && piecesQuantity <= 120) {
        newEmbroideryPoints = 0.55;
      } else {
        newEmbroideryPoints = 0.4;
      }

      piecesPerRound = 8;
    } else if (embroideryMachine === "12-machine") {
      if (piecesQuantity >= 1 && piecesQuantity <= 12) {
        newEmbroideryPoints = 1;
      } else if (piecesQuantity >= 13 && piecesQuantity <= 24) {
        newEmbroideryPoints = 0.75;
      } else if (piecesQuantity >= 25 && piecesQuantity <= 36) {
        newEmbroideryPoints = 0.65;
      } else if (piecesQuantity >= 36 && piecesQuantity <= 120) {
        newEmbroideryPoints = 0.55;
      } else {
        newEmbroideryPoints = 0.4;
      }

      piecesPerRound = 12;
    } else if (embroideryMachine === "ballerina-machine") {
      if (piecesQuantity >= 1 && piecesQuantity <= 12) {
        newEmbroideryPoints = 1.5;
      } else if (piecesQuantity >= 13 && piecesQuantity <= 24) {
        newEmbroideryPoints = 1.25;
      } else if (piecesQuantity >= 25 && piecesQuantity <= 36) {
        newEmbroideryPoints = 1;
      } else if (piecesQuantity >= 36 && piecesQuantity <= 120) {
        newEmbroideryPoints = 0.8;
      } else {
        newEmbroideryPoints = 0.7;
      }

      piecesPerRound = 12;
    } else {
      return console.log("ERROR");
    }

    if (embroideryType === "complete-table") {
      newTablePreparation = 10;
    } else if (embroideryType === "paper-with-cut") {
      newTablePreparation = 45;
    } else if (embroideryType === "embroidery-frame") {
      newTablePreparation = 2;
    } else {
      return console.log("ERROR");
    }

    roundQuantity = piecesQuantity / piecesPerRound;

    const pointsValue = (newEmbroideryPoints / 1000) * embroideryPoints;
    const colorValue = (0.5 * embroideryColors) / piecesQuantity;
    const cutValue = (0.15 * embroideryCuts) / Math.ceil(roundQuantity);
    const tableExchangeValue = (7 * Math.ceil(roundQuantity)) / piecesQuantity;

    const calculatedTender =
      newTablePreparation / piecesQuantity +
      pointsValue +
      colorValue +
      tableExchangeValue +
      cutValue;

    console.log(
      "\nTotal: R$",
      calculatedTender < 2 ? 2 : calculatedTender.toFixed(2),

      "\n\nValor Inicial:",
      newTablePreparation,
      "\nRodadas:",
      Math.ceil(roundQuantity),
      "\nValor de Ponto:",
      pointsValue,
      "\nCor Valor:",
      colorValue,
      "\nCorte valor:",
      cutValue,
      "\nTrocas valor:",
      tableExchangeValue
    );

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
