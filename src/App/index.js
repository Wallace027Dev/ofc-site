import Slider from "../components/Slider";
import Nav from "../components/Nav";
import About from "../components/About";
import Main, { Header } from "./styles";
import Works from "../components/Works";
import Contacts from "../components/Contacts";
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <Header>
        <Nav />
        <Slider />
      </Header>

      <Main>
        <About />
        <Works />
        <Contacts />
        <Location />
      </Main>

      <Footer />
    </>
  );
}
