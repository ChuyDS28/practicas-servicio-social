import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../../../components/Modal";
import ba8 from "../../../assets/images/ba8.png";
import StepContainer from "./StepContainer";
import { obtenerPrograma } from "../../../api/services/subdirector/programas";
import { obtenerSolicitud } from "../../../api/services/subdirector/solicitudRegistro";
import Paso1 from "./Paso1";
import Paso2 from "./Paso2";
import Paso3 from "./Paso3";
import Paso4 from "./Paso4";
import Paso5 from "./Paso5";
import { obtenerSolicitudes } from "../../../api/services/subdirector/solicitudRegistro";
import { agregarSolicitudFirmada } from "../../../api/services/subdirector/programas";

const style = {
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
const RegistroDetalle = () => {
  let navigate = useNavigate();
  let params = useParams();

  const [programa, setPrograma] = useState({});
  const [solicitud, setSolicitud] = useState({});
  const [pasoUnoEstatus, setPasoUnoEstatus] = useState(0);
  const [modalSimbologia, setModalSimbologia] = useState(false);
  const [paso2Estatus, setPaso2Estatus] = useState(0);
  const [SolicitudFirmada, setSolicitudFirmada] = useState();

  useEffect(() => {
    getPrograma();
  }, []);

  const estatusConfig = {
    CAPTURANDO: 0,
    EN_REVISION: 1,
    RECHAZADO: 2,
    APROBADO: 3,
    ACEPTADO: 3,
  };

  useEffect(() => {
    getSolicitudes();
  }, []);

  async function getSolicitudes() {
    try {
      const res = await obtenerSolicitudes(params.programaId);
      console.log(res);
      console.log(res.data.documentosDeSolicitud[0]);
      setPasoUnoEstatus(estatusConfig[res.data.estatus]);
      setPaso2Estatus(estatusConfig[res.data.documentosDeSolicitud[0].estatus]);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  async function getPrograma() {
    try {
      const dataU = await obtenerPrograma(params.programaId);
      console.log(dataU);
      const dataS = await obtenerSolicitud(dataU.data.programa.id);
      console.log(dataS);
      setPrograma(dataU.data);
      setSolicitud(dataS.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  // async function subirSolicitudFirmada() {
  //   // event.preventDefault();
  //   if (SolicitudFirmada == null) {
  //     M.toast({
  //       html: "Agrega el documento requerido",
  //       classes: "red",
  //     });
  //     return;
  //   }
  //   if (paso2Estatus != 0) {
  //     M.toast({
  //       html: "No es posible subir el documento",
  //       classes: "red",
  //     });
  //     return;
  //   }
  //   try {
  //     const res2 = await agregarSolicitudFirmada(
  //       params.programaId,
  //       SolicitudFirmada
  //     );
  //     console.log(res2);
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.response);
  //   }
  // }

  const ModalHelp = () => {
    return (
      <div class="modal-content ">
        <div className=" red accent-1 white-text section center">
          <h5 className="">Simbología de colores</h5>
        </div>
        <br />
        <span className="new badge green lighten-3 left" data-badge-caption="">
          Verde
        </span>
        <div className="  ">
          &nbsp; &nbsp;- Formato validado de forma satisfactoria
          <br /> <br />
        </div>
        <span className="new badge  blue lighten-3 left" data-badge-caption="">
          Azul
        </span>
        <div className=" ">
          &nbsp; &nbsp; - Falta por subir formato
          <br /> <br />
        </div>
        <span className="new badge red lighten-3  left" data-badge-caption="">
          Rojo
        </span>
        <div className="">
          &nbsp; &nbsp; - Documentación rechazada
          <br /> <br />
        </div>
        <span className="new badge amber lighten-3 left " data-badge-caption="">
          Amarillo
        </span>
        <div className="">
          &nbsp; &nbsp; - Pendiente por revisar
          <button
            href="#!"
            className="modal-close waves-effect waves-green white-text red accent-1 btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  };

  const Paso6 = () => {
    return (
      <div className="row grey lighten-2" style={style.buttonContainer}>
        <div className="col s12">
          <span style={style.orderCircle}>5</span>
          <span>
            <strong>&nbsp;&nbsp;Instructivo</strong>
          </span>
          <span className="small material-icons blue-text ">error</span>

          <button type="submit" className="waves-effect waves-light btn right ">
            Subir instructivo
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        </div>
        <div
          className="col s12  blue lighten-3"
          style={style.comentariosContainer}
        >
          <span className="new badge blue " data-badge-caption="">
            Comentarios
          </span>
          <p>
            En este paso debes subir tu archivo instructivo en formato pdf ...
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Modal
        open={modalSimbologia}
        fnCloseModal={() => setModalSimbologia(false)}
      >
        <div className="modal-content">
          <ModalHelp />
        </div>
      </Modal>

      {Object.entries(programa).length > 0 && (
        <header className="" style={{ position: "relative", height: "50vh" }}>
          <img style={style.headerImg} src={ba8} alt="" />
          <div className="" style={style.headerFilter}></div>
          <div className="" style={style.headerTitle}>
            <h3 className="black-text center" style={{ fontSize: "4rem" }}>
              {programa.programa.nombre}
            </h3>
            <div className="">
              <center>
                <blockquote>
                  <h5 className="black-text ">
                    <i>
                      Sigue los pasos a continuación para terminar el registro
                      del programa
                    </i>
                  </h5>
                </blockquote>
              </center>
            </div>
          </div>
        </header>
      )}

      <div className="row container section">
        <Link
          to="/subdirector/programas"
          className="waves-effect waves-light btn-flat right"
        >
          Regresar
        </Link>

        <p className="header light col s10 ">
          El proceso del registro esta en el
          <strong className="teal-text"> 70%</strong> <br />
          Pasos completados <strong>1 de 5</strong>
        </p>

        <div className="col s12 " style={{ margin: "15px 0" }}>
          <Link
            to="/subdirector/programas/3/grupos"
            className="waves-effect waves-light left btn "
          >
            Grupos
          </Link>
          <button
            className=" modal-trigger right  btn center blue darken-2"
            onClick={() => setModalSimbologia(true)}
          >
            Simbología&nbsp;
          </button>
          {/* <a
            className=" modal-trigger right  btn center outlined"
            href="#modal1"
          >
            Simbología&nbsp;
          </a> */}
        </div>
        {/* <a className=" modal-trigger right  btn center outlined" href="#modal1">
          Sighsmbología&nbsp;
        </a> */}
        <div className="col s12 " style={{ padding: "0" }}>
          <Paso1 
          estatus={pasoUnoEstatus}/>
          {/* <StepContainer
            step="1"
            title="Solicitud de registro"
            status={pasoUnoEstatus}
            callback={() =>
              Object.entries(solicitud).length > 0 &&
              navigate(
                `/subdirector/programas/${params.programaId}/generarSolicitud/${solicitud?.id}`
              )
            }
            actions={
              <button
                onClick={() =>
                  Object.entries(solicitud).length > 0 &&
                  navigate(
                    `/subdirector/programas/${params.programaId}/generarSolicitud/${solicitud?.id}`
                  )
                }
                className="waves-effect waves-light btn right blue-grey darken-3"
              >
                {"status" === 3 ? "Descargar " : "Subir "}{" "}
                {"Solicitud de registro"}
                <i className="material-icons right">picture_as_pdf</i>
              </button>
            }
            btnTitle="Solicitud de registro"
            observaciones=""
          /> */}

          {/* <div className="file-field input-field col s12">
            <div className="btn">
              <span>Cargar Archivo</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  setSolicitudFirmada(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path"
                type="text"
                placeholder="Solicitud Firmada"
              />
            </div>
          </div> */}

          {/* <div className="input-field col s12">
          <input
            name="nombre"
            value={SolicitudFirmada}
            id="nombreCurso"
            type="text"
            onChange={(e) => {
              setSolicitudFirmada(e.target.files[0]);
            }}
            required
          />
          <label htmlFor="nombreCurso">Solicitud Firmada</label>
          </div> */}

          {/* <StepContainer
            step="2"
            actions={
              <div>
                <button> Paso2 </button>
              </div>
            }
            title="Enviar solicitud de registro firmada"
            status={paso2Estatus}
            callback={subirSolicitudFirmada}
            btnTitle="Solicitud de registro firmada"
          >
            <div>
              <button> Paso2 </button>
            </div>
          </StepContainer> */}
          <Paso2  />

          {/* <StepContainer
            step="3"
            title="Carta AVAL"
            status={2}
            btnTitle="Carta AVAL"
          /> */}
          <Paso3/>
          {/* <StepContainer
            step="4"
            title="Documentos probatorios de Aval"
            status={0}
            btnTitle="Documento"
          /> */}
          <Paso4/>
          {/* <StepContainer
            step="5"
            title="Cronograma"
            status={0}
            btnTitle="Cronograma"
          /> */}
          <Paso5/>
        </div>
      </div>
    </div>
  );
};

export default RegistroDetalle;
