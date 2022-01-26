import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.development";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Info from "./components/Info";
import Testi from "./components/Testi";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./Scroll";

function App() {
  return (
    <>
      <ScrollToTop />
      <Scroll />
      <Header />
      <Section />
      <Info />
      <Testi />
    </>
  );
}

export default App;
