import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../components/RegistrarInstructor";
import ba18 from "../../assets/images/ba18.png";
import { obtenerInstructores } from "../../api/services/instructores";
import FilasInstructoresAdmin from "./FilasInstructoresAdmin";
import Modal from "../../components/Modal.js";
import InfiniteScroll from "react-infinite-scroll-component";
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
const CRUDInstructores = () => {
  const [instructores, setInstructores] = useState([]);
  const [modalAgregar, setModalAgregar] = useState(false);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <Modal open={modalAgregar} fnCloseModal={() => setModalAgregar(false)}>
        <div className="modal-content">
          <RegistrarInstructor
            getInstructores={getInstructores}
            ModalRegistro={setModalAgregar}
          />
        </div>
      </Modal>

      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          className="responsive-img"
          src={ba18}
          alt=""
        />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h2 className="white-text center" style={{ fontSize: "3rem" }}>
            <b>INSTRUCTORES</b>
          </h2>

          <div className="">
            <center>
              <blockquote>
                <h5 className="black-text ">
                  <b>
                    <i>
                      {" "}
                      Aquí puedes consultar, agregar, editar o eliminar
                      instructores.
                    </i>
                  </b>
                </h5>
              </blockquote>
            </center>
          </div>
        </div>
      </header>
      <br />
      <br />
      <div className="bigContainer">
        <Link
          to="/admin/listadoCatalogos"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>
        <button
          className="modal-trigger waves-effect waves-light btn right"
          onClick={() => setModalAgregar(true)}
        >
          Agregar nuevo Instructor
        </button>

        <div className="row ">
          <div className="input-field col s8 m4 l4 xl4  ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">RFC con Homoclave</label>
          </div>

          <div className="input-field col s2">
            <button
              type="submit"
              className="waves-effect waves-light btn outlined  "
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
            <table>
              <thead className="grey lighten-3 grey-text text-darken-3">
                <tr>
                  <th style={{ minWidth: "190px" }}>Nombre</th>
                  <th> RFC</th>
                  <th> Area</th>
                  <th> CV</th> <th> Doc. Probatorios </th>
                  <th>Editar</th>
                  <th style={{ maxWidth: "60px" }}>Borrar</th>
                </tr>
              </thead>
              <tbody>
                {instructores.map((instructor) => {
                  let Area;
                  Area = capitalizeName(instructor.area.replace(/_/g, " "));
                  return (
                    <FilasInstructoresAdmin
                      key={instructor.id}
                      getInstructores={getInstructores}
                      nombre={instructor.nombreCompleto}
                      rfc={instructor.rfc}
                      area={Area}
                      unidad={instructor.unidadAcademica.nombre}
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

export default CRUDInstructores;
