import React, { useState } from "react";
import "./styles/Section.css";
import img from "./assets/5.png";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Section = () => {
  const [modalActive, setModalActive] = useState(false);
  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="section">
      <div>
        <h1 className="main-header">
          Maciej <span>Glogier (Gloger)</span>
        </h1>
        <p className="main-status">1869–1940</p>
        <div className="main-btn">
          <Link onClick={showModal} to="/">
            Więcej
          </Link>
        </div>
        {modalActive && <Modal showModal={showModal} />}
      </div>
      <img src={img} alt="..." />
    </div>
  );
};

export default Section;
