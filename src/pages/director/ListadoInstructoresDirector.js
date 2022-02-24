import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba12 from "../../assets/images/ba12.png";
import parteba9 from"../../assets/images/parteba9.png";
import { obtenerInstructores } from "../../api/services/instructores.js";
import FilasInstructoresDirector from "./FilasInstructoresDirector";

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
const ListadoInstructoresDirector = () => {
  const[instructores, setInstructores] = useState([]);

  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  useEffect(() => {
    getInstructores();
  }, []);

  console.log(instructores);
  async function getInstructores() {
    try {
      const dataU = await obtenerInstructores(0);
      setInstructores(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <>
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
          <img alt="" src={ba12} className="responsive-img" style={style.fon} />
        </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">
            LISTADO DE <b>INSTRUCTORES</b>
          </h1>
          <blockquote>
            <h6 className="subtitulo black-text ">
              <b>
                Aquí puedes consultar y registrar <br />
                instructores
              </b>
            </h6>
            <p className="black-text ">
              Solo podras actualizar los vinculados a tu centro
            </p>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={parteba9}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <div className="container  ">
        <Link
          to="/director/menu"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>

      
        <div className="row ">
          <div className="input-field col s4  ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">RFC con Homoclave</label>
          </div>

          <div className="input-field col s2">
          <button
                type="submit"
                className="waves-effect waves-light btn outlined teal-text text-accent-4 show-on-smal "
                style={{ borderColor: "#00bfa5", borderWidth: "2px" }}
              >
                Buscar
                <i className="material-icons right">search</i>
              </button>
          </div>
        </div>
        
        <table className="striped responsive-table ">
          <thead className="amber darken-4">
            <tr className="amber darken-4">
              <th className="amber darken-4 white-text">Nombre</th>
              <th className="amber darken-4 white-text"> RFC</th>
              <th className="amber darken-4 white-text"> CV</th> 
              <th className="amber darken-4 white-text"> Doc. Probatorios </th>
              {/* <th className="amber darken-4 white-text"> Status</th> */}
            </tr>
          </thead>

          <tbody>
          {instructores.map((instructor) => (                
                  <FilasInstructoresDirector
                    nombre={instructor.nombreCompleto}
                    rfc={instructor.rfc}
                    // area={Area}
                    // unidad={instructor.unidadAcademica.nombre}
                    id = {instructor.id}
                  />                
          ))};
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListadoInstructoresDirector;
