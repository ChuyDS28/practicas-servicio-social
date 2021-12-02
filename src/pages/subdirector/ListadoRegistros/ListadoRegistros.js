import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import parteba5 from "../../../assets/images/parteba5.png";
import ba5 from "../../../assets/images/ba5.png";
import Footer from "../../Footer";
import "./ListadoRegistros.css";

const style = {
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon2: {
    position: "absolute",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
  },
  imag: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  imag2: {
    position: "absolute",
    right: "60px",
    top: "0%",
    height: "80%",
    width: "92px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "100%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
};

const ListadoRegistros = () => {
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
            aprobado
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
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  const ModalAgregarRegistro = () => {
    return (
      <div id="modal2" className="modal">
        <div className="modal-content  ">
          <h5>Agregar nuevo registro</h5>

          <div className="input-field col s12">
            <p className="  light ">Ingresar los datos solicitados</p>
            <div className="teal lighten-5 " style={style.infoContainer}>
              <span className="small material-icons blue-text ">error</span>
              <span className="new badge blue darken-2" data-badge-caption="">
                Nota
              </span>
              <p>
                Verificar nombre del curso, el nombre del registro no se podra
                modificar ni eliminar.
                <br /> · Indicaciones.........
              </p>
            </div>
            <div className="input-field col s12">
              <input id="nombreCurso" type="text" required />
              <label htmlFor="nombreCurso">Nombre del Curso</label>
            </div>
            <div className="  col s4 m3 xl3">
          <label>Su solicitud es:</label>
          <select className="browser-default" defaultValue="Normal" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Normal</option>
            <option value="2">Urgente</option>
          </select>
        </div>
          </div>

          <br />
          {/*   <button type="submit" className="modal-close waves-effect waves-light btn   ">
            Crear nuevo registro de programa
            <i className="material-icons right">picture_as_pdf</i>
          </button> */}
          <Link
            to="/subdirector/registroDetalle"
            className="modal-close waves-effect waves-light btn   "
          >
            Crear nuevo registro de programaa
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
      <ModalHelp />
      <ModalAgregarRegistro />

      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l9 xl8 "
          style={{
            position: "absolute",
            top: "-10px",
            height: "110%",
            left: "0px",
          }}
        >
          <img
            alt=""
            src={ba5}
            className="responsive-image"
            style={style.fon}
          />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>PROGRAMAS</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text">
              <b>
                Aquí puedes consultar el historial <br /> de todos tus
                registros, agregar <br /> nuevos y darles seguimiento...
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m6 l6 xl5 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba5}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br />
      <div className="container section">
        <a
          className="modal-trigger purple accent-4 waves-effect waves-light btn right"
          href="#modal2"
        >
          Agregar nuevo registro
          <i className="material-icons right">add</i>
        </a>
        <blockquote>
          {/* <h5 className="light teal-text">
            Listado de programas del centro de
          </h5>
          <p>
            Aqui puedes consultar el historial de todos tus registros, agregar
            nuevos darle seguimiento...
          </p> */}
        </blockquote>
        <br />
        <div className="row">
          <div className="  col s12 l3 m5  ">
            <br />
            <label>Mostrar Registros:</label>
            <select
              className="browser-default"
              style={{ borderWidth: "2px", borderColor: "grey" }}
              defaultValue=""
              required
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="1">Todos</option>
              <option value="2">Finalizados</option>
              <option value="3">En proceso </option>
              <option value="3">Vigentes</option>
            </select>
          </div>
          <br />
          <div className="input-field col s12 l4 m7 ">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Nombre del curso</label>
          </div>
          <div className="input-field col s12  l3 m5">
            <input id="nombreCurso" type="date" required />
            <label htmlFor="nombreCurso">Fecha</label>
          </div>
          <div className="input-field col s12 l2 m3">
            <center>
              <button
                type="submit"
                className=" waves-effect waves-light btn outlined teal-text text-accent-4boton"
                style={{ borderColor: "#00bfa5", borderWidth: "2px" }}
              >
                <b>Buscar</b>
                <i className="material-icons right">search</i>
              </button>
            </center>
          </div>
        </div>

        <div className="collection">
          <p className="white-text collection-item active  deep-purple accent-1 ">
            <b>Nombre</b>
            <a className=" modal-trigger right white-text" href="#modal1">
              <b>Ayuda</b>&nbsp;
              <span className="small material-icons white-text ">help</span>
            </a>
          </p>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text "
            style={{ border: "0px" }}
          >
            <span className="new badge grey darken-2 " data-badge-caption="">
              Deprecado
            </span>
            <b>Curso de Informatica</b>
          </Link>
          <Link
            to="/subdirector/RegistroDetalle"
            className="collection-item black-text light-blue lighten-5"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge grey darken-2" data-badge-caption="">
                Deprecado
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/RegistroDetalle"
            className="collection-item black-text"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge blue " data-badge-caption="">
                Vigente
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text light-blue lighten-5"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge blue " data-badge-caption="">
                Vigente
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge yellow darken-4" data-badge-caption="">
                En proceso - 70% Completado
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text light-blue lighten-5"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge yellow darken-4" data-badge-caption="">
                En proceso - 50% Completado
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge green " data-badge-caption="">
                Impartiendo
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text light-blue lighten-5"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge green " data-badge-caption="">
                Impartiendo
              </span>
              Curso de Informatica
            </b>
          </Link>
          <Link
            to="/subdirector/registroDetalle"
            className="collection-item black-text"
            style={{ border: "0px" }}
          >
            <b>
              <span className="new badge lime darken-1 " data-badge-caption="">
                En proceso - Con revisiones
              </span>
              Curso de Informatica
            </b>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default ListadoRegistros;
