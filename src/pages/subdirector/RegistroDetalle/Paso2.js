import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StepContainer from "./StepContainer";
import M from "materialize-css/dist/js/materialize.min";
import Modal from "../../../components/Modal";
import { obtenerPrograma } from "../../../api/services/subdirector/programas";
import { obtenerSolicitud } from "../../../api/services/subdirector/solicitudRegistro";
import { agregarSolicitudFirmada } from "../../../api/services/subdirector/programas";

const Paso2 = (props) => {
  let params = useParams();

  const [solicitud, setSolicitud] = useState({});
  const [programa, setPrograma] = useState({});
  const [status, setStatus] = useState(0);
  const [modalSolicitudFirmada, setModalSolicitudFirmada] = useState(false);
  const [solicitudFirmadaData, setSolicitudFirmadaData] = useState({});

  const estatusConfig = {
    CAPTURANDO: 0,
    EN_REVISION: 1,
    RECHAZADO: 2,
    APROBADO: 3,
    ACEPTADO: 3,
  };

  useEffect(() => {
    getPrograma();
  }, []);

  async function getPrograma() {
    setStatus(0);
    try {
      const dataU = await obtenerPrograma(params.programaId);
      console.log(dataU);
      const dataS = await obtenerSolicitud(dataU.data.programa.id);
      console.log(dataS);

      if (dataU.data.documentosDeSolicitud.length > 0) {
        const firmada = dataU.data.documentosDeSolicitud.find(
          (found) => found?.tipo == "SOLICITUD_FIRMADA"
        );
        console.log(firmada);
        if (firmada) {
          setSolicitudFirmadaData(firmada);
          console.log(solicitudFirmadaData);
          setStatus(estatusConfig[firmada.estatus]);
          // setStatus(0);
        }
      } 

      setPrograma(dataU.data);
      setSolicitud(dataS.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  function Actions() {
    return (
      <>
        {(status == 0 || status === 2) && (
          <button
            onClick={() =>
              Object.entries(solicitud).length > 0 &&
              setModalSolicitudFirmada(true)
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Subir Solicitud Firmada
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
        {status == 3 && (
          <button
            onClick={() =>
              Object.entries(solicitud).length > 0 &&
              alert("Descargando documento")
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Descargar Solicitud Firmada
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
      </>
      // <button
      //   onClick={() =>
      //     Object.entries(solicitud).length > 0 &&
      //     setModalSolicitudFirmada(true)
      //   //   navigate(
      //   //     `/subdirector/programas/${params.programaId}/generarSolicitud/${solicitud?.id}`
      //   //   )
      //   }
      //   className="waves-effect waves-light btn right blue-grey darken-3"
      // >
      //   {"status" === 3 ? "Descargar " : "Subir "} {"Solicitud firmada"}
      //   <i className="material-icons right">picture_as_pdf</i>
      // </button>
    );
  }

  return (
    <>
      <Modal
        open={modalSolicitudFirmada}
        fnCloseModal={() => setModalSolicitudFirmada(false)}
      >
        <ModalSubirSolicitud
          setModal={setModalSolicitudFirmada}
          actualizar={getPrograma}
        />
      </Modal>

      <StepContainer
        step="2"
        title="Enviar solicitud firmada"
        status={status}
        actions={<Actions />}
        btnTitle="Enviar solicitud firmada"
        observaciones={solicitudFirmadaData.comentario}
      />
    </>
  );
};
const ModalSubirSolicitud = (props) => {
  let params = useParams();
  const [SolicitudFirmada, setSolicitudFirmada] = useState();
  const [loading, setLoading] = useState(false);

  async function subirSolicitudFirmada() {
    // event.preventDefault();
    setLoading(true);
    if (SolicitudFirmada == null) {
      M.toast({
        html: "Agrega el documento requerido",
        classes: "red",
      });
      setLoading(false);
      return;
    }
    // if (props.estatus != 0 || props.estatus != 2) {
    //   M.toast({
    //     html: "No es posible subir el documento",
    //     classes: "red",
    //   });
    //   return;
    // }
    try {
      const res2 = await agregarSolicitudFirmada(
        params.programaId,
        SolicitudFirmada
      );
      console.log(res2);
      M.toast({
        html: "Solicitud subida correctamente",
        classes: "green",
      });
      props.setModal(false);
      props.actualizar();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="modal-content">
      <h5>Subir solicitud firmada</h5>
      <div className="file-field input-field col s12">
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
      </div>
      <div>
        {loading ? (
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
        ) : (
          <button
            className="waves-effect waves-light btn "
            onClick={subirSolicitudFirmada}
          >
            Subir Documento
          </button>
        )}
        {/* <button
        className="waves-effect waves-light btn "
        onClick={subirSolicitudFirmada}
      >
        Subir Documento
      </button> */}

        <button className="modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
      </div>
    </div>
  );
};
export default Paso2;
