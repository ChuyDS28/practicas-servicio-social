import React from "react";
import { Link } from "react-router-dom";
import parteba from "../../assets/images/parteba.png";
import sub from "../../assets/images/sub.png";
import ba2 from "../../assets/images/ba2.png";
import Background from "../../assets/images/Background.png";
import rec from "../../assets/images/rec.png";
import Footer from "../Footer";
const style = {
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    transform: " translate(-50% , -50%)",
  },
  fon: {
    height: "100%",
    width: "100%",
    top: "0",
    position: "relative",
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
    right: "42px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "92%",
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
};

const MenuUser = () => {
  return (
    <div>
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <img alt="" src={Background} style={style.fon} />
        <img alt="" src={rec} style={style.fon2} />
        <div className="col offset-s2 m7 l6 xl5" style={style.headerTitle}>
          <h1>
            <b>Subdirector Académico</b>
          </h1>
          <blockquote>
            <h4 className="pink-text text-lighten-1 ">
              <b>Menú principal</b>
            </h4>
          </blockquote>
        </div>

        <div className="col m6 l6 xl7 hide-on-small-only" style={style.div}>
          <img alt="" src={parteba} style={style.imag2} />
          <img alt="" src={ba2} style={style.imag3} />
          <img
            alt=""
            src={sub}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>

      <main className="row container section">
        <div className="col s12 m6 l6 xl6">
          <div className="MenuActionContainer  center red lighten-5">
            <i className="material-icons  white-text medium circle  red accent-2   ">
              view_list
            </i>
            <h5>
              <b>Listado de registros</b>
            </h5>
            <p className="textHeight">
              Aquí puedes consultar el historial de todos tus registros, agregar
              nuevos y darle seguimiento...
            </p>

            <Link
              to="/subdirector/programas"
              className="waves-effect waves-light btn red accent-2 "
              style={style.botones}
            >
              Ver registros
              <i className="material-icons right">article</i>
            </Link>
          </div>
        </div>
        <div className="col s12 m6 l6 xl6">
          <div className=" MenuActionContainer center red lighten-5">
            <i className="material-icons  white-text medium circle red accent-2 ">
              list
            </i>
            <h5>
              <b>Listado general</b>
            </h5>
            <p className="  textHeight">
              Aquí puedes consultar la <br />
              información básica de todos los programas...
            </p>
            <Link
              to="/subdirector/menu"
              className="waves-effect waves-light btn red accent-2    "
              style={style.botones}
            >
              Ver registros
              <i className="material-icons right">view_list</i>
            </Link>
          </div>
        </div>
        <div className="col s12 m6 l6 xl6">
          <div className=" MenuActionContainer center red lighten-5">
            <i className="material-icons  white-text medium circle red accent-2  ">
              signal_cellular_alt
            </i>
            <h5>
              <b>Indicadores</b>
            </h5>
            <p className="textHeight">Aquí puedes ver estadísticas de...</p>
            <Link
              to="/subdirector/menu"
              className="waves-effect waves-light btn red accent-2  "
              style={style.botones}
            >
              Ver indicadores
              <i className="material-icons right">east</i>
            </Link>
          </div>
        </div>
        <div className="col s12 m6 l6 xl6">
          <div className=" MenuActionContainer center red lighten-5">
            <i className="material-icons  white-text medium circle red accent-2  ">
              local_library
            </i>
            <h5>
              <b>Instructores</b>
            </h5>
            <p className="textHeight">Aquí puedes ver estadísticas de...</p>
            <Link
              to="/subdirector/ListadoInstructores"
              className="waves-effect waves-light btn red accent-2  "
              style={style.botones}
            >
              Ver Listado
              <i className="material-icons right">view_list</i>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuUser;
