import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ModalEditarInstructor from "./ModalEditarInstructor";
import Modal from "../../components/Modal.js";
import { obtenerDocumentosInstructor } from "../../api/services/instructores";
import { eliminarInstructor } from "../../api/services/instructores";
import ModalEliminarIstructor from "./ModalEliminarInstructor";
import { DescargarDocumentos } from "../../api/services/documentos";
const style = {
  blockquote: {
    borderColor: "#ffffff" /* Just change the color value and that's it*/,
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },
  subtitleContainer: {
    width: "fit-content",
    border: "2px solid #fff",
    margin: "auto",
    padding: "0 1rem",
  },
};

const FilasInstructoresAdmin = (props) => {
  const [modalEditar, setModalEditar] = useState(false);
  const [docsInstructor, setDocsInstructor] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [cvURL, setCVURL] = useState();
  const [docsURL, setDocsURL] = useState();
  const [idProbatorio, setIdProbatorio] = useState();
  const [idCV, setIdCV] = useState();
  const [downloadingCV, setDownloadingCV] = useState(false);
  const [downloadingDP, setDownloadingDP] = useState(false);

  useEffect(() => {
    getDocuments();
  }, []);

  async function getDocuments() {
    try {
      const documents = await obtenerDocumentosInstructor(props.id);
      console.log(documents);
      setIdCV(documents.data[0].documento.id);
      setIdProbatorio(documents.data[1].documento.id);
      console.log(URL.createObjectURL(documents.data));
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  async function deleteInstructor() {
    try {
      const ins = await eliminarInstructor(props.id);
      M.toast({
        html: "Instructor removido",
        classes: "green",
      });
      props.getInstructores();
    } catch (error) {
      console.log(error);
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
      <Modal open={modalEditar} fnCloseModal={() => setModalEditar(false)}>
        <ModalEditarInstructor
          ModalActualizar={setModalEditar}
          getDocuments={getDocuments}
          getInstructores={props.getInstructores}
          id={props.id}
          nombre={props.nombre}
          rfc={props.rfc}
          area={props.area}
          CV={docsInstructor}
        />
      </Modal>
      <Modal open={modalEliminar} fnCloseModal={() => setModalEliminar(false)}>
        <ModalEliminarIstructor
          delete={deleteInstructor}
          modalEliminar={setModalEliminar}
          getInstructores={props.getInstructores}
          nombre={props.nombre}
          id={props.id}
        />
      </Modal>

      <tr className="white" key={props.id}>
        <td>
          <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
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
                  descargarCV(idCV);
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
                  descargarDocumentos(idProbatorio);
                }}
              >
                <b>Documentación</b>
              </button>
            )}
          </div>
        </td>
        {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
        <td>
          <button
            class="modal-trigger waves-effect waves-teal  btn-flat"
            onClick={() => setModalEditar(true)}
          >
            <i class="material-icons yellow-text text-darken-4 left ">edit</i>
          </button>
        </td>
        <td>
          <button
            class="waves-effect waves-light  btn-flat red-text"
            onClick={() => setModalEliminar(true)}
          >
            <i class="material-icons left ">delete</i>
          </button>
        </td>
      </tr>
    </>
  );
};
export default FilasInstructoresAdmin;
