import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ba12 from "../../assets/images/ba12.png";
import parteba9 from "../../assets/images/parteba9.png";
import { obtenerInstructores } from "../../api/services/instructores.js";
import FilasInstructoresDirector from "./FilasInstructoresDirector";
import InfiniteScroll from "react-infinite-scroll-component";

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
  const [instructores, setInstructores] = useState([]);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  // useEffect(() => {
  //   getInstructores();
  // }, []);

  async function getInstructores() {
    if (numPag === 0) setLoading(true);
    try {
      const dataU = await obtenerInstructores(numPag);
      // setInstructores(dataU.data);
      console.log(dataU);
      if (dataU.data.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setHasMore(true);
      setInstructores([...instructores, ...dataU.data]);
      setNumPag((newPage) => newPage + 1);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
    if (numPag === 0) setLoading(false);
  }

  function capitalize(word) {
    return word.length > 0
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word;
  }

  function capitalizeName(name) {
    try {
      const words = name.split(" ");
      const capitalizeArray = words.map((str) => capitalize(str));
      return capitalizeArray.join(" ");
    } catch (error) {
      return name;
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
      <div className="bigContainer">
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

        <div
          style={{
            border: "1px solid #d3d3d3",
            m: 3,
            maxHeight: "100%",
            margin: "25px",
          }}
        >
          <InfiniteScroll
            dataLength={instructores.length}
            next={getInstructores}
            hasMore={hasMore}
            style={{ overflow: "-moz-hidden-unscrollable" }}
            loader={
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            }
            endMessage={
              <center>
                <b>No hay mas instructores registrados</b>
              </center>
            }
          >
            <table
            // className="striped responsive-table "
            >
              <thead className="grey lighten-3   grey-text text-darken-3">
                <tr className="">
                  <th style={{ minWidth: "190px" }}>Nombre</th>
                  <th> RFC</th>
                  <th> Area</th>
                  <th> CV</th>
                  <th style={{ maxWidth: "60px" }}> Doc. Probatorios </th>
                  {/* <th className="amber darken-4 white-text"> Status</th> */}
                </tr>
              </thead>

              <tbody>
                {instructores.map((instructor) => {
                  let Area;
                  Area = capitalizeName(instructor.area.replace(/_/g, " "));
                  return (
                    <FilasInstructoresDirector
                      key={instructor.id}
                      nombre={instructor.nombreCompleto}
                      rfc={instructor.rfc}
                      area={Area}
                      id={instructor.id}
                    />
                  );
                })}
              </tbody>
            </table>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
export default ListadoInstructoresDirector;
