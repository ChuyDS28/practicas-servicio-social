import React, { useEffect, useRef } from "react";
const style = {
    temaContainer: {
      marginBottom: "10px",
      borderRadius: "5px",
    },
    infoContainer: {
      padding: "25px",
      borderRadius: "5px",
    },
    headerTitle: {
      position: "absolute",
      height: "100%",
      top: "-5%",
      /* top: "50%",
      left: "50%",
      
      transform: " translate(-50% , -50%)", */
    },
    fon: {
      height: "113%",
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
      top: "20%",
      height: "80%",
      width: "92%",
    },
    imag3: {
      position: "absolute",
      left: "5px",
      top: "40px",
      height: "60%",
      width: "30%",
    },
    imag4: {
      position: "absolute",
      right: "10px",
      top: "70px",
      height: "100%",
      width: "92%",
    },
    div: {
      height: "100%",
      position: "absolute",
      top: "0%",
      right: "0%",
    },
    cont: {},
  };

const Section7 = (props) => {
    return (
      <>
        <div className=" col s12">
          <blockquote>
            <p>Sección 7 • Aval</p>
          </blockquote>
          <p className="  light ">
            En esta sección deberá de adjuntar el Aval en formato PDF
            correspondiente al programa que se desea registrar.
          </p>
        </div>
        <div className="file-field input-field col s12">
          <div className="btn">
            <span>Cargar archivo</span>
            <input type="file" accept="application/pdf" required />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Aval del programa"
            />
          </div>
        </div>
        <div className="file-field input-field col s12">
          <p className="  light ">
            Documentos probatorios de Aval (De quien lo firma?)
          </p>
          <div className="btn">
            <span>Cargar archivo</span>
            <input type="file" accept="application/pdf" required />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Documentos Probatorios de Aval"
            />
          </div>
        </div>
        <div className="input-field col s9">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del programa</label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => props.regresar("section6")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => props.seguir("section8")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  export default Section7;