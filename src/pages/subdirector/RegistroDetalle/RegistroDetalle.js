import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba8 from "../../../assets/images/ba8.png";
import StepContainer from "./StepContainer";

const style = {
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
const RegistroDetalle = () => {
  const history = useHistory();

  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const ModalHelp = () => {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content ">
          <div className=" red accent-1 white-text section center">
            <h5 className="">Simbología de colores</h5>
          </div>
          <br />
          <span
            className="new badge green lighten-3 left"
            data-badge-caption=""
          >
            Verde
          </span>
          <div className="  ">
            &nbsp; &nbsp;- Formato validado de forma satisfactoria
            <br /> <br />
          </div>
          <span
            className="new badge  blue lighten-3 left"
            data-badge-caption=""
          >
            Azul
          </span>
          <div className=" ">
            &nbsp; &nbsp; - Falta por subir formato
            <br /> <br />
          </div>
          <span className="new badge red lighten-3  left" data-badge-caption="">
            Rojo
          </span>
          <div className="">
            &nbsp; &nbsp; - Documentación rechazada
            <br /> <br />
          </div>
          <span
            className="new badge amber lighten-3 left "
            data-badge-caption=""
          >
            Amarillo
          </span>
          <div className="">
            &nbsp; &nbsp; - Pendiente por revisar
            <button
              href="#!"
              className="modal-close waves-effect waves-green white-text red accent-1 btn-flat right"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Paso6 = () => {
    return (
      <div className="row grey lighten-2" style={style.buttonContainer}>
        <div className="col s12">
          <span style={style.orderCircle}>5</span>
          <span>
            <strong>&nbsp;&nbsp;Instructivo</strong>
          </span>
          <span className="small material-icons blue-text ">error</span>

          <button type="submit" className="waves-effect waves-light btn right ">
            Subir Instructivo
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        </div>
        <div
          className="col s12  blue lighten-3"
          style={style.comentariosContainer}
        >
          <span className="new badge blue " data-badge-caption="">
            Comentarios
          </span>
          <p>
            En este paso debes subir tu archivo instructivo en formato pdf ...
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <ModalHelp />
      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img style={style.headerImg} src={ba8} alt="" />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h3 className="black-text center" style={{ fontSize: "3rem" }}>
            PROGRAMA DE INFORMÁTICA
          </h3>
          <div className="">
            <center>
              <blockquote>
                <h5 className="black-text ">
                  <i>Sigue los pasos a continuación para registrar</i>
                </h5>
              </blockquote>
            </center>
          </div>
        </div>
      </header>
      <div className="row container section">
        <Link
          to="/subdirector/listadoRegistros"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <blockquote>
          <h5 className="header light teal-text">Programa de informática</h5>
          <p>Sigue los pasos a continuación para registrar</p>
        </blockquote>
        <p className="header light col s10 ">
          El proceso del registro esta en el
          <strong className="teal-text"> 70%</strong> <br />
          Pasos completados <strong>1 de 5</strong>
        </p>
        <a
          className=" modal-trigger right white-text btn center"
          href="#modal1"
        >
          Simbología&nbsp;
        </a>
        <br />
        <br />
        <StepContainer
          step="1"
          title="Solicitud de registro"
          status={0}
          callback={() => history.push("/subdirector/generarSolicitud")}
          btnTitle="Solicitud de Registro"
          observaciones=""
        />
        <StepContainer
          step="2"
          title="Enviar Solicitud de registro firmada"
          status={0}
          btnTitle="Solicitud de registro firmada"
        />
        <StepContainer
          step="3"
          title="Carta AVAL"
          status={0}
          btnTitle="Carta AVAL"
        />
        <StepContainer
          step="4"
          title="Documentos Probatorios de Aval"
          status={0}
          btnTitle="Documento"
        />
        <StepContainer
          step="5"
          title="Cronograma"
          status={0}
          btnTitle="Cronograma"
        />
      </div>
    </div>
  );
};

export default RegistroDetalle;
