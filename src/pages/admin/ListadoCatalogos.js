import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba16 from "../../assets/images/ba16.png";
import parteba12 from "../../assets/images/parteba12.png";
const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
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
  fon7: {
    height: "91%",
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
    width: "85px",
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
    height: "105%",
    width: "60%",
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
  tit: {
    left: "0px",
    position: "absolute",
  },
};
const ListadoCatalogos = () => {
  return (
    <>
    <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-50px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba16} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>CATÁLOGOS</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
             Selecciona un catálogo
              </b>
            </h6>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba12}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
    <div className="container section">
    
      <div className="collection">
        <p className="collection-item active green accent-2 black-text center"><b>Listado de catálogos</b></p>
        <Link to="/admin/crudInstructores" className="collection-item center">
          <b>Instructores</b>
        </Link>
        <Link to="/admin/crudEscuelas" className="collection-item center">
          <b>Escuelas</b>
        </Link>
      </div>
    </div>
  </>
  );
};

export default ListadoCatalogos;
