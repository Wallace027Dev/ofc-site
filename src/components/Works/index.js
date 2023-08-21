import { useState } from "react";

import Container, { CompanyWorks, Image, ShowMoreButton } from "./styles";

import brasaoEs from "../../assets/images/catalog/brasao-es/photo.jpeg";
import diamante from "../../assets/images/catalog/diamante/photo.jpeg";
import konykCourino from "../../assets/images/catalog/konyk-courino/photo.jpeg";
import merengue from "../../assets/images/catalog/merengue/photo.jpeg";
import patchNome from "../../assets/images/catalog/patch-nome/photo.jpeg";
import prefLinhares from "../../assets/images/catalog/pref-linhares/photo.jpeg";
import prefVitoria from "../../assets/images/catalog/pref-vitoria/photo.jpeg";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    brasaoEs,
    diamante,
    konykCourino,
    merengue,
    patchNome,
    prefLinhares,
    prefVitoria,
  ]);

  function handleClick() {
    setShowAll(true);
  }

  return (
    <Container>
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
