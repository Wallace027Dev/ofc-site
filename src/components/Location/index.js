import Container from "./styles";

import location from "../../assets/images/map/location.png";

export default function Location() {
  return (
    <Container>
      <h1>Onde estamos</h1>
      <a href="https://goo.gl/maps/jLWHNUaVrdSWDj6V7" target="blank">
        <img src={location} alt="Location" />
      </a>
    </Container>
  );
}
