import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal.js";
import M from "materialize-css/dist/js/materialize.min";
import ModalActualizarInstructor from "./ModalActualizarInstructor";
import { obtenerDocumentosInstructor } from "../../../api/services/instructores.js";
import { DescargarDocumentos } from "../../../api/services/documentos.js";

const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon7: {
    height: "91%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon2: {
    position: "absolute",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
  },
  imag: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  imag2: {
    position: "absolute",
    right: "60px",
    top: "0%",
    height: "80%",
    width: "85px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "60%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  tit: {
    left: "0px",
    position: "absolute",
  },
};

const FilasInstructor = (props) => {
  const [modalActualizarInstructores, setModalActualizarInstructores] =
    useState(false);
  const [probatorio, setProbatorio] = useState();
  const [CV, setCV] = useState();
  const [docsURL, setDocsURL] = useState();
  const [cvURL, setCVURL] = useState();
  const [downloadingCV, setDownloadingCV] = useState(false);
  const [downloadingDP, setDownloadingDP] = useState(false);

  useEffect(() => {
    getDocuments();
  }, []);

  async function getDocuments() {
    try {
      const documents = await obtenerDocumentosInstructor(props.id);
      console.log(documents);
      setCV(documents.data[0].documento.id);
      // console.log(documents.data[0].documento.id);
      setProbatorio(documents.data[1].documento.id);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  async function descargarDocumentos(id) {
    setDownloadingDP(true);
    try {
      const respuesta = await DescargarDocumentos(id);
      console.log(respuesta);
      setDocsURL(URL.createObjectURL(respuesta.data));
      console.log(URL.createObjectURL(respuesta.data));
      window.open(URL.createObjectURL(respuesta.data));
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      setDownloadingDP(false);
    }
  }

  async function descargarCV(id) {
    setDownloadingCV(true);
    try {
      const respuesta = await DescargarDocumentos(id);
      console.log(respuesta);
      setCVURL(URL.createObjectURL(respuesta.data));
      console.log(URL.createObjectURL(respuesta.data));
      window.open(URL.createObjectURL(respuesta.data), "_blank");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      setDownloadingCV(false);
    }
  }

  return (
    <>
      <Modal
        open={modalActualizarInstructores}
        fnCloseModal={() => setModalActualizarInstructores(false)}
      >
        <ModalActualizarInstructor
          ModalActualizar={setModalActualizarInstructores}
          getDocuments={getDocuments}
          getInstructores={props.getInstructores}
          id={props.id}
          nombre={props.nombre}
          rfc={props.rfc}
          area={props.area}
        />
      </Modal>
      <tr className="white" key={props.id}>
        <td>
          <i className="material-icons  teal-text text-darken-3  left circle  teal lighten-4">
            local_library
          </i>
          <b>{props.nombre}</b>
        </td>
        <td>
          <b>{props.rfc}</b>
        </td>
        <td>
          <b>{props.area}</b>
        </td>
        <td>
          <b>{props.unidad}</b>
        </td>
        <td>
          <div>
            {downloadingCV ? (
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="waves-effect waves-light btn  blue-grey darken-3"
                onClick={() => {
                  descargarCV(CV);
                }}
              >
                CV
              </button>
            )}
          </div>
        </td>
        <td>
          <div>
            {downloadingDP ? (
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="waves-effect waves-light btn  blue-grey darken-3"
                onClick={() => {
                  descargarDocumentos(probatorio);
                }}
              >
                Documentación
              </button>
            )}
          </div>
        </td>

        <td>
          <button
            className="modal-trigger waves-effect waves-teal  btn-flat"
            onClick={() => setModalActualizarInstructores(true)}
          >
            <i className="material-icons yellow-text text-darken-4">edit</i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default FilasInstructor;
