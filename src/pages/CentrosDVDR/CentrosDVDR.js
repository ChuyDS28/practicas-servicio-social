import React, { useState } from "react";
import Footer from "..//Footer";

import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";

const CentrosDVDR = () => {
  const [centro, setCentro] = useState("Centro");
  const [link, setLink] = useState("Link")
  const [manejadorModal, setmanejadorModal] = useState(false);


  function cambiodeTexto(texto) {
    setCentro(texto);
    setmanejadorModal(true);
  }

  function cambiodeVinculo(texto) {
    setLink(texto);
    setmanejadorModal(true);
  }



  return (
    <>
      <Modal
        open={manejadorModal}
        fnCloseModal={() => setmanejadorModal(false)}
      >
        <InformacionDelCentro 
        unidad={centro} 
        vinculo={link}
        
        
        />
      </Modal>
      <div>
        <header></header>
        <main>
          <h1>{centro}</h1>
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Cajeme"), cambiodeVinculo("https://www.youtube.com/watch?v=TOKmS6e_2FY"))}
          >
            Cajeme
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Campeche"), cambiodeVinculo("https://www.youtube.com/watch?v=qvJRXP-KpAc"))}
          >
            Campeche
          </button>

          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (cambiodeTexto("Centro de Vinculación y Desarrollo Regional Unidad Cancún"), cambiodeVinculo("https://www.youtube.com/watch?v=zV0YjW3EN_0"))}
          >
            Cancún
          </button>
        </main>
        <Footer />
      </div>
      ;
    </>
  );
};

export default CentrosDVDR;