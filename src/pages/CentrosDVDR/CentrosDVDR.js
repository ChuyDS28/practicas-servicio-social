import React, { useState } from "react";
import Footer from "..//Footer";
import Modal from "../../components/Modal.js";
import InformacionDelCentro from "./InformacionDelCentro";
import cajeme from "..//..//assets/images/CodigosQR/cajeme.png";
import campeche from "..//..//assets/images/CodigosQR/campeche.jpg";
import cancun from "..//..//assets/images/CodigosQR/cancun.jpg";
import chihuahua from "..//..//assets/images/CodigosQR/chihuahua.png";
import culiacan from "..//..//assets/images/CodigosQR/culiacan.png";
import durango from "..//..//assets/images/CodigosQR/durango.jpg";
import mazatlan from "..//..//assets/images/CodigosQR/mazatlan.jpg";
import mochis from "..//..//assets/images/CodigosQR/mochis.png";
import morelia from "..//..//assets/images/CodigosQR/morelia.png";
import oaxaca from "..//..//assets/images/CodigosQR/oaxaca.jpg";
import tampico from "..//..//assets/images/CodigosQR/tampico.png";
import tijuana from "..//..//assets/images/CodigosQR/tijuana.jpg";
import veracruz from "..//..//assets/images/CodigosQR/veracruz.jpg";
import Mapa from "./Mapa";

const data = {
  ucajeme: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Cajeme",
    link: "https://www.youtube.com/embed/TOKmS6e_2FY",
    imagenurl: cajeme,
  },
  ucampenche: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Campeche",
    link: "https://www.youtube.com/embed/qvJRXP-KpAc",
    imagenurl: campeche,
  },
  ucancun: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Cancún",
    link: "https://www.youtube.com/embed/zV0YjW3EN_0",
    imagenurl: cancun,
  },
  uchihuahua: {
    titulo:
      "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua",
    link: "https://www.youtube.com/embed/mGhpdhj-WqA",
    imagenurl: chihuahua,
  },
  uculiacan: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Culiacán",
    link: "https://www.youtube.com/embed/mpJkOS8T1sI",
    imagenurl: culiacan,
  },
  udurango: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Durango",
    link: "https://www.youtube.com/embed/WKDlUFXtuXM",
    imagenurl: durango,
  },
  umazatlan: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Mazatlán",
    link: "https://www.youtube.com/embed/GAta9sP7OMQ",
    imagenurl: mazatlan,
  },
  umochis: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Los Mochis",
    link: "https://www.youtube.com/embed/AWL2oAgY97w",
    imagenurl: mochis,
  },
  umorelia: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Morelia",
    link: "https://www.youtube.com/embed/4DMc_KxMlfQ",
    imagenurl: morelia,
  },
  uoaxaca: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Oaxaca",
    link: "https://www.youtube.com/embed/w5D4fCDkxeM",
    imagenurl: oaxaca,
  },
  utampico: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Tampico",
    link: "https://www.youtube.com/embed/GFCy-c7P9Oo",
    imagenurl: tampico,
  },
  utijuana: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Tijuana",
    link: "https://www.youtube.com/embed/Y5CK0CAcN5I",
    imagenurl: tijuana,
  },
  uveracruz: {
    titulo:
      "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz",
    link: "https://www.youtube.com/embed/lZYyoqtKtuw",
    imagenurl: veracruz,
  },
};

const CentrosDVDR = () => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState({
    titulo: "",
    link: "",
    imagenurl: "",
  });
  const [manejadorModal, setmanejadorModal] = useState(false);

  function abrirModal(titulo, youtube, codigo) {
    setEstadoSeleccionado({
      titulo: titulo,
      link: youtube,
      imagenurl: codigo,
    });
    setmanejadorModal(true);
  }
  return (
    <>
      <Modal
        open={manejadorModal}
        fnCloseModal={() => setmanejadorModal(false)}
      >
        <InformacionDelCentro data={estadoSeleccionado} />{" "}
      </Modal>{" "}
      <div>
        <header> </header>{" "}
        <main>
          <h1> {estadoSeleccionado.titulo} </h1>
        </main>
        <Mapa
          data={data}
          fnabrirmodal={abrirModal}
          imagen1={cajeme}
          imagen2={campeche}
          imagen3={cancun}
          imagen4={chihuahua}
          imagen5={culiacan}
          imagen6={durango}
          imagen7={mazatlan}
          imagen8={mochis}
          imagen9={morelia}
          imagen10={oaxaca}
          imagen11={tampico}
          imagen12={tijuana}
          imagen13={veracruz}
        />
        <Footer />
      </div>
      ;{" "}
    </>
  );
};

export default CentrosDVDR;
