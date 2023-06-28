import { useState } from "react";

import Container, { CompanyWorks, Image, ShowMoreButton } from "./styles";

import imageNotFound from "../../assets/images/ofc.png";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    imageNotFound,
    imageNotFound,
    imageNotFound,
    imageNotFound,
    imageNotFound,
    imageNotFound,
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
          <ShowMoreButton onClick={handleClick}>Mostrar mais</ShowMoreButton>
        )}
      </CompanyWorks>
    </Container>
  );
}
