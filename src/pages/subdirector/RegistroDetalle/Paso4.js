import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../../../components/Modal";
import { agregarDocumentosAVAL } from "../../../api/services/subdirector/programas";
import { obtenerPrograma } from "../../../api/services/subdirector/programas";
import { obtenerSolicitud } from "../../../api/services/subdirector/solicitudRegistro";
import { obtenerDocumentosSolicitud } from "../../../api/services/subdirector/programas";

import StepContainer from "./StepContainer";

const Paso4 = (props) => {
  let params = useParams();

  const [programa, setPrograma] = useState({});
  const [solicitud, setSolicitud] = useState({});
  const [status, setStatus] = useState(0);
  const [modalDocumentos, setModalDocumentos] = useState(false);
  const [documentosData, setDocumentosData] = useState({});

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
    try {
      const dataU = await obtenerPrograma(params.programaId);
      console.log(dataU);
      const dataS = await obtenerSolicitud(dataU.data.programa.id);
      console.log(dataS);
      const dataI = await obtenerDocumentosSolicitud(dataS.data.id);
      console.log(dataI);

      if(dataI.data.length > 0){
        const carta = dataI.data.find((found) => found?.tipo == "PROBATORIO_AVAL");
        console.log(carta);
        if(carta){
          setDocumentosData(carta);
        console.log(documentosData);
        setStatus(estatusConfig[carta.estatus]);
        }else{
          setStatus(0);
        }
      }

    //   if (dataU.data.documentosDeSolicitud.length > 0) {
    //       const docs = dataU.data.documentosDeSolicitud.find(
    //         (found) => found?.tipo == "PROBATORIO_AVAL"
    //       );
    //       console.log(docs);
    //   if (docs) {
    //     setDocumentosData(docs);
    //     console.log(documentosData);
    //     setStatus(estatusConfig[docs.estatus]);
    //     // setStatus(0);
    //   } else {
    //     setStatus(0);
    //   }
    // }
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
              Object.entries(solicitud).length > 0 && setModalDocumentos(true)
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Subir Documentos Probatorios
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
        {status == 3 && (
          <button
            onClick={
              () =>
                Object.entries(solicitud).length > 0 &&
                alert("Descargando documento")
              //Se descarga el documento
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Descargar Documentos Probatorios
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
      </>
    );
  }

  return (
    <>
      <Modal
        open={modalDocumentos}
        fnCloseModal={() => setModalDocumentos(false)}
      >
        <ModalSubirDocumentos
          setModal={setModalDocumentos}
          actualizar={getPrograma}
          solicitud ={programa}
        />
      </Modal>

      <StepContainer
        step="4"
        title="Documentos probatorios de Aval"
        status={status}
        actions={<Actions />}
        btnTitle="Documento"
        observaciones=""
      />
    </>
  );
};

const ModalSubirDocumentos = (props) => {
  let params = useParams();
  const [Documentos, setDocumentos] = useState();
  const [loading, setLoading] = useState(false);

  async function subirDocumentosProbatorios() {
    // event.preventDefault();
    setLoading(true);
    if (Documentos == null) {
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
      const res2 = await agregarDocumentosAVAL(props.solicitud.programa.id, Documentos);
      console.log(res2);
      M.toast({
        html: "Documentos subidos correctamente",
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
      <h5>Subir Documentos Probatorios</h5>
      <div className="file-field input-field col s12">
        <div className="btn">
          <span>Cargar Archivo</span>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              setDocumentos(e.target.files[0]);
            }}
            required
          />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path"
            type="text"
            placeholder="Documentos probatorios AVAL"
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
            onClick={subirDocumentosProbatorios}
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

export default Paso4;
