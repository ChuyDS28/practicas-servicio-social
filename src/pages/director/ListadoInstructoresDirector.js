import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const ListadoInstructoresDirector = () => {
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  return (
    <>
      <div className="container  ">
        <Link
          to="/director/menu"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>

        <blockquote>
          <h5 className="light teal-text">Instructores</h5>
          <p>Aqui puedes consultar y registrar instructores </p>
        </blockquote>
        <div className="row ">
          <div className="input-field col s4  ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">RFC con Homoclave</label>
          </div>

          <div className="input-field col s2">
            <button
              type="submit"
              className="waves-effect waves-light btn outlined  "
            >
              Buscar
              <i className="material-icons right">search</i>
            </button>
          </div>
        </div>
        <hr />
        <table className="striped responsive-table ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th> RFC</th>
              <th> CV</th> <th> Doc. Probatorios </th>
              <th> Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListadoInstructoresDirector;
