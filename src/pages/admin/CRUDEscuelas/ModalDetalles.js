import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";
import { obtenerDirectivosUnidadAcademica } from "../../../api/services/unidadAcademica";

moment.locale();

const ModalDetalles = ({ escuela }) => {
  const [directivos, setDirectivos] = useState([]);

  useEffect(() => {
    getEscuelas();
  }, []);

  async function getEscuelas() {
    try {
      const response = await obtenerDirectivosUnidadAcademica(escuela.id);
      console.log(response);
      setDirectivos(response.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <div className="modal-content row ">
      <h5>
        {/* <b> CIC - Centro de Investigación en Computación </b> */}
        <b>
          {escuela.clave} - {escuela.nombre}
        </b>
        <br />
        <br />
      </h5>
      {directivos.map((directivo) => (
        <DirectivoListItem directivo={directivo} />
      ))}

      <br />
      <button
        href="#!"
        className="modal-close waves-effect waves-green btn-flat right"
      >
        Cerrar
      </button>
    </div>
  );
};

function DirectivoListItem({ directivo }) {
  return (
    <>
      <h6 style={{ fontSize: "1rem" }}>
        <i
          className="tiny material-icons white-text text-darken-2  left circle  ipn "
          style={{ padding: "0.3rem" }}
        >
          school
        </i>
        {directivo.tipo}
      </h6>
      <p className="section">
        <strong>Nombre:</strong>
        {` ${directivo.usuario.nombre}
        ${directivo.usuario.primerApellido}
        ${directivo.usuario.segundoApellido}`}
        <span className="right">
          <strong>&nbsp;&nbsp;Correo: </strong>
          {directivo.usuario.correoInstitucional}
        </span>
        <br />
        <strong>Número telefónico:</strong> Falta
        <span className="right">
          <strong>&nbsp;&nbsp;Extensión:</strong> Falta
        </span>
        <br />
        <strong>Fecha de Registro:</strong>{" "}
        {moment(directivo.usuario.creado).format("LL h:mm a")}
        <span className="right">
          <strong>&nbsp;&nbsp;Numero de Empleado:</strong>{" "}
          {directivo.usuario.numeroEmpleado}
        </span>
      </p>
      <div className="divider teal"></div>
    </>
  );
}
export default ModalDetalles;
