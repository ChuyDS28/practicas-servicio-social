import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const AdministrarSolicitudes = () => {
  let history = useHistory();

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const ModalAsignarRevisor = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content  ">
          <h5>Asignar Revisor</h5>
          <div className="  col s6">
            <label>Revisores:</label>
            <select className="browser-default" defaultValue="" required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="1">Antonio</option>
              <option value="2">Luis</option>
              <option value="2">ssdsd </option>
            </select>
          </div>

          <br />
          <button type="submit" className="waves-effect waves-light btn   ">
            Asignar
            <i className="material-icons right">picture_as_pdf</i>
          </button>
          <button className="modal-close waves-effect waves-green btn-flat right">
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <ModalAsignarRevisor />
      <div className="container  ">
        <blockquote>
          <h5 className="light teal-text">Listado de solicitudes</h5>
          <p>
            Aqui puedes consultar el historial de solicitudes y asisgnar un
            revisor
          </p>
        </blockquote>

        <table className="striped responsive-table ">
          <thead>
            <tr>
              <th>Solicitudes</th>
              <th>Status</th>
              <th>Revisor</th>
              <th>Ver</th>
            </tr>
          </thead>

          <tbody>
            <tr
              className="trPointer"
              onClick={() => {
                //  history.push("/admin/DetallesRegistro");
              }}
            >
              <td>Solicitud Curso Informatica </td>
              <td>
                <span className="new badge red  " data-badge-caption="">
                  Pendiete - Asignar Revisor
                </span>
              </td>
              <td>
                <a
                  className="modal-trigger waves-effect waves-light btn "
                  href="#modal1"
                >
                  Asignar Revisor
                </a>
              </td>
              <td>
                <Link
                  to="/admin/DetallesRegistro"
                  className="waves-effect waves-light btn outlined"
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
                <a
                  className=" modal-trigger waves-effect waves-light btn"
                  href="#modal1"
                >
                  Asignar Revisor
                </a>
              </td>
              <td>
                <Link
                  to="/admin/DetallesRegistro"
                  className="waves-effect waves-light btn outlined"
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
              <td>Antonio Ayola</td>
              <td>
                <Link
                  to="/admin/DetallesRegistro"
                  className="waves-effect waves-light btn outlined"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr
              className="trPointer"
              onClick={() => {
                history.push("/admin/DetallesRegistro");
              }}
            >
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
              <td>Antonio Ayola</td>
              <td>
                <Link
                  to="/admin/DetallesRegistro"
                  className="waves-effect waves-light btn outlined"
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
              <td>Antonio Ayola</td>
              <td>
                <Link
                  to="/admin/DetallesRegistro"
                  className="waves-effect waves-light btn outlined"
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

export default AdministrarSolicitudes;
