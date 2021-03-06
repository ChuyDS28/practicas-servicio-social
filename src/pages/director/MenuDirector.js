import React from 'react'
import { Link } from "react-router-dom";
import sub from "../../assets/images/sub.png";
import parteba2 from "../../assets/images/parteba2.png";
import ba from "../../assets/images/ba.png";
import Background2 from "../../assets/images/Background2.png";
import rec2 from "../../assets/images/rec2.png";
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
    position:"relative",
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
    right:"60px",
    top:"20%",
    height:"80%",
    width:"92%"
    
  },
  imag3: {
    position: "absolute",
    right:"42px",
    top:"0px",
    height:"100%",
    width:"92%"
    
  },
  imag4: {
    position: "absolute",
    right:"0px",
    top:"0px",
    height:"100%",
    width:"92%"
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

const MenuDirector = () => {
  return (
    <div>
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <img alt="" src={Background2}  style={style.fon}/>
        <img alt="" src={rec2}  style={style.fon2} />
        <div className="col offset-s2 m7 l6 xl5" style={style.headerTitle}>
          <h1><b>Director Académico</b></h1>
          <blockquote>
            <h4 className="purple-text ">
              <b>Menú principal</b>
            </h4>
          </blockquote>
        </div>

        <div className="col m6 l6 xl7 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba2}
            style={style.imag2}
          />
          <img
            alt=""
            src={ba}
            style={style.imag3}
          />
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
          <div className="MenuActionContainer  center purple lighten-5">
            <i class="material-icons  white-text medium circle deep-purple lighten-3">
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
              to="/director/listadoRegistrosGeneral"
              className="waves-effect waves-light btn deep-purple lighten-3 "
              style={style.botones}
            >
              Ver registros
              <i className="material-icons right">article</i>
            </Link>
          </div>
        </div>
        <div className="col s12 m6 l6 xl6">
          <div className=" MenuActionContainer center purple lighten-5">
            <i class="material-icons  white-text medium circle deep-purple lighten-3  ">
              local_library
            </i>
            <h5>
              <b>Instructores</b>
            </h5>
            <p className="textHeight">Aquí puedes consultar a todos los instructores <br/> así como registrarlos...</p>
            <Link
              to="/director/listadoInstructores"
              className="waves-effect waves-light btn deep-purple lighten-3 "
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

export default MenuDirector
