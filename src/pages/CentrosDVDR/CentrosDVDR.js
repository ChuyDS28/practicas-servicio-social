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
import picCampeche from "..//..//assets/images/ImagenesCentro/picCampeche.png";
import picChihuhua from "..//..//assets/images/ImagenesCentro/picChihuhua.png";
import picVeracruz from "..//..//assets/images/ImagenesCentro/picVeracruz.png";
import picCajeme from "..//..//assets/images/ImagenesCentro/picCajeme.png";
import picmochis from "..//..//assets/images/ImagenesCentro/picmochis.png";
import picmorelia from "..//..//assets/images/ImagenesCentro/picmorelia.png";
import picoaxaca from "..//..//assets/images/ImagenesCentro/picoaxaca.png";
import pictampico from "..//..//assets/images/ImagenesCentro/pictampico.png";
import pictijuana from "..//..//assets/images/ImagenesCentro/pictijuana.png";
import piccancun from "..//..//assets/images/ImagenesCentro/piccancun.png";
import picculiacan from "..//..//assets/images/ImagenesCentro/picculiacan.png";
import picdurango from "..//..//assets/images/ImagenesCentro/picdurango.png";
import picmazatlan from "..//..//assets/images/ImagenesCentro/picmazatlan.png";

const data = {
  ucajeme: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Cajeme",
    link: "https://www.youtube.com/embed/TOKmS6e_2FY",
    imagenurl: cajeme,
    imgcentro: picCajeme,
  },
  ucampenche: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Campeche",
    link: "https://www.youtube.com/embed/qvJRXP-KpAc",
    imagenurl: campeche,
    imgcentro: picCampeche,
  },
  ucancun: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Cancún",
    link: "https://www.youtube.com/embed/zV0YjW3EN_0",
    imagenurl: cancun,
    imgcentro: piccancun,
  },
  uchihuahua: {
    titulo:
      "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua",
    link: "https://www.youtube.com/embed/mGhpdhj-WqA",
    imagenurl: chihuahua,
    imgcentro: picChihuhua,
  },
  uculiacan: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Culiacán",
    link: "https://www.youtube.com/embed/mpJkOS8T1sI",
    imagenurl: culiacan,
    imgcentro: picculiacan,
  },
  udurango: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Durango",
    link: "https://www.youtube.com/embed/WKDlUFXtuXM",
    imagenurl: durango,
    imgcentro: picdurango,
  },
  umazatlan: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Mazatlán",
    link: "https://www.youtube.com/embed/GAta9sP7OMQ",
    imagenurl: mazatlan,
    imgcentro: picmazatlan,
  },
  umochis: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Los Mochis",
    link: "https://www.youtube.com/embed/AWL2oAgY97w",
    imagenurl: mochis,
    imgcentro: picmochis,
  },
  umorelia: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Morelia",
    link: "https://www.youtube.com/embed/4DMc_KxMlfQ",
    imagenurl: morelia,
    imgcentro: picmorelia,
  },
  uoaxaca: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Oaxaca",
    link: "https://www.youtube.com/embed/w5D4fCDkxeM",
    imagenurl: oaxaca,
    imgcentro: picoaxaca,
  },
  utampico: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Tampico",
    link: "https://www.youtube.com/embed/GFCy-c7P9Oo",
    imagenurl: tampico,
    imgcentro: pictampico,
  },
  utijuana: {
    titulo: "Centro de Vinculación y Desarrollo Regional Unidad Tijuana",
    link: "https://www.youtube.com/embed/Y5CK0CAcN5I",
    imagenurl: tijuana,
    imgcentro: pictijuana,
  },
  uveracruz: {
    titulo:
      "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz",
    link: "https://www.youtube.com/embed/lZYyoqtKtuw",
    imagenurl: veracruz,
    imgcentro: picVeracruz,
  },
};

const CentrosDVDR = () => {
  const [estadoSeleccionado, setEstadoSeleccionado] = useState({
    titulo: "",
    link: "",
    imagenurl: "",
    imgcentro: "",
  });
  const [manejadorModal, setmanejadorModal] = useState(false);

  function abrirModal(titulo, youtube, codigo, centro) {
    setEstadoSeleccionado({
      titulo: titulo,
      link: youtube,
      imagenurl: codigo,
      imgcentro: centro,
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
      </Modal>
      <div className="container">
        <h3
          className="header   blue-grey-text text-darken-3"
          style={{ fontSize: "3.1rem", fontWeight: "500" }}
        >
           Centros de Vinculación y Desarrollo Regional
        </h3>
        <Mapa data={data} fnabrirmodal={abrirModal} />
      </div>
    </>
  );
};

export default CentrosDVDR;
