import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const ListadoRegistrosGeneral = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const ModalHelp = () => {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content  ">
          <h5>Tipos de registro</h5>
          <br />
          <span className="new badge grey darken-2 left" data-badge-caption="">
            Deprecado
          </span>
          <div className="  ">
            &nbsp; &nbsp;- Programa con mas de 2 años de antiguedad, ya no puede
            ser impartido
            <br /> <br />
          </div>
          <span className="new badge blue left" data-badge-caption="">
            Vigente
          </span>
          <div className=" ">
            &nbsp; &nbsp; - Programa vigente actualizado que puede ser impartido
            de nuevo
            <br /> <br />
          </div>
          <span
            className="new badge yellow darken-4  left"
            data-badge-caption=""
          >
            EnProceso
          </span>
          <div className="">
            &nbsp; &nbsp; - Programa en proceso que necesita terminar de ser
            aprovado
            <br /> <br />
          </div>
          <span className="new badge green left " data-badge-caption="">
            Impartiendo
          </span>
          <div className="">
            &nbsp; &nbsp; - Programa que esta siendo impartido en este momento
            <br /> <br />
          </div>
          <button
            href="#!"
            class="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <ModalHelp />
      <div className="container section">
        <blockquote>
          <h5 className="light teal-text">Listado de registros revisados</h5>
          <p>Aqui puedes consultar el historial de todos tus registros...</p>
        </blockquote>

        <label>Mostrar Registros</label>
        <select className="browser-default" defaultValue="Todos">
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="1">Todos</option>
          <option value="2">Finalizados</option>
          <option value="3">En proceso </option>
          <option value="3">Vigentes</option>
        </select>

        <div className="collection">
          <p className="collection-item active  ">
            Listado de registros
            <a class=" modal-trigger right white-text" href="#modal1">
              Ayuda
              <span className="small material-icons white-text ">help</span>
            </a>
          </p>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge yellow darken-4" data-badge-caption="">
              Impartiendo
            </span>
            Curso de Informatica
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item">
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge yellow darken-4" data-badge-caption="">
              Impartiendo
            </span>
            Curso de Informatica
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListadoRegistrosGeneral;
