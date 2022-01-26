import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const openMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="header">
      <div className="logo">
        <span>Zasłużeni Radomianie</span>
      </div>
      <nav>
        <ul className={navActive ? "list-items active" : "list-items"}>
          <div className="close-icon">
            <VscChromeClose className="close" onClick={openMenu} />
          </div>
          <li>
            <a href="/" onClick={openMenu}>
              Start
            </a>
          </li>
          <li>
            <a href="#życiorys" onClick={openMenu}>
              Życiorys
            </a>
          </li>
          <li>
            <a href="#upamiętnienie" onClick={openMenu}>
              Upamiętnienie
            </a>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger-icon">
        <HiOutlineMenuAlt3 className="icon" onClick={openMenu} />
      </div>
    </div>
  );
};

export default Header;
