import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const CrudEscuelas = () => {
  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const ModalAgregarEscuela = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content row ">
          <h5>Registrar Escuela, Centro o Unidad </h5>
          <div className="input-field col s8">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre del centro</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Siglas</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Coordinador Academico (CA) o Jefe de Educación Continua - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del CA</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Numero telefonico del CA</label>
          </div>
          <div className="input-field col s3">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extención del CA</label>
          </div>
          <div className="input-field col s5">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Correo electrónico del CA</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Director - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del Director</label>
          </div>
          <div className="input-field col s4">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Numero telefonico del Director</label>
          </div>
          <div className="input-field col s3">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extención del Director</label>
          </div>
          <div className="input-field col s5">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Correo electrónico del Director</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>Datos del Subdirector - (Opcional)</p>
            </blockquote>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre completo del Subdirector</label>
          </div>
          <div className="input-field col s6">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">
              Numero telefonico del Subdirector
            </label>
          </div>
          <div className="input-field col s6">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extención del Subdirector</label>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">
              Correo electrónico del Subdirector
            </label>
          </div>

          <br />
          <button type="submit" className="waves-effect waves-light btn   ">
            Registrar Escuela
            <i className="material-icons right">picture_as_pdf</i>
          </button>
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
  const ModalDetalleEscuela = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content row ">
          <h5>
            CIC - Centro de Investigación en Computación <br />
            <br />
          </h5>
          <h6>
            <i className="tiny material-icons white-text text-darken-2  left circle  teal ">
              school
            </i>
            Coordinador Academico
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Numero telefonico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extención:</strong> 7711825959
            </span>
          </p>
          <div className="divider teal"></div>
          <h6>
          <i className="tiny material-icons  teal-text text-darken-2  left circle  teal lighten-4   ">
              local_library
            </i>
            Director
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Numero telefonico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extención:</strong> 7711825959
            </span>
          </p>
          <div className="divider teal"></div> <h6>
            <i className="tiny material-icons white-text text-darken-2  left circle  ipn ">
              school
            </i>
            Subdirector
          </h6>
          <p>
            <strong>Nombre:</strong> Antonio Ayola
            <span className="right">
              <strong>&nbsp;&nbsp;Correo :</strong> antonio@ipn.gob
            </span>
            <br />
            <strong>Numero telefonico:</strong> 7711825959
            <span className="right">
              <strong>&nbsp;&nbsp;Extención:</strong> 7711825959
            </span>
          </p>
          
          <br />
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
      <ModalAgregarEscuela />
      <ModalDetalleEscuela />
      <div className="container">
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
          Agregar Escuela
        </a>

        <blockquote>
          <h5 className="light teal-text">
            Unidades Academicas, Centros y Escuelas
          </h5>
          <p>Aqui puedes consultar, agregar, editar o eliminar escuelas. </p>
        </blockquote>
        <div className="row ">
          <div className="input-field col s10  ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">Escuela</label>
          </div>

          <div className="input-field col s2 right  ">
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
            <th>Escuela</th>
           {/*  <th> Coordinador Academico (CA)</th>
            <th> Director</th>
            <th> Subdirector </th> */}
            <th> Detalles</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              CIC - Centro de Investigación en Computación
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
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light btn outlined"
              >
                Ver Detalles
              </a>
            </td>
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
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              CIC - Centro de Investigación en Computación
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
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light btn outlined"
              >
                Ver Detalles
              </a>
            </td>
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
          </tr><tr>
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              CIC - Centro de Investigación en Computación
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
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light btn outlined"
              >
                Ver Detalles
              </a>
            </td>
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
          </tr><tr>
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              CIC - Centro de Investigación en Computación
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
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light btn outlined"
              >
                Ver Detalles
              </a>
            </td>
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
          </tr><tr>
            <td>
              <i className="material-icons  white-text text-darken-2  left circle  ipn  ">
                account_balance
              </i>
              CIC - Centro de Investigación en Computación
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
              <a
                href="#modal2"
                className="modal-trigger waves-effect waves-light btn outlined"
              >
                Ver Detalles
              </a>
            </td>
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

export default CrudEscuelas;
