import Container from "./styles";

import location from "../../assets/images/map/location.png";

export default function Location() {
  return (
    <Container>
      <h1>Onde estamos</h1>
      <img src={location} alt="Location" />
    </Container>
  );
}
