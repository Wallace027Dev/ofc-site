import { useState } from "react";

import Container, { CompanyWorks, Image, ShowMoreButton } from "./styles";

import bloomWithLove from "../../assets/images/catalog/bloomWithLove-min.jpeg";
import bocaTotal from "../../assets/images/catalog/bocaTotal-min.jpeg";
import buphallosBlusa from "../../assets/images/catalog/buphallosBlusa-min.jpeg";
import coracaoVibraAlto from "../../assets/images/catalog/coracaoVibraAlto-min.jpeg";
import dinamica from "../../assets/images/catalog/dinamica-min.jpeg";
import feNaVida from "../../assets/images/catalog/feNaVida-min.jpeg";
import floralVerde from "../../assets/images/catalog/floralVerde-min.jpeg";
import lembRelevo from "../../assets/images/catalog/lembRelevo-min.jpeg";
import ursoHeitor from "../../assets/images/catalog/ursoHeitor-min.jpeg";
import variasToalhas from "../../assets/images/catalog/variasToalhas-min.jpeg";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    bloomWithLove,
    feNaVida,
    bocaTotal,
    buphallosBlusa,
    coracaoVibraAlto,
    floralVerde,
    dinamica,
    lembRelevo,
    ursoHeitor,
    variasToalhas,
  ]);

  function handleClick() {
    setShowAll(true);
  }

  return (
    <Container id="works">
      <h1>Nossos trabalhos</h1>
      <CompanyWorks>
        <div className="work-images">
          {images.slice(0, showAll ? images.length : 3).map((image, index) => (
            <Image key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
        {!showAll && (
          // eslint-disable-next-line react/jsx-no-bind
          <ShowMoreButton onClick={handleClick}>
            <h3>Mostrar mais</h3>
          </ShowMoreButton>
        )}
      </CompanyWorks>
    </Container>
  );
}
