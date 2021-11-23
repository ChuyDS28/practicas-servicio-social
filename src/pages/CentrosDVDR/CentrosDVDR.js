import React, { useState } from "react";
import Footer from "..//Footer";

import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";

const CentrosDVDR = () => {
  const [centro, setCentro] = useState("Centro");
  const [manejadorModal, setmanejadorModal] = useState(false);

  function cambiodeTexto(texto) {
    setCentro(texto);
    setmanejadorModal(true);
  }

  return (
    <>
      <Modal
        open={manejadorModal}
        fnCloseModal={() => setmanejadorModal(false)}
      >
        <InformacionDelCentro unidad={centro} />
      </Modal>
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

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => cambiodeTexto("Centro3")}
          >
            CENTRO3
          </button>
        </main>
        <Footer />
      </div>
      ;
    </>
  );
};

export default CentrosDVDR;
