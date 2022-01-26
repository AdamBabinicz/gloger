import React from "react";
import { Link } from "react-router-dom";
import "./styles/Contact.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Kontakt</h2>
      <Link to="/">
        <FaArrowAltCircleLeft className="arrow" />
      </Link>
      <p>
        <a href="mailto:puaro@vp.pl">puaro@vp.pl</a>
      </p>
      <div className="footer">
        <span>2022 - {new Date().getFullYear()}. Radom</span>
        <ul>
          <li>
            <a
              href="https://pl-pl.facebook.com/pages/category/Community/GLOGIER-MACIEJ-SENATOR-II-RP-208892955826606"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=mRCNRh87k-g&t=16s"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
