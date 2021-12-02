import React from "react";
import { Link, useHistory } from "react-router-dom";

const DirectorListadoGeneral = () => {
  let history = useHistory();

  return (
    <>
      <div className="container  ">
        <blockquote>
          <h5 className="light teal-text">Listado General</h5>
          <p>Aqui puedes consultar los registros de programas</p>
        </blockquote>

        <table className="striped responsive-table ">
          <thead>
            <tr>
              <th>Programa</th>
              <th>Status</th>
              <th>Ver</th>
            </tr>
          </thead>

          <tbody>
            <tr
              className="trPointer"
              onClick={() => {
                //  history.push("/director/DetallesRegistro");
              }}
            >
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge red  " data-badge-caption="">
                  Pendiete - Asignar Revisor
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer">
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge red  " data-badge-caption="">
                  Pendiete - Asignar Revisor
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer">
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer">
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
                <span
                  className="new badge yellow darken-4"
                  data-badge-caption=""
                >
                  En proceso
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer">
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn"
                >
                  Ver
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DirectorListadoGeneral;
