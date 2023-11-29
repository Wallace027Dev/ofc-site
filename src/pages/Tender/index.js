import { useState } from "react";
import { Container } from "./styles";

export default function Tender() {
  const [embroideryMachine, setEmbroideryMachine] = useState("");
  const [embroideryType, setEmbroideryType] = useState("");
  const [piecesQuantity, setPiecesQuantity] = useState(0);
  const [embroideryPoints, setEmbroideryPoints] = useState(0);
  const [embroideryColors, setEmbroideryColors] = useState(0);
  const [embroideryCuts, setEmbroideryCuts] = useState(0);
  const [pricePerPiece, setPricePerPiece] = useState("Calcule!");

  function handleEmbroideryTypeChange(event) {
    const selectedValue = event.target.value;
    setEmbroideryType(selectedValue);
  }

  function HandleCalculateTender(
    newTablePreparation,
    newEmbroideryPoints,
    piecesPerRound,
    pricePerRound,
    roundQuantity
  ) {
    switch (embroideryMachine) {
      case "8-machine":
        switch (true) {
          case piecesQuantity >= 1 && piecesQuantity <= 12:
            newEmbroideryPoints = 1;
            break;
          case piecesQuantity >= 13 && piecesQuantity <= 24:
            newEmbroideryPoints = 0.75;
            break;
          case piecesQuantity >= 25 && piecesQuantity <= 36:
            newEmbroideryPoints = 0.65;
            break;
          case piecesQuantity >= 36 && piecesQuantity <= 120:
            newEmbroideryPoints = 0.55;
            break;
          default:
            newEmbroideryPoints = 0.4;
        }
        piecesPerRound = 8;
        break;

      case "12-machine":
        switch (true) {
          case piecesQuantity >= 1 && piecesQuantity <= 12:
            newEmbroideryPoints = 1;
            break;
          case piecesQuantity >= 13 && piecesQuantity <= 24:
            newEmbroideryPoints = 0.75;
            break;
          case piecesQuantity >= 25 && piecesQuantity <= 36:
            newEmbroideryPoints = 0.65;
            break;
          case piecesQuantity >= 36 && piecesQuantity <= 120:
            newEmbroideryPoints = 0.55;
            break;
          default:
            newEmbroideryPoints = 0.4;
        }
        piecesPerRound = 12;
        break;

      case "ballerina-machine":
        switch (true) {
          case piecesQuantity >= 1 && piecesQuantity <= 12:
            newEmbroideryPoints = 1.5;
            break;
          case piecesQuantity >= 13 && piecesQuantity <= 24:
            newEmbroideryPoints = 1.2;
            break;
          case piecesQuantity >= 25 && piecesQuantity <= 36:
            newEmbroideryPoints = 1;
            break;
          case piecesQuantity >= 36 && piecesQuantity <= 120:
            newEmbroideryPoints = 0.8;
            break;
          default:
            newEmbroideryPoints = 0.7;
        }
        piecesPerRound = 12;
        break;

      default:
        console.log("ERROR");
    }

    switch (embroideryPoints) {
      case embroideryPoints >= 1 && embroideryPoints <= 99999:
        newEmbroideryPoints *= 1;
        break;
      case embroideryPoints <= 14999:
        newEmbroideryPoints *= 0.95;
        break;
      case embroideryPoints <= 29999:
        newEmbroideryPoints *= 0.9;
        break;
      case embroideryPoints <= 49999:
        newEmbroideryPoints *= 0.85;
        break;
      case embroideryPoints <= 79999:
        newEmbroideryPoints *= 0.8;
        break;
      case embroideryPoints <= 99999:
        newEmbroideryPoints *= 0.75;
        console.log("Olá mundo", newEmbroideryPoints);
        break;
      case embroideryPoints <= 124999:
        newEmbroideryPoints *= 0.7;
        break;
      case embroideryPoints <= 149999:
        newEmbroideryPoints *= 0.65;
        break;
      case embroideryPoints <= 199999:
        newEmbroideryPoints *= 0.6;
        break;
      default:
        newEmbroideryPoints *= 0.55;
    }

    switch (embroideryType) {
      case "complete-table":
        newTablePreparation = 10;
        pricePerRound = 7;
        break;

      case "paper-with-cut":
        newTablePreparation = 45;
        pricePerRound = 10;
        break;

      case "embroidery-frame":
        newTablePreparation = 2;
        pricePerRound = 2;
        break;

      default:
        console.log("ERROR");
    }

    roundQuantity = piecesQuantity / piecesPerRound;

    const pointsValue = (newEmbroideryPoints / 1000) * embroideryPoints;
    const colorValue = (0.5 * embroideryColors) / piecesQuantity;
    const cutValue = (0.15 * embroideryCuts) / Math.ceil(roundQuantity);
    const tableExchangeValue =
      (pricePerRound * Math.ceil(roundQuantity)) / piecesQuantity;

    const calculatedTender =
      newTablePreparation / piecesQuantity +
      pointsValue +
      colorValue +
      tableExchangeValue +
      cutValue;

    console.log("\nTotal Real: R$", calculatedTender.toFixed(2));
    console.log(
      "Total Mínimo: R$",
      calculatedTender < 2 ? 2 : calculatedTender.toFixed(2)
    );

    console.log("\nNúmero de Rodadas:", Math.ceil(roundQuantity), "\n");

    console.log("Valor Inicial:", newTablePreparation);
    console.log("Valor de Ponto:", pointsValue);
    console.log("Cor Valor:", colorValue);
    console.log("Corte valor:", cutValue);
    console.log("Trocas valor:", pricePerRound);

    return setPricePerPiece(calculatedTender.toFixed(2));
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
            <button type="button" onClick={HandleCalculateTender}>
              Calcular
            </button>
          ) : (
            ""
          ))
        }
      </form>
      <h1>{pricePerPiece}</h1>
    </Container>
  );
}
