import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const Fila = (props) => {
  let titulo = "";
  if (props.titulo == props.titulo) {
    titulo = props.titulo;
  }

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);
  const ModalEscoger = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content  ">
          <h5>Buscar un reporte</h5>

          <div className="input-field col s12">
            <p className="  light ">Ingresar los datos solicitados</p>
            {/*    <div className="teal lighten-5 " style={style.infoContainer}>
              <span className="small material-icons blue-text ">error</span>
              <span className="new badge blue darken-2" data-badge-caption="">
                Nota
              </span>
              <p>
                Verificar nombre del curso, el nombre del registro no se podra
                modificar ni eliminar.
                <br /> · Indicaciones.........
              </p>
            </div> */}
            <div className="input-field col s12">
              {/* <input id="nombreCurso" type="text" required /> */}
              <p>Nombre del reporte:{titulo}</p>
            </div>
            <div className="row">
              <div className="  col s4 m3 xl3">
                <label>Trimestre:</label>
                <select
                  className="browser-default"
                  defaultValue="Normal"
                  required
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="1">Primero</option>
                  <option value="2">Segundo</option>
                  <option value="2">Tercero</option>
                </select>
              </div>
              <div className="  col s4 m3 xl3">
                <label>Año:</label>
                <select
                  className="browser-default"
                  defaultValue="2021"
                  type="date"
                  required
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="1">2021</option>
                  <option value="2">2022</option>
                  <option value="3">2023</option>
                  <option value="4">2024</option>
                </select>
              </div>
            </div>
          </div>

          <br />
          {/*   <button type="submit" className="modal-close waves-effect waves-light btn   ">
            Crear nuevo registro de programa
            <i className="material-icons right">picture_as_pdf</i>
          </button> */}
          <Link
            to="/eacuerdos/Reportes/dvdr_3T?trimestre=3&fecha=2021"
            className="modal-close waves-effect waves-light btn   "
          >
            Buscar
            <i className="material-icons right">picture_as_pdf</i>
          </Link>
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <ModalEscoger />
      <a
        href="#modal2"
        className="modal-trigger collection-item black-text"
        style={{ border: "0px" }}
      >
        <b>{props.titulo}</b>
      </a>
    </>
  );
};

export default Fila;
