import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.development";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Info from "./components/Info";
import Testi from "./components/Testi";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./Scroll";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <ScrollToTop />
      <Scroll />
      <Header />
      <Section />
      <Info />
      <Testi />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
