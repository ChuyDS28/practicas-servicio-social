/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ba15 from "../assets/images/ba15.png";
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
const DetalleRegistroS = () => {
  let navigate = useNavigate();

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
          <span
            className="new badge  red "
            data-badge-caption=""
            style={{ overflow: "hidden" }}
          >
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
            style={{ overflow: "hidden" }}
          >
            Paso 2
          </span>
          <span>
            <strong>&nbsp; Enviar solicitud de registro firmada</strong>
          </span>
        </div>
        <div className="col xl3 s4 m3 l3  ">
          <span
            className="new badge  red "
            data-badge-caption=""
            style={{ overflow: "hidden" }}
          >
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
          <span
            className="new badge yellow darken-4"
            data-badge-caption=""
            style={{ overflow: "hidden" }}
          >
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

  const Step = ({ number, title, status, btn }) => {
    const badges = {
      1: {
        title: "S/D",
        color: "blue",
      },
      2: {
        title: "Pendiente por revisar",
        color: "red",
      },
      3: {
        title: "Revisado con corecciones",
        color: "yellow darken-4",
      },
      4: {
        title: "Revisado - Completo",
        color: "green",
      },
    };
    return (
      <tr>
        <td>
          <span
            className="new badge teal   white-text   black-text "
            data-badge-caption=""
          >
            Paso {number}
          </span>
        </td>
        <td>
          <span>
            <strong>&nbsp;&nbsp;{title}</strong>
          </span>
        </td>
        <td>
          <span
            className={`new badge ${badges[status].color}`}
            data-badge-caption=""
            style={{ overflow: "hidden" }}
          >
            {badges[status].title}
          </span>
        </td>
        <td>
          {status !== "1" && (
            <button
              type="submit"
              className="waves-effect waves-light btn  outlined"
            >
              {btn}
            </button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          className="responsive-img"
          src={ba15}
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

              <h6>Revisor: Antonio Loyola</h6>
            </center>
          </div>
        </div>
      </header>
      <div className="container section">
        <button
          className="waves-effect waves-light btn-flat right"
          onClick={() => {
            navigate(-1);
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
      <div className="container">
        <div
          style={{
            border: "1px solid #d3d3d3",
            overflow: "auto",
            margin: "25px 0",
          }}
        >
          <table
          /* className="striped  responsive-table " */
          >
            <thead className="grey lighten-3   grey-text text-darken-3">
              <tr>
                <th className=" " colspan="2">
                  Pasos
                </th>
                <th className="" colspan="2">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <Step
                number="1"
                title="Solicitud de registro"
                status="2"
                btn="Ver solicitud"
              />
              <Step
                number="2"
                title="Enviar solicitud de registro firmada"
                status="2"
                btn="Ver solicitud"
              />
              <Step
                number="3"
                title="Carta AVAL"
                status="3"
                btn="Ver solicitud"
              />
              <Step
                number="4"
                title="Documentos probatorios AVAL"
                status="1"
                btn="Ver Carta AVAL"
              />
              <Step
                number="5"
                title="Cronograma"
                status="4"
                btn="Ver Cronograma"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="container section  ">
        <div className="collection">
          <p className="white-text collection-item active  purple lighten-1 center">
            <b>Pasos</b>
          </p>
          <a className="collection-item black-text  " style={{ border: "0px" }}>
            <Paso1 />
          </a>
          <a
            className="collection-item black-text  purple lighten-5 "
            style={{ border: "0px" }}
          >
            <Paso2 />
          </a>
          <a className="collection-item black-text" style={{ border: "0px" }}>
            <Paso3 />
          </a>
          <a
            style={{ border: "0px" }}
            className="collection-item purple lighten-5 black-text "
          >
            <Paso4 />
          </a>
          <a style={{ border: "0px" }} className="collection-item  black-text ">
            <Paso5 />
          </a>
        </div>
      </div> */}
    </>
  );
};

export default DetalleRegistroS;
