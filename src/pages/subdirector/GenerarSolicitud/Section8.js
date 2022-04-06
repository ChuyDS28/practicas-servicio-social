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




const Section8 = (props) => {
    return (
      <>
        <div className="col s12">
          <blockquote>
            <p>Sección 8 • Datos de firma</p>
          </blockquote>
          <p className="  light ">
            Datos de quien firma y autoriza la solicitud.
          </p>
          <div className="  newGroupContainer teal lighten-5 ">
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Esta sección se llena en automático al seleccionar el centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del Subdirector</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">
            Correo electrónico del Subdirector
          </label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del Director</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Correo electrónico del Director </label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => props.regresar("section7")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            type="submit"
            className="waves-effect waves-light btn   "
            onClick={() => props.seguir("section9")}
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  export default Section8;