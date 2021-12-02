import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const AdministrarUsuarios = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  return (
    <>
      <div className="container  ">
        <blockquote>
          <h5 className="light teal-text">Listado de usuarios</h5>
          <p>Aqui puedes consultar las persosnas que quieren registrarse</p>
        </blockquote>

        <table className="striped responsive-table ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo de usuario</th>
              <th>Num. Empleado </th>
              <th>Status</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Subdirector Academico
              </td>
              <td>121312</td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
              <td>
                <button
                  className=" modal-trigger waves-effect waves-light btn outlined   "
                  href="#modal1"
                >
                  Desactivar
                </button>
              </td>
            </tr>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Subdirector Academico
              </td>
              <td>45456</td>
              <td>
                <span className="new badge grey  " data-badge-caption="">
                  Cuenta desactivada
                </span>
              </td>
              <td>
                <button
                  className=" modal-trigger waves-effect waves-light btn  "
                  href="#modal1"
                >
                  Activar Cuenta
                </button>
              </td>
            </tr>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  rate_review
                </i>
                Revisor
              </td>
              <td>-</td>
              <td>
                <span className="new badge amber" data-badge-caption="">
                  Cuenta sin Activar
                </span>
              </td>
              <td>
                <button
                  className=" modal-trigger waves-effect waves-light btn  "
                  href="#modal1"
                >
                  Activar Cuenta
                </button>
              </td>
            </tr>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Subdirector Academico
              </td>
              <td>456456</td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
              <td>
                <a
                  className=" modal-trigger waves-effect waves-light btn outlined   "
                  href="#modal1"
                >
                  Desactivar
                </a>
              </td>
            </tr>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  rate_review
                </i>
                Revisor
              </td>
              <td>-</td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
              <td>
                <a
                  className=" modal-trigger waves-effect waves-light btn outlined   "
                  href="#modal1"
                >
                  Desactivar
                </a>
              </td>
            </tr>
            <tr>
              <td>Antonio Ayola</td>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  rate_review
                </i>
                Revisor
              </td>
              <td>sds</td>

              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
              <td>
                <a
                  className=" modal-trigger waves-effect waves-light btn outlined   "
                  href="#modal1"
                >
                  Desactivar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdministrarUsuarios;
