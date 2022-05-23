import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import ba17 from "../../../assets/images/ba17.png";
import FilasEscuelas from "./FilasEscuelas";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";
import AgregarEscuela from "./AgregarEscuela";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  blockquote: {
    borderColor: "#ffffff" /* Just change the color value and that's it*/,
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "110%",
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
const CrudEscuelas = () => {
  const [unidades, setUnidades] = useState([]);
  const [agregarEscuela, setAgregarEscuela] = useState(false);
  const [numPag, setNumPag] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEscuelas();
  }, []);

  const reset = () => {
    setUnidades([]);
    setNumPag(0);
    setHasMore(true);
    setLoading(true);
  };

  async function getEscuelas() {
    if (numPag === 0) setLoading(true);
    try {
      const escuelas = await obtenerUnidades(numPag);
      // setUnidades(escuelas.data);
      console.log(escuelas);
      if (escuelas.data.length === 0) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setHasMore(true);
      setUnidades([...unidades, ...escuelas.data]);
      setNumPag((newPage) => newPage + 1);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  // useEffect(() => {
  //   var modales = document.querySelectorAll(".modal");
  //   M.Modal.init(modales, {});
  //   var textNeedCount = document.querySelectorAll("#input_text, #textarea1");
  //   M.CharacterCounter.init(textNeedCount);
  // }, []);

  return (
    <>
      <Modal
        open={agregarEscuela}
        fnCloseModal={() => setAgregarEscuela(false)}
      >
        <div className="modal-content">
          <AgregarEscuela
            agregarEscuela={setAgregarEscuela}
            reset={reset}
            getEscuelas={getEscuelas}
          />
        </div>
      </Modal>

      <header className="" style={{ position: "relative", height: "50vh" }}>
        <img
          style={style.headerImg}
          className="responsive-img"
          src={ba17}
          alt=""
        />
        <div className="" style={style.headerFilter}></div>
        <div className="" style={style.headerTitle}>
          <h3 className="white-text center" style={{ fontSize: "3rem" }}>
            <b>UNIDADES ACADÉMICAS CENTROS Y ESCUELAS</b>
          </h3>

          <div className="">
            <center>
              <h5 className="black-text ">
                <blockquote>
                  <b>
                    <i>
                      {" "}
                      Aquí puedes consultar, agregar, editar o eliminar
                      escuelas.
                    </i>
                  </b>
                </blockquote>
              </h5>
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
          onClick={() => setAgregarEscuela(true)}
        >
          Agregar Escuela
        </button>

        <div className="row ">
          <div className="input-field col s8 xl5 m5 l5   ">
            <input id="input_text" type="text" data-length="13" required />
            <label htmlFor="nombreCurso">Escuela</label>
          </div>

          <div className="input-field col s2   ">
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
            margin: "25px 0",
          }}
        >
          <InfiniteScroll
            dataLength={unidades.length}
            next={getEscuelas}
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
                <b>No hay mas unidades academicas registradas</b>
              </center>
            }
          >
            <table>
              <thead className="grey lighten-3 grey-text text-darken-3">
                <tr className="">
                  <th style={{ minWidth: "190px" }}>Escuela</th>
                  {/*  <th> Coordinador Academico (CA)</th>
            <th> Director</th>
            <th> Subdirector </th> */}
                  <th> Detalles</th>
                  <th>Editar</th>
                  <th style={{ maxWidth: "60px" }}>Borrar</th>
                </tr>
              </thead>

              <tbody>
                {unidades.map((escuela) => {
                  return (
                    <FilasEscuelas
                      key={escuela.id}
                      id={escuela.id}
                      escuela={escuela}
                      nombre={escuela.nombre}
                      clave={escuela.clave}
                      reset={reset}
                      getEscuelas={getEscuelas}
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

export default CrudEscuelas;
