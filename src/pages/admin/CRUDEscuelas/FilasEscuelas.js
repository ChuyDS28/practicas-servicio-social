import React, { useState, useEffect } from "react";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import ModalDetalles from "./ModalDetalles";
import Modal from "../../../components/Modal";
import EditarEscuela from "./EditarEscuela";
import EliminarUnidades from "./EliminarUnidades";

const style = {
  blockquote: {
    borderColor: "#ffffff" /* Just change the color value and that's it*/,
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "110%",
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

const FilasEscuelas = (props) => {
  const [unidades, setUnidades] = useState([]);
  const [modalDetalles, setModalDetalles] = useState(false);
  const [editarEscuelas, setEditarEscuelas] = useState(false);
  const [eliminarUnidades, setEliminarUnidades] = useState(false);

  // useEffect(() => {
  //   getEscuelas();
  // }, []);

  // async function getEscuelas() {
  //   try {
  //     let escuelas = await obtenerUnidades(0);
  //     setUnidades(escuelas.data);
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.response);
  //   }
  // }

  return (
    <>
      <Modal open={modalDetalles} fnCloseModal={() => setModalDetalles(false)}>
        <div className="modal-content">
          <ModalDetalles
            modalDetalles={setModalDetalles}
            nombre={props.nombre}
            clave={props.clave}
          />
        </div>
      </Modal>

      <Modal
        open={editarEscuelas}
        fnCloseModal={() => setEditarEscuelas(false)}
      >
        <div className="modal-content">
          <EditarEscuela
            id={props.id}
            nombre={props.nombre}
            clave={props.clave}
            editarEscuela={setEditarEscuelas}
            getEscuelas={props.getEscuelas}
          />
        </div>
      </Modal>

      <Modal
        open={eliminarUnidades}
        fnCloseModal={() => setEliminarUnidades(false)}
      >
        <div className="modal-content">
          <EliminarUnidades
            id={props.id}
            getEscuelas={props.getEscuelas}
            setEliminarUnidades={setEliminarUnidades}
          />
        </div>
      </Modal>
      <tr className="white">
        <td>
          <i
            className="material-icons  white-text text-darken-2  left circle  ipn  "
            style={{ width: "27px", height: "27px", textAlign:"center", fontSize:"24px"  }}
          >
            account_balance
          </i>
          {/* <b>CIC - Centro de Investigación en Computación</b> */}
          <b>
            {props.clave} - {props.nombre}
          </b>
        </td>
        {/*  <td>
              <i className="material-icons  white-text text-darken-2  left circle  teal ">
                school
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>
              <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                local_library
              </i>
              Juan Francisco Islas Austria
            </td>
            <td>Juan Francisco Islas Austria</td> */}
        <td>
          {/* <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
                  style={{
                    borderColor: "#0091ea",
                    borderWidth: "2px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
              
              >
                <b>Ver Detalles</b>
              </a> */}
          <button
            className="modal-trigger waves-effect waves-light cyan-text text-darken-3 btn outlined"
            onClick={() => setModalDetalles(true)}
            style={{
              borderColor: "#0091ea",
              borderWidth: "2px",
              position: "relative",
              marginBottom: "0px",
            }}
          >
            <b>Ver Detalles</b>
          </button>
        </td>
        <td>
          <button
            class="waves-effect waves-light  btn-flat yellow-text text-darken-4  "
            onClick={() => setEditarEscuelas(true)}
          >
            <i class="material-icons left ">edit</i>
          </button>
        </td>
        <td>
          <button
            class="waves-effect waves-light  btn-flat red-text"
            onClick={() => setEliminarUnidades(true)}
          >
            <i class="material-icons left ">delete</i>
          </button>
        </td>
      </tr>
    </>
  );
};
export default FilasEscuelas;
