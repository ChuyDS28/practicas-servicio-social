import React, { useState } from "react";
import Footer from "..//Footer";
import cvdrcajeme from "..//..//assets/images/CodigosQR/cvdrcajeme.png";
import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";
import cvdrcampeche from "..//..//assets/images/CodigosQR/cvdrcampeche.jpg";
import cvdrcancun from "..//..//assets/images/CodigosQR/cvdrcancun.jpg";

const CentrosDVDR = () => {
  const [centro, setCentro] = useState("Centro");
  const [link, setLink] = useState("Link");
  const [imagenurl, setimagenUrl] = useState("URL");
  const [manejadorModal, setmanejadorModal] = useState(false);
 
  function cambiodeTexto(texto) {
    setCentro(texto);
    setmanejadorModal(true);
  }

  function cambiodeVinculo(vinculo) {
    setLink(vinculo);
    setmanejadorModal(true);
  }

  function cambiodeURL(vinculo) {
    setimagenUrl(vinculo);
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
        url={imagenurl} />
      </Modal>
      <div>
        <header> </header>{" "}
        <main>
          <h1> {centro} </h1>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Cajeme"
              ),
              cambiodeVinculo("https://www.youtube.com/watch?v=TOKmS6e_2FY"),
              cambiodeURL(cvdrcajeme)
            )}
          >
            Cajeme{" "}
          </button>
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Campeche"
              ),
              cambiodeVinculo("https://www.youtube.com/watch?v=qvJRXP-KpAc"),
              cambiodeURL(cvdrcampeche)
            )}
          >
            Campeche{" "}
          </button>
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Cancún"
              ),
              cambiodeVinculo("https://www.youtube.com/watch?v=zV0YjW3EN_0"),
              cambiodeURL(cvdrcancun)
            )}
          >
            Cancún
          </button>
        </main>
        <Footer />
      </div>
      ;{" "}
    </>
  );
};

export default CentrosDVDR;
