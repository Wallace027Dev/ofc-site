import Slider from "../components/Slider";
import Nav from "../components/Nav";
import About from "../components/About";
import Main, { Header } from "./styles";
import Experience from "../components/Experience";
import Works from "../components/Works";

export default function App() {
  return (
    <>
      <Header>
        <Nav />
        <Slider />
      </Header>

      <Main>
        <About />
        <Experience />
        <Works />
      </Main>
    </>
  );
}
