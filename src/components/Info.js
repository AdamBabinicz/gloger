import React, { useState } from "react";
import "./styles/Info.css";
import { Link } from "react-router-dom";
import img from "./assets/7.png";
import Modal from "./Portal/Modal";

const Info = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className="info-section" id="życiorys">
      <div className="info-about">
        <h3>
          <span>Prawnik, społecznik, samorządowiec</span>
        </h3>
        <p>
          Maciej Glogier h. Pracowoc (ur. 24 lutego 1869 w&nbsp;Radomiu, zm. 20
          sierpnia 1940 tamże) – polski prawnik, społecznik
          i&nbsp;samorządowiec. W&nbsp;latach 1922-1927 senator RP. Syn Kiliana
          Ferdynanda Antoniego Glogiera i&nbsp;Zofii Stokowskiej h. Drzewica. 15
          czerwca 1896 r. poślubił Martynę Marię Wereszczyńską h. Korczak.
          Ukończył prawo na Uniwersytecie Warszawskim.
          <br />
          <br /> W&nbsp;latach 1914-1917 wiceprezydent Radomia. Szef VIII
          Wydziału Statystycznego Komisji Szkolnej Ziemi Radomskiej pod
          kierunkiem Maksymiliana Skotnickiego (1915). Od 1917 prezes sądu
          w&nbsp;Radomiu. Pierwszy kierownik szkoły muzycznej w&nbsp;Radomiu.
          Członek wielu stowarzyszeń i&nbsp;organizacji. Maciej Glogier był
          współzałożycielem i&nbsp;skarbnikiem radomskiego koła Polskiej
          Macierzy Szkolnej, długoletnim prezesem Towarzystwa Dobroczynności
          w&nbsp;Radomiu, wiceprezesem oddziału PCK, wiceprezesem Towarzystwa
          Opieki nad Umysłowo Chorymi i&nbsp;wiceprezesem Komitetów
          Obywatelskich.
          <br />
          <br /> Współorganizował pierwszą w Radomiu szkołę średnią
          z&nbsp;polskim językiem wykładowym, a&nbsp;później był prezesem dla
          prowadzenia i&nbsp;utrzymania średniej szkoły żeńskiej w&nbsp;Radomiu
          - opiekunem Gimnazjum im. Marii Konopnickiej. Prezesował także
          Towarzystwu Śpiewaczemu "Lutnia" i&nbsp;radomskiej filii Warszawskiego
          Towarzystwa Muzycznego imienia Fryderyka Chopina. W&nbsp;1925 roku
          Towarzystwo zapoczątkowało w&nbsp;Radomiu powstanie szkoły muzycznej,
          jako filii Wyższej Szkoły Muzycznej imienia Fryderyka Chopina
          w&nbsp;Warszawie, której kierownictwo powierzono właśnie Maciejowi
          Glogierowi.
          <br />
          <br /> W&nbsp;1928 r. odznaczony Orderem Grzegorza Wielkiego przez
          papieża Piusa XI. Został pochowany na cmentarzu przy ul. Limanowskiego
          w&nbsp;Radomiu.
        </p>
        <div className="info-btn">
          <div className="btn" onClick={() => Toggle()}>
            Czytaj
          </div>
        </div>
        <Modal show={modal} close={Toggle} title="Ulica">
          <p>
            - Ulica Macieja Glogiera - Rajec Poduchowny prostopadła do ul.
            Podleśnej, równoległa do ul. Edmunda Bakalarza.
          </p>
          <p>
            - Wielką pasją Macieja Glogiera od dzieciństwa była muzyka. Sam grał
            na skrzypcach i wiolonczeli i miłość do muzyki starał się zaszczepić
            innym.
          </p>
          <p>
            - Wcześnie osierocony, zarabiał udzielając jeszcze w gimnazjum
            korepetycji i lekcji muzyki, a w czasie studiów – redagując skrypty
            uniwersyteckie.
          </p>
          <br />
          <p>
            <em>pl.wikipedia.org/wiki/Złoto</em>
          </p>
        </Modal>
      </div>
      <div className="info-content">
        <h2>Kim był?</h2>
        <p>prawnik, notariusz w Radomiu</p>
        <p>w latach 1914–1917 wiceprezydent Radomia</p>
        <p>
          w latach 1917–1920 organizator polskiego sądownictwa na ziemi
          radomskiej
        </p>
        <p>prezes Sądu Okręgowego w Radomiu</p>
        <p>od 1920 szef sekcji służbowej w Ministerstwie Sprawiedliwości</p>
        <p>w latach 1922-1927 senator RP</p>
        <img src={img} alt="..." />
      </div>
    </div>
  );
};

export default Info;
