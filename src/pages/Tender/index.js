import { useState } from "react";
import { Container } from "./styles";

export default function Tender() {
  const [embroideryMachine, setEmbroideryMachine] = useState("");
  const [embroideryType, setEmbroideryType] = useState("");
  const [piecesQuantity, setPiecesQuantity] = useState(0);
  const [embroideryPoints, setEmbroideryPoints] = useState(0);
  const [embroideryColors, setEmbroideryColors] = useState(0);
  const [embroideryCuts, setEmbroideryCuts] = useState(0);
  const [pricePerPiece, setPricePerPiece] = useState("");
  const isFormValid =
    isValidValue(piecesQuantity) &&
    typeof piecesQuantity === "number" &&
    isValidValue(embroideryPoints) &&
    typeof embroideryPoints === "number" &&
    isValidValue(embroideryColors) &&
    typeof embroideryColors === "number" &&
    isValidValue(embroideryCuts) &&
    typeof embroideryCuts === "number";

  function isValidValue(value) {
    return (
      (typeof value === "number" ||
        (typeof value === "string" &&
          value.trim() !== "" &&
          !isNaN(Number(value.trim())))) &&
      value !== 0 &&
      value !== null &&
      value !== undefined
    );
  }

  function formatNumber(value) {
    const cleanedValue = value.replace(/\./g, "");
    const numberValue = parseInt(cleanedValue, 10);

    if (!isNaN(numberValue)) {
      return numberValue;
    } else {
      return value;
    }
  }

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
          case piecesQuantity >= 1 && piecesQuantity <= 11:
            newEmbroideryPoints = 1;
            break;
          case piecesQuantity >= 12 && piecesQuantity <= 23:
            newEmbroideryPoints = 0.75;
            break;
          case piecesQuantity >= 24 && piecesQuantity <= 36:
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
            newEmbroideryPoints = 1.2;
            break;
          case piecesQuantity >= 13 && piecesQuantity <= 24:
            newEmbroideryPoints = 1;
            break;
          case piecesQuantity >= 25 && piecesQuantity <= 36:
            newEmbroideryPoints = 0.9;
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

    console.log("\nantes", newEmbroideryPoints);

    switch (true) {
      case embroideryPoints >= 1 && embroideryPoints <= 9999:
        newEmbroideryPoints *= 1;
        break;
      case embroideryPoints <= 14999:
        newEmbroideryPoints *= 1;
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
        console.log("default", newEmbroideryPoints);
        newEmbroideryPoints *= 0.55;
    }

    console.log("\ndepois", newEmbroideryPoints);

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

    console.log(newTablePreparation, pricePerRound);

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

    console.log(
      "\n\npontos: ",
      pointsValue,
      "\nCores: ",
      colorValue,
      "\nCortes: ",
      cutValue,
      "Mudança mesa: ",
      tableExchangeValue,
      "\nTotal: ",
      calculatedTender
    );

    return setPricePerPiece(
      calculatedTender < 2 ? 2 : calculatedTender.toFixed(2)
    );
  }

  return (
    <Container>
      <form>
        <label htmlFor="Embroidery Machine">
          Máquina de Bordado
          <select
            name="Embroidery Machine"
            value={embroideryMachine}
            onChange={(e) => setEmbroideryMachine(e.target.value)}
          >
            <option value="" disabled>
              Onde vai bordar?
            </option>
            <option value="8-machine">Máquina de 8</option>
            <option value="12-machine">Máquina de 12</option>
            <option value="ballerina-machine">Bailarina</option>
          </select>
        </label>
        {embroideryMachine && (
          <label htmlFor="Embroidery Type">
            Tipo de Bordado
            <select
              name="Embroidery Type"
              value={embroideryType}
              onChange={handleEmbroideryTypeChange}
            >
              <option value="" disabled>
                Qual método?
              </option>
              <option value="complete-table">
                Mesa de entretela ou plástico
              </option>
              <option value="paper-with-cut">Papel com Corte</option>
              <option value="embroidery-frame">Bastidor</option>
            </select>
          </label>
        )}
        {embroideryType && (
          <label>
            Especificações do bordado
            <span>Número de Peças</span>
            <input
              type="number"
              value={piecesQuantity.toLocaleString("pt-BR")}
              onChange={(e) => setPiecesQuantity(formatNumber(e.target.value))}
            />
            <span>Número de Pontos</span>
            <input
              type="number"
              value={embroideryPoints.toLocaleString("pt-BR")}
              onChange={(e) =>
                setEmbroideryPoints(formatNumber(e.target.value))
              }
            />
            <span>Número de Cores</span>
            <input
              type="number"
              value={embroideryColors.toLocaleString("pt-BR")}
              onChange={(e) =>
                setEmbroideryColors(formatNumber(e.target.value))
              }
            />
            <span>Número de Cortes</span>
            <input
              type="number"
              value={embroideryCuts.toLocaleString("pt-BR")}
              onChange={(e) => setEmbroideryCuts(formatNumber(e.target.value))}
            />
          </label>
        )}
        <button
          disabled={!isFormValid}
          type="button"
          onClick={HandleCalculateTender}
        >
          Calcular
        </button>
      </form>
      {isFormValid && <h1>R${pricePerPiece}</h1>}
    </Container>
  );
}
