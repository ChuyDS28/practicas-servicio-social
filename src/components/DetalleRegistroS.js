import React from "react";
import { Link, useHistory } from "react-router-dom";
import ba15 from "../assets/images/ba15.png";
const style = {
  blockquote:{
    borderColor: "#ffffff",/* Just change the color value and that's it*/
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
const DetalleRegistroS = () => {
   let history = useHistory();

   const Paso1 = () => {
    return (
      <div className="row stepContainer">
        <div className="col xl4 m4 s4 l4 ">
          <span
            className="new badge deep-purple accent-1 white-text left black-text "
            data-badge-caption=""
          >
            Paso 1
          </span>
          <span>
            <strong>&nbsp;&nbsp; Solicitud de registro</strong>
          </span>
        </div>
        <div className="col xl3 m3 s4 l3 ">
          <span className="new badge  red " data-badge-caption="" style={{overflow:"hidden"}}>
            Pendiente por revisar
          </span>
        </div>
        <div className="col xl3 m3 center">
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
            className="new badge  deep-purple accent-1 white-text  left black-text "
            data-badge-caption=""
            style={{overflow:"hidden"}}
          >
            Paso 2
          </span>
          <span>
           <strong>&nbsp; Enviar solicitud de registro firmada</strong>
          </span>
        </div>
        <div className="col xl3 s4 m3 l3  ">
          <span className="new badge  red " data-badge-caption=""  style={{overflow:"hidden"}}>
            Pendiente por revisar
          </span>
        </div>
        <div className="col xl3 m3 l3 center">
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
        <div className="col s4 xl4 m4 l4">
          <span
            className="new badge  deep-purple accent-1 white-text  left black-text "
            data-badge-caption=""
          >
            Paso 3
          </span>
          <span>
            <strong>&nbsp;&nbsp;Carta&nbsp;AVAL</strong>
          </span>
        </div>
        <div className="col xl3 s5 m3 l3">
          <span className="new badge yellow darken-4" data-badge-caption="" style={{overflow:"hidden"}}>
            Revisado con corecciones
          </span>
        </div>
        <div className="col xl3 m3 l3 center">
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
        <div className="col s5 ">
          <span
            className="new badge  deep-purple accent-1 white-text  left black-text "
            data-badge-caption=""
          >
            Paso 4
          </span>
          <span>
            <strong>&nbsp;&nbsp; Documentos probatorios AVAL</strong>
          </span>
        </div>

        <div className="col s2 ">
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
        <div className="col s4 xl3 m3 l3">
          <span
            className="new badge  deep-purple accent-1 white-text left black-text "
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
        <div className="col xl3 s7 m3 l3 center">
          <button
            type="submit"
            className="waves-effect waves-light btn outlined"
          >
            Ver Cronograma
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
    <header className="" style={{ position: "relative", height: "50vh" }}>
        <img style={style.headerImg} className="responsive-img" src={ba15} alt="" />
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
          
             <h6>Revisor: Antonio Loyola</h6>
         
            </center>
          </div>
        </div>
      </header>
      <div className="container section">
        <button
          className="waves-effect waves-light btn-flat right"
          onClick={() => {
            history.goBack();
          }}
        >
          Regresar
        </button>
      
        <p className="header light  ">
          El proceso del registro esta en el
          <strong className="teal-text"> 70%</strong> <br />
          Pasos completados <strong>1 de 5</strong>
        </p>
        <br />
        </div>
        <div className="container section  ">
      <div className="collection">
      <p className="white-text collection-item active  purple lighten-1 center">
            <b>Pasos</b>
          </p>
        <Link  className="collection-item black-text  " style={{ border: "0px" }}>
         <Paso1/>
        </Link>
        <Link  className="collection-item black-text  purple lighten-5 " style={{ border: "0px" }}>
          <Paso2/>
        </Link>
        <Link className="collection-item black-text" style={{ border: "0px" }}>
         <Paso3/>
        </Link>
        <Link  style={{ border: "0px" }} className="collection-item purple lighten-5 black-text ">
         <Paso4/>
        </Link>
        <Link  style={{ border: "0px" }} className="collection-item  black-text ">
         <Paso5/>
        </Link>
      </div>
      </div>
      
    </>
  );
};

export default DetalleRegistroS;
