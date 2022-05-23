import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import RegistrarInstructor from "../../../components/RegistrarInstructor";
import {
  obtenerInstructor,
  obtenerInstructores,
} from "../../../api/services/instructores";
import { agregarInstructor } from "../../../api/services/subdirector/programas";
import Modal from "../../../components/Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import { instructoresDelPrograma } from "../../../api/services/subdirector/programas";
const style = {
  temaContainer: {
    marginBottom: "10px",
    borderRadius: "5px",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    height: "100%",
    top: "-5%",
    /* top: "50%",
      left: "50%",
      
      transform: " translate(-50% , -50%)", */
  },
  fon: {
    height: "113%",
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
    top: "20%",
    height: "80%",
    width: "92%",
  },
  imag3: {
    position: "absolute",
    left: "5px",
    top: "40px",
    height: "60%",
    width: "30%",
  },
  imag4: {
    position: "absolute",
    right: "10px",
    top: "70px",
    height: "100%",
    width: "92%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  cont: {},
};

const Section5 = (props) => {
  const [modalSeleccionarInstructor, setModalSeleccionarInstructor] =
    useState(false);
  const [nomInstructor, setnomInstructor] = useState();
  const [modalAgregarInstructor, setModalAgregarInstructor] = useState(false);
  const [rfc, setRFC] = useState();
  const [instructor, setInstructor] = useState({
    nombre: "",
    id: "",
  });

  async function obtenerInstructor() {
    try {
      const res = await instructoresDelPrograma(props.solicitudId);
      console.log(res);
      setInstructor({
        nombre: res.data[0].instructor.nombreCompleto,
        id: res.data[0].instructor.id,
      });
      setRFC(res.data[0].instructor.rfc);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  useEffect(() => {
    obtenerInstructor();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(instructor);
    if (instructor === "") {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    }
    try {
      const response = await agregarInstructor(
        props.solicitudId,
        instructor.id
      );
      console.log(response);

      M.toast({
        html: "Datos especificos guardados",
        classes: "green",
      });
      props.seguir("finalizar");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };

  const ModalAgregarInstructor = () => {
    return (
      <div className="modal-content  ">
        <RegistrarInstructor ModalRegistro={setModalAgregarInstructor} />
      </div>
    );
  };
  const ModalSeleccionarInstructor = () => {
    const [instructores, setInstructores] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [numPag, setNumPag] = useState(0);
    const [loading, setLoading] = useState(false);

    function seleccionar() {
      setnomInstructor(instructor.nombreCompleto);
      setModalSeleccionarInstructor(false);
    }

    useEffect(() => {
      getInstructores();
    }, []);

    async function getInstructores() {
      if (numPag === 0) setLoading(true);
      try {
        const dataU = await obtenerInstructores(0);
        setInstructores(dataU.data);
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
    }

    function callBack() {}

    return (
      <div className="modal-content">
        <div>
          <h5>Buscar instructor</h5>
          <p className="  light ">Selecciona tu Instructor</p>
          {nomInstructor}
          <div className="row ">
            <div className="input-field col s10">
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
            <div className="collection">
              <p className="collection-item active  ">
                Listado de Instructores
              </p>
              {instructores.map((instructor, index) => (
                <center>
                  <a
                    className="collection-item"
                    // className="waves-effect waves-dark btn"
                    onClick={() => {
                      setInstructor({
                        nombre: instructor.nombreCompleto,
                        id: instructor.id,
                      });
                      setModalSeleccionarInstructor(false);
                    }}
                    key={index}
                    value={instructor.id}
                  >
                    {instructor.nombreCompleto}
                    <span
                      className="new badge grey darken-2"
                      data-badge-caption=""
                    >
                      VECJ880326 XXX
                    </span>
                  </a>
                </center>
              ))}
              {/* <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a> */}
            </div>
          </InfiniteScroll>
          <br />

          {/*   {instructores.map((instructor, index) => (
            <option key={index} value={instructor.id}>
              {instructor.nombre}
            </option>
          ))} */}

          <button
            className="waves-effect waves-green btn-flat right"
            onclick={() => {
              setnomInstructor("Agua");
              console.log("hola");
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };
  return (
    <>
      <Modal
        open={modalSeleccionarInstructor}
        fnCloseModal={() => setModalSeleccionarInstructor(false)}
      >
        <ModalSeleccionarInstructor />
      </Modal>
      <Modal
        open={modalAgregarInstructor}
        fnCloseModal={() => setModalAgregarInstructor(false)}
      >
        <div className="modal-content">
          <RegistrarInstructor
            ModalRegistro={setModalAgregarInstructor}
            campo="Hola"
            getInstructores={() => null}
          />
        </div>
      </Modal>
      {/* <Modal
        open={modalAgregarInstructor}
        fnCloseModal={() => setModalAgregarInstructor(false)}
      >
        <ModalAgregarInstructor />
      </Modal> */}
      <div className=" col s12">
        <blockquote>
          <p>Sección 5 • Datos del instructor</p>
        </blockquote>
      </div>

      {/*  <div className="collection">
        {instructores.map((instructor, index) => (
            <a href="" className="collection-item green" key={index} value={instructor.id}>
              {instructor.nombreCompleto}
           
            </a>
          ))} 
          </div> */}
      <div class="input-field col s12 m9 xl9    ">
        <p>
          <strong className="grey-text text-darken-3">
            Instructor: {instructor.nombre}
          </strong>
        </p>
      </div>

      <div className="input-field col s3">
        {/*  <a
            className="modal-trigger waves-effect waves-light btn outlined center"
            href="#modal2"
          >
            Seleccionar Instructor
          </a> */}
        <button
          className="waves-effect waves-light btn blue  darken-2"
          onClick={() => setModalSeleccionarInstructor(true)}
        >
          Seleccionar Instructor
        </button>
      </div>
      {/*  <div className="  col s12">
          <label>Selecciona un instructor:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Instructor1</option>
            <option value="2">Instructor1 Superior</option>
            <option value="2">Instructor1</option>
            <option value="2">Instructor12</option>
          </select>
        </div> */}
      <div className="col s12 teal lighten-5 " style={style.infoContainer}>
        <span className="small material-icons blue-text ">error</span>
        <span className="new badge blue darken-2" data-badge-caption="">
          Nota
        </span>
        <p>
          Verificar que la documentación y CV del instructor esé actualizada, en
          caso contrario puede actualizarla desde:
          <br /> Menu Principal --{">"} Instructores --{">"} Busca tu Instructor
          --{">"} Actualizar
        </p>
      </div>
      <div className=" col s12">
        <br /> En caso que no encuentres al intructor regístralo.&nbsp;&nbsp;
        <button
          className="waves-effect waves-light btn  blue-grey darken-3"
          onClick={() => setModalAgregarInstructor(true)}
        >
          Registrar un Instructor
        </button>
        <br />
        <br />
        <div className="divider"></div>
        <br />
      </div>

      <div className="col s6 center">
        <button
          onClick={() => props.regresar("section4")}
          className="waves-effect waves-light btn "
        >
          Regresar
        </button>
      </div>
      <div className="col s6 center">
        <button
          onClick={handleSubmit}
          className="waves-effect waves-light btn   "
        >
          Guardar y Continuar
        </button>
      </div>
    </>
  );
};
export default Section5;
