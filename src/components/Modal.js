import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./styles/Modal.css";

const Modal = ({ showModal }) => {
  return (
    <div className="modals">
      <div className="close-modal">
        <VscChromeClose className="cm" onClick={showModal} />
      </div>
      <div className="cart">
        Maciej Glogier był najwybitniejszym obywatelem Radomia w okresie
        międzywojennych; który wszystkie swoje talenty, zrealizował poprzez
        tytaniczną i wytrwałą pracę na rzecz naszego miasta i odbudowującej się
        po I wojnie światowej państwowości polskiej. Jego szczególne zasługi
        wiążą się bez wątpienia z budową systemu sądownictwa okręgu radomskiego
        w wolnej Polsce, pracą w Senacie RP w latach 1922 – 1927 oraz udziałem w
        tworzeniem szkolnictwa i kultury muzycznej Radomia.
      </div>
      {/* <div className="cart">
        <Link to="/">Strona</Link>
      </div>
      <div className="cart">
        <Link to="/">Strona</Link>
      </div>
      <div className="cart">
        <Link to="/">Strona</Link>
      </div> */}
    </div>
  );
};

export default Modal;
