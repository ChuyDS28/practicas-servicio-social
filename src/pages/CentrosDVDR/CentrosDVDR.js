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
import Mapa from "./Mapa"




const data = [
  {
    titulo: "centro1",
    link: "https://www.youtube.com/embed/TOKmS6e_2FY",
    imagenurl: cajeme,
  },
  {
    titulo: "centro2",
    link: "https://www.youtube.com/embed/TOKmS6e_2FY",
    imagenurl: campeche,
  },
  {
    titulo: "centro3",
    link: "https://www.youtube.com/embed/TOKmS6e_2FY",
    imagenurl: cancun,
  },
];

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

  function abrirModal(titulo, youtube, codigo) {
    setCentro(titulo);
    setLink(youtube);
    setimagenUrl(codigo);
    setmanejadorModal(true);
  }
  return (
    <>


      <Modal
        open={manejadorModal}
        fnCloseModal={() => setmanejadorModal(false)}
      >
        <InformacionDelCentro unidad={centro} vinculo={link} url={imagenurl} />{" "}
      </Modal>{" "}
      <div>
        <header> </header>{" "}
        <main>
          <h1> {centro} </h1>{" "}
          {data.map((centro) => (
            <button
              class="waves-effect waves-light btn modal-trigger"
              onClick={() =>
                abrirModal(centro.titulo, centro.link, centro.imagenurl)
              }
            >
              {centro.titulo}{" "}
            </button>
          ))}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() =>
              abrirModal(
                "Centro de Vinculación y Desarrollo Regional Unidad Cajeme",
                "https://www.youtube.com/embed/TOKmS6e_2FY",
                cajeme
              )
            }
          >
            prueba{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Cajeme"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/TOKmS6e_2FY"),
              cambiodeURL(cajeme)
            )}
          >
            Cajeme{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Campeche"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/qvJRXP-KpAc"),
              cambiodeURL(campeche)
            )}
          >
            Campeche{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Cancún"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/zV0YjW3EN_0"),
              cambiodeURL(cancun)
            )}
          >
            Cancún{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Chihuahua"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/mGhpdhj-WqA"),
              cambiodeURL(chihuahua)
            )}
          >
            Chihuahua{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Culiacán"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/mpJkOS8T1sI"),
              cambiodeURL(culiacan)
            )}
          >
            Culiacán{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Durango"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/WKDlUFXtuXM"),
              cambiodeURL(durango)
            )}
          >
            Durango{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Mazatlán"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/GAta9sP7OMQ"),
              cambiodeURL(mazatlan)
            )}
          >
            Mazatlán{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Los Mochis"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/AWL2oAgY97w"),
              cambiodeURL(mochis)
            )}
          >
            Mochis{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Morelia"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/4DMc_KxMlfQ"),
              cambiodeURL(morelia)
            )}
          >
            Morelia{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Oaxaca"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/w5D4fCDkxeM"),
              cambiodeURL(oaxaca)
            )}
          >
            Oaxaca{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Tampico"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/GFCy-c7P9Oo"),
              cambiodeURL(tampico)
            )}
          >
            Tampico{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Vinculación y Desarrollo Regional Unidad Tijuana"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/Y5CK0CAcN5I"),
              cambiodeURL(tijuana)
            )}
          >
            Tijuana{" "}
          </button>{" "}
          <button
            class="waves-effect waves-light btn modal-trigger"
            onClick={() => (
              cambiodeTexto(
                "Centro de Innovación e Integración de Tecnologías Avanzadas Unidad Veracruz"
              ),
              cambiodeVinculo("https://www.youtube.com/embed/lZYyoqtKtuw"),
              cambiodeURL(veracruz)
            )}
          >
            Veracruz{" "}
          </button>{" "}
        </main>{" "}



        <Mapa
        fnabrirmodal={abrirModal}

        
        
        />



        <Footer />
      </div>
      ;{" "}
    </>
  );
};

export default CentrosDVDR;