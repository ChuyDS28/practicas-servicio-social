import React, { useState, useEffect } from "react";
import Footer from "..//Footer";
import M from "materialize-css/dist/js/materialize.min.js";

const CentrosDVDR = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const [centro, setCentro] = useState("Centro");

  function cambiodeTexto(texto) {
    setCentro(texto);
  }

  const ModalHelp = () => {
    return (
      <div id="modal11" className="modal">
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
            {" "}
            CENTRO1{" "}
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro2")}
          >
            {" "}
            CENTRO2
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            href="modal11"
          >
            {" "}
            Modal
          </button>
        </main>
        <Footer />
      </div>
      ;
    </>
  );
};

export default CentrosDVDR;
