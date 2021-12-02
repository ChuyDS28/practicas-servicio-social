import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba19 from "../../assets/images/ba19.png";
import parteba13 from "../../assets/images/parteba13.png";
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
    height: "100%",
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
const ListadoRegistrosGeneral = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }, []);

  const ModalHelp = () => {
    return (
      <div id="modal1" class="modal">
        <div class="modal-content  ">
          <h5>Tipos de registro</h5>
          <br />
          <span className="new badge grey darken-2 left" data-badge-caption="">
            Deprecado
          </span>
          <div className="  ">
            &nbsp; &nbsp;- Programa con mas de 2 años de antiguedad, ya no puede
            ser impartido
            <br /> <br />
          </div>
          <span className="new badge blue left" data-badge-caption="">
            Vigente
          </span>
          <div className=" ">
            &nbsp; &nbsp; - Programa vigente actualizado que puede ser impartido
            de nuevo
            <br /> <br />
          </div>
          <span
            className="new badge yellow darken-4  left"
            data-badge-caption=""
          >
            EnProceso
          </span>
          <div className="">
            &nbsp; &nbsp; - Programa en proceso que necesita terminar de ser
            aprovado
            <br /> <br />
          </div>
          <span className="new badge green left " data-badge-caption="">
            Impartiendo
          </span>
          <div className="">
            &nbsp; &nbsp; - Programa que esta siendo impartido en este momento
            <br /> <br />
          </div>
          <button
            href="#!"
            class="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <ModalHelp />
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <div
          className="col s12 m11 l10 xl8 "
          style={{
            position: "absolute",
            top: "-30px",
            height: "122%",
            left: "0px",
          }}
        >
          <img alt="" src={ba19} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>REGISTROS REVISADOS</b>
          </h1>
         
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar el historial <br />
                de todos tus registros...
              </b>
            </h6>
           
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba13}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br/>
      <div className="container section">
        <label>Mostrar Registros</label>
        <select className="browser-default" defaultValue="Todos">
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="1">Todos</option>
          <option value="2">Finalizados</option>
          <option value="3">En proceso </option>
          <option value="3">Vigentes</option>
        </select>

        <div className="collection">
          <p className="collection-item active teal lighten-1 white-text  ">
            <b>Listado de registros</b>
            <a class=" modal-trigger right white-text" href="#modal1">
              <b>Ayuda</b>
              <span className="small material-icons white-text ">help</span>
            </a>
          </p>
          <Link to="/revisor/revisarRegistro" className="collection-item black-text " style={{ border: "0px" }}>
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
                Vigente
              </span>
            <b>Curso de Informática</b>
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item green lighten-5 black-text" style={{ border: "0px" }}>
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
                Vigente
              </span>
            <b>Curso de Informática</b>
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item white black-text" style={{ border: "0px" }} >
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            <b>Curso de Informatica</b>
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item green lighten-5 black-text" style={{ border: "0px" }}>
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge blue " data-badge-caption="">
              Vigente
            </span>
            <b>Curso de Informática</b>
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item white black-text" style={{ border: "0px" }}>
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge yellow darken-4" data-badge-caption="">
              Impartiendo
            </span>
            <b>Curso de Informática</b>
          </Link>
          <Link to="/revisor/revisarRegistro" className="collection-item green lighten-5 black-text" style={{ border: "0px" }}>
            <span className="new badge green " data-badge-caption="">
              Revisado
            </span>
            <span className="new badge yellow darken-4" data-badge-caption="">
              Impartiendo
            </span>
            <b>Curso de Informática</b>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListadoRegistrosGeneral;
