import Main, { Header } from "./styles";

import Nav from "../../components/Nav";
import Slider from "../../components/Slider";
import Experience from "../../components/Experience";
import About from "../../components/About";
import Works from "../../components/Works";
import Contact from "../../components/Contact";
import Location from "../../components/Location";
import Footer from "../../components/Footer";

export default function App() {
  return (
    <>
      <header>
        <Nav />
        <Slider />
      </header>

      <Main>
        <About />
        <Works />
        <Experience />
        <Contact />
        <Location />
      </Main>

      <Footer />
    </>
  );
}
