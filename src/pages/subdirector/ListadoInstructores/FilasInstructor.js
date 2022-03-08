import React, { useState, useEffect } from "react";
import Modal from "../../../components/Modal.js";
import ModalActualizarInstructor from "./ModalActualizarInstructor";
import { obtenerDocumentosInstructor } from "../../../api/services/instructores.js";

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
  const [CVInstructor, setCVInstructor] = useState();
  const [DocsInstructor, setDocsInstructor] = useState();

  useEffect(() => {
    getDocuments();
  }, []);

  async function getDocuments() {
    try {
      const documents = await obtenerDocumentosInstructor(props.id);
      // setDocsInstructor(documents);
      console.log(documents);
      console.log(URL.createObjectURL(documents.data));
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <>
      <Modal
        open={modalActualizarInstructores}
        fnCloseModal={() => setModalActualizarInstructores(false)}
      >
        <ModalActualizarInstructor
          nombre={props.nombre}
          rfc={props.rfc}
          area={props.area}
        />
      </Modal>
      <tr>
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
          <button className="waves-effect waves-light btn  blue-grey darken-3">
            CV
          </button>
          {/* <input type="button" className="waves-effect waves-light btn  blue-grey darken-3"
          onClick={URL.createObjectURL(DocsInstructor.newCV)}>
            CV
            </input>  */}
        </td>
        <td>
          <button className="waves-effect waves-light btn  blue-grey darken-3">
            Documentación
          </button>
          {/* <input type="button" className="waves-effect waves-light btn  blue-grey darken-3"
          onClick={URL.createObjectURL(DocsInstructor.newDocs)}>
            Documentacion
            </input>  */}
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
