import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../components/RegistrarInstructor";

const CRUDInstructores = () => {
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const ModalAgregarInstructor = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content  row">
          <RegistrarInstructor />
        </div>
      </div>
    );
  };

  return (
    <>
      <ModalAgregarInstructor />

      <div className="container  ">
        <Link
          to="/admin/listadoCatalogos"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <a
          href="#modal1"
          className="modal-trigger waves-effect waves-light btn right"
        >
          Agregar nuevo Instructor
        </a>

        <blockquote>
          <h5 className="light teal-text">Instructores</h5>
          <p>Aqui puedes consultar, agregar, editar o eliminar instructore. </p>
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
        <table className="striped responsive-table ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th> RFC</th>
              <th> Area</th>
              <th> CV</th> <th> Doc. Probatorios </th>
              {/* <th> Status</th> */}
              <th>Editar</th>
              <th>Borrar</th>
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
              <td>TICs</td>

              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
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
              <td>TICs</td>

              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>TICs</td>

              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>TICs</td>

              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>   <tr>
              <td>
                <i className="material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
                  local_library
                </i>
                Antonio Ayola
              </td>
              <td>VECJ880326 XXX</td>
              <td>TICs</td>

              <td>
                <button className="waves-effect waves-light btn  ">CV</button>
              </td>
              <td>
                <button className="waves-effect waves-light btn  outlined ">
                  Documentación
                </button>
              </td>
             {/*  <td>
                <span className="new badge green  " data-badge-caption="">
                  Cuenta Activada
                </span>
              </td> */}
              <td>
                <button class="waves-effect waves-light  btn-flat yellow-text text-darken-4   ">
                  <i class="material-icons left ">edit</i>
                </button>
              </td>
              <td>
                <button class="waves-effect waves-light  btn-flat red-text">
                  <i class="material-icons left ">delete</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CRUDInstructores;
