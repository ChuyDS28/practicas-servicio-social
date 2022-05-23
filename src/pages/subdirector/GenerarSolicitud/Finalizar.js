import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumenSolicitud from "../../../components/ResumenSolicitud";
import { agregarEstado } from "../../../api/services/subdirector/programas";
import { Navigate } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min";


const Finalizar = (props) => {
  let navigate = useNavigate();
  async function enviarSolicitud(){
    // const {goBack} = this.props.navigation;
  try{
    const data ={
      estatus: "EN_REVISION"
    }
    M.toast({
      html: "Instructor del programa actualizado",
      classes: "green",
    });
    const res = await agregarEstado(props.id, data)
    console.log(res);
    navigate(`/subdirector/programas/${props.id}`);
  }catch(error){
    console.log(error);
    console.log(error.response);
  }
  }
  return (
    <>
      <div className="col s12">
        <button
          onClick={() => props.regresar("section5")}
          className="waves-effect waves-light btn-flat   right"
        >
          Regresar al paso 5
        </button>
      </div>
      <ResumenSolicitud />

      <div className="col s12 center" style={{ marginBottom: "10px" }}>
        <button
          type="submit"
          href={`/subdirector/programas/${props.id}`}
          className="waves-effect waves-light btn teal accent-4   "
          onClick={() =>
            enviarSolicitud() 
            // console.log("object")
          }
        >
          Enviar solicitud a revisión
        </button>
      </div>
    </>
  );
};
export default Finalizar;
