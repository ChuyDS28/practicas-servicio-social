import React from "react";
import { Link, useHistory } from "react-router-dom";
import ba11 from "../../assets/images/ba11.png";
import parteba8 from "../../assets/images/parteba8.png"
import "./../subdirector/ListadoInstructores/ListadoInstructores.css";
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
    height: "110%",
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
const DirectorListadoGeneral = () => {
  let history = useHistory();

  return (
    <>
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
            src={ba11}
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
              Aquí puedes consultar los registros <br/> de programas
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m6 l6 xl5 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba8}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br/>
      <div className="container  ">

        <table className="striped responsive-table ">
          <thead className="deep-orange lighten-1">
            <tr className="deep-orange lighten-1">
              <th className="deep-orange lighten-1 white-text">Programa</th>
              <th className="deep-orange lighten-1 white-text">Status</th>
              <th className="deep-orange lighten-1  white-text">Ver</th>
            </tr>
          </thead>

          <tbody>
            <tr
              className="trPointer orange lighten-5"
              onClick={() => {
                //  history.push("/director/DetallesRegistro");
              }}
            >
              <td><b>Solicitud Curso Informática </b></td>
              <td>
                <span className="new badge red  " data-badge-caption="">
                  Pendiente - Asignar Revisor
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn orange"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer white">
              <td><b>Solicitud Curso Informática </b></td>
              <td>
                <span className="new badge red  " data-badge-caption="">
                  Pendiente - Asignar Revisor
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn orange"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer orange lighten-5">
              <td><b>Solicitud Curso Informática </b></td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn orange"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer white">
              <td><b>Solicitud Curso Informática </b></td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
                <span
                  className="new badge yellow darken-4"
                  data-badge-caption=""
                >
                  En proceso
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn orange"
                >
                  Ver
                </Link>
              </td>
            </tr>
            <tr className="trPointer orange lighten-5">
              <td><b>Solicitud Curso Informática </b></td>
              <td>
                <span className="new badge green  " data-badge-caption="">
                  Asignado
                </span>
              </td>
              <td>
                <Link
                  to="/director/DetallesRegistro"
                  className="waves-effect waves-light btn orange"
                >
                  Ver
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DirectorListadoGeneral;
