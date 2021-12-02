import React from "react";
import { Link, useHistory } from "react-router-dom";

const DetalleRegistroS = () => {
   let history = useHistory();

   const Paso1 = () => {
    return (
      <div className="row stepContainer">
        <div className="col s4 ">
          <span
            className="new badge  grey lighten-1  left black-text "
            data-badge-caption=""
          >
            Paso 1
          </span>
          <span>
            <strong>&nbsp;&nbsp; Solicitud de registro</strong>
          </span>
        </div>
        <div className="col s3 ">
          <span className="new badge  red " data-badge-caption="">
            Pendiente por revisar
          </span>
        </div>
        <div className="col s3 center">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Solicitud
          </button>
        </div>
      </div>
    );
  };
  const Paso2 = () => {
    return (
      <div className="row stepContainer">
        <div className="col s4 ">
          <span
            className="new badge  grey lighten-1  left black-text "
            data-badge-caption=""
          >
            Paso 2
          </span>
          <span>
            <strong>&nbsp;&nbsp; Enviar Solicitud de registro firmada</strong>
          </span>
        </div>
        <div className="col s3 ">
          <span className="new badge  red " data-badge-caption="">
            Pendiente por revisar
          </span>
        </div>
        <div className="col s3 center">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Solicitud
          </button>
        </div>
      </div>
    );
  };
  const Paso3 = () => {
    return (
      <div className="row stepContainer">
        <div className="col s4 ">
          <span
            className="new badge  grey lighten-1  left black-text "
            data-badge-caption=""
          >
            Paso 3
          </span>
          <span>
            <strong>&nbsp;&nbsp; Carta AVAL</strong>
          </span>
        </div>
        <div className="col s3   ">
          <span className="new badge yellow darken-4   " data-badge-caption="">
            Revisado con corecciones
          </span>
        </div>
        <div className="col s3 center">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Carta AVAL
          </button>
        </div>
      </div>
    );
  };
  const Paso4 = () => {
    return (
      <div className="row stepContainer">
        <div className="col s4 ">
          <span
            className="new badge  grey lighten-1  left black-text "
            data-badge-caption=""
          >
            Paso 4
          </span>
          <span>
            <strong>&nbsp;&nbsp; Documentos Provatorios AVAL</strong>
          </span>
        </div>

        <div className="col s3 ">
          <span className="new badge blue " data-badge-caption="">
            S/D
          </span>
        </div>
        <div className="col s3 center">
          {/*  <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Solicitud
           </button> */}
        </div>
      </div>
    );
  };
  const Paso5 = () => {
    return (
      <div className="row stepContainer">
        <div className="col s4 ">
          <span
            className="new badge  grey lighten-1  left black-text "
            data-badge-caption=""
          >
            Paso 5
          </span>
          <span>
            <strong>&nbsp;&nbsp; Cronograma</strong>
          </span>
        </div>
        <div className="col s3   ">
          <span className="new badge green   " data-badge-caption="">
            Revisado - Completo
          </span>
        </div>
        <div className="col s3 center">
          <button
            type="submit"
            className="waves-effect waves-light btn  outlined"
          >
            Ver Cronograma
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container section">
        <button
          className="waves-effect waves-light btn-flat right"
          onClick={() => {
            history.goBack();
          }}
        >
          Regresar
        </button>
        <blockquote>
          <h5 className="header light teal-text">Programa de informática</h5>
          <p>
            Centro de...
            <br />
            <strong>Revisor:</strong>Antonio Ayola
          </p>
        </blockquote>
        <p className="header light  ">
          El proceso del registro esta en el
          <strong className="teal-text"> 70%</strong> <br />
          Pasos completados <strong>1 de 5</strong>
        </p>
        <br />
        <Paso1 />
        <Paso2 />
        <Paso3 />
        <Paso4 />
        <Paso5 />
      </div>
    </>
  );
};

export default DetalleRegistroS;
