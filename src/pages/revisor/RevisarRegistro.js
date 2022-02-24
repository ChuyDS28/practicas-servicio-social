/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba10 from "../../assets/images/ba10.png";
const style = {
  blockquote: {
    borderColor: "#ffffff" /* Just change the color value and that's it*/,
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },
  subtitleContainer: {
    width: "fit-content",
    border: "2px solid #fff",
    margin: "auto",
    padding: "0 1rem",
  },
};

const RevisarRegistro = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const ModalReview = () => {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content  ">
          <h5>Enviar revisión</h5>
          <div className="  col s6">
            <label>La documentación a sido:</label>
            <select className="browser-default" defaultValue="" required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="1">Aceptada</option>
              <option value="2">Rechazada</option>
            </select>
          </div>
          <div class="input-field col s12">
            <textarea
              id="textarea2"
              class="materialize-textarea"
              data-length="120"
            ></textarea>
            <label for="textarea2">Observaciones</label>
          </div>
          <br />
          <button type="submit" className="waves-effect waves-light btn   ">
            Enviar Revisión
            <i className="material-icons right">picture_as_pdf</i>
          </button>
          <button className="modal-close waves-effect waves-green btn-flat right">
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  const Paso1 = () => {
    return (
      <div className="row">
        <div className="col xl4 m4 s4 l4">
          <span className="new badge left cyan accent-4 " data-badge-caption="">
            Paso 1
          </span>
          <span>
            <strong>&nbsp;&nbsp; Solicitud de registro</strong>
          </span>
        </div>
        <div className="col xl3 m3 s4 l3">
          <span className="new badge red " data-badge-caption="">
            Pendiente por revisar
          </span>
        </div>
        <div className="col xl3 m3 ">
          <Link
            to="/revisor/revisarRegistro/solicitud"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Solicitud
          </Link>
        </div>
        <div className="col xl2 m2 s7 l2 ">
          <a
            className="modal-trigger waves-effect waves-light btn"
            href="#modal1"
          >
            Enviar revisión
            <i className="material-icons right">picture_as_pdf</i>
          </a>
        </div>
        {/*   <div className="col s12  ">
        <p className="  light  ">
          <strong>Observaciones:&nbsp;&nbsp;</strong>
          El campo x es incorrecto necesita...
        </p>
      </div> */}
      </div>
    );
  };
  const Paso2 = () => {
    return (
      <div className="row">
        <div className="col s4 ">
          <span
            className="new badge  cyan accent-4 left white-text "
            data-badge-caption=""
            style={{ overflow: "hidden" }}
          >
            Paso 2
          </span>
          <span>
            <strong>&nbsp;&nbsp; Enviar solicitud firmada</strong>
          </span>
        </div>
        <div className="col xl3 s4 m3 l3 ">
          <span
            className="new badge  red "
            style={{ overflow: "hidden" }}
            data-badge-caption=""
          >
            Pendiente por revisar
          </span>
        </div>
        <div className="col xl3 m3 l3 ">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Solicitud
          </button>
        </div>
        <div className="col xl2 s7 m2  l2">
          <a
            className="modal-trigger waves-effect waves-light btn"
            href="#modal1"
          >
            Enviar revisión
            <i className="material-icons right">picture_as_pdf</i>
          </a>
        </div>
        {/*   <div className="col s12  ">
        <p className="  light  ">
          <strong>Observaciones:&nbsp;&nbsp;</strong>
          El campo x es incorrecto necesita...
        </p>
      </div> */}
      </div>
    );
  };
  const Paso3 = () => {
    return (
      <div className="row">
        <div className="col s4 xl4 m4 l4 ">
          <span
            className="new badge  cyan accent-4 left white-text  "
            data-badge-caption=""
          >
            Paso 3
          </span>
          <span>
            <strong>&nbsp;&nbsp; Carta AVAL</strong>
          </span>
        </div>
        <div className="col xl3 s5 m3 l3 ">
          <span
            className="new badge yellow darken-4 "
            style={{ overflow: "hidden" }}
            data-badge-caption=""
          >
            Revisado con corecciones
          </span>
        </div>
        <div className="col xl3 m3 l3">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver carta AVAL
          </button>
        </div>
        <div className="col xl2 s4 l4">
          {/*  <a
          className="modal-trigger waves-effect waves-light btn"
          href="#modal1"
        >
          Enviar revición
          <i className="material-icons right">picture_as_pdf</i>
        </a> */}
        </div>
      </div>
    );
  };
  const Paso4 = () => {
    return (
      <div className="row">
        <div className="col s5 ">
          <span
            className="new badge  cyan accent-4 left white-text  "
            data-badge-caption=""
          >
            Paso 4
          </span>
          <span>
            <strong>
              &nbsp;&nbsp;Documentos probatorios de&nbsp;&nbsp;AVAL
            </strong>
          </span>
        </div>

        <div className="col s2 ">
          <span className="new badge blue " data-badge-caption="">
            S/D
          </span>
        </div>
        <div className="col s3">
          {/*  <button
          type="submit"
          className="waves-effect waves-light btn  outlined"
        >
          Ver Solicitud
         </button> */}
        </div>
        <div className="col s2 ">
          {/*   <a
          className="modal-trigger waves-effect waves-light btn"
          href="#modal1"
        >
          Enviar revición
          <i className="material-icons right">picture_as_pdf</i>
        </a> */}
        </div>
      </div>
    );
  };
  const Paso5 = () => {
    return (
      <div className="row">
        <div className="col s4 xl3 m3 l3">
          <span
            className="new badge  cyan accent-4 left white-text    "
            data-badge-caption=""
          >
            Paso 5
          </span>
          <span>
            <strong>&nbsp;&nbsp; Cronograma</strong>
          </span>
        </div>
        <div className="col xl4 s4 m4 l4">
          <span className="new badge green   " data-badge-caption="">
            Revisado - Completo
          </span>
        </div>
        <div className="col xl3 s7 m3 l3 ">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Cronograma
          </button>
        </div>
        <div className="col s2 ">
          {/*  <a
          className="modal-trigger waves-effect waves-light btn"
          href="#modal1"
        >
          Enviar revición
          <i className="material-icons right">picture_as_pdf</i>
        </a> */}
        </div>
        {/*  <div className="col s12  ">
        <p className="  light  ">
          <strong>Observaciones:&nbsp;&nbsp;</strong>
          El campo x es incorrecto necesita...
        </p>
      </div> */}
      </div>
    );
  };

  return (
    <>
      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          className="responsive-img"
          src={ba10}
          alt=""
        />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h3 className="white-text center" style={{ fontSize: "3rem" }}>
            PROGRAMA DE INFORMÁTICA
          </h3>
          <div className="">
            <center>
              <h5 className="white-text ">
                Centro de vinculación y desarrollo regional
              </h5>
            </center>
          </div>
        </div>
      </header>
      <ModalReview />
      <div className="container section">
        <Link
          to="/revisor/listadoRegistros"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <p className="header light">
          El proceso del registro esta en el
          <strong className="teal-text"> 70%</strong> <br />
          Pasos completados <strong>1 de 5</strong>
        </p>

        <br />
      </div>
      <div className="container section  ">
        <div className="collection">
          <p className="white-text collection-item active   blue darken-4 center">
            <b>Pasos</b>
          </p>
          {/*   <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge grey darken-2" data-badge-caption="">
              Deprecado
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link>
          <Link to="/user/registroDetalle" className="collection-item">
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            Curso de Informatica
          </Link> */}
          <a className="collection-item black-text " style={{ border: "0px" }}>
            <Paso1 />
          </a>
          <a
            className="collection-item black-text blue lighten-5 "
            style={{ border: "0px" }}
          >
            <Paso2 />
          </a>
          <a className="collection-item black-text" style={{ border: "0px" }}>
            <Paso3 />
          </a>
          <a
            style={{ border: "0px" }}
            className="collection-item blue lighten-5 black-text "
          >
            <Paso4 />
          </a>
          <a style={{ border: "0px" }} className="collection-item  black-text ">
            <Paso5 />
          </a>
        </div>
      </div>
    </>
  );
};

export default RevisarRegistro;
