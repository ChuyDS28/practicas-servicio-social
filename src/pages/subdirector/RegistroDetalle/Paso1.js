import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import { obtenerPrograma } from "../../../api/services/subdirector/programas";
import { obtenerSolicitud } from "../../../api/services/subdirector/solicitudRegistro";

import StepContainer from "./StepContainer";

const Paso1 = (props) => {
  let navigate = useNavigate();
  let params = useParams();

  const [programa, setPrograma] = useState({});
  const [solicitud, setSolicitud] = useState({});
  const [status, setStatus] = useState(0);

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
      setStatus(estatusConfig[dataU.data.estatus]);
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
        {(status == 0 || status === 2) &&  (
          <button
            onClick={() =>
              Object.entries(solicitud).length > 0 &&
              navigate(
                `/subdirector/programas/${params.programaId}/generarSolicitud/${solicitud?.id}`
              )
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Subir Solicitud de Registro
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
        {(status == 3) &&  (
          <button
            onClick={() =>
              Object.entries(solicitud).length > 0 &&
              alert("Descargando documento")
              //Se descarga el documento
            }
            className="waves-effect waves-light btn right blue-grey darken-3"
          >
            Descargar Solicitud de Registro
            <i className="material-icons right">picture_as_pdf</i>
          </button>
        )}
      </>
    );
  }

  return (
    <StepContainer
      step="1"
      title="Solicitud de registro"
      status={status}
      actions={<Actions />}
      btnTitle="Solicitud de registro"
      observaciones=""
    />
  );
};

export default Paso1;
