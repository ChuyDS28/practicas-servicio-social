import React, { useState, useEffect, useRef } from "react";
import Footer from "..//Footer";
import M from "materialize-css/dist/js/materialize.min.js";

const CentrosDVDR = () => {
  const tabs = useRef(null);
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(tabs.current, {});
  }, []);

  const [centro, setCentro] = useState("Centro");

  function cambiodeTexto(texto) {
    setCentro(texto);
    var elems = document.querySelector(".modal");
    var instance = M.Modal.getInstance(tabs.current);
    instance.open();
    
  }

  const ModalHelp = () => {
    return (
      <div id="modal11" className="modal" ref={tabs}>
        <div class="modal-content  ">
          <h5></h5>
          <br />
          <div className="  ">
            <br /> <br />
          </div>
          <div className=" ">
            <br /> <br />
          </div>
          <div className="">
            <br /> <br />
          </div>
          <div className="">
            <br /> <br />
          </div>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <ModalHelp />
      <div>
        <header></header>
        <main>
          <h1>{centro}</h1>
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro1")}
          >
            
            CENTRO1
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro2")}
          >
            
            CENTRO2
          </button>

          <a class="waves-effect waves-light btn modal-trigger" href="#modal11">
            Modal
          </a>
        </main>
        <Footer />
      </div>
      ;
    </>
  );
};

export default CentrosDVDR;
