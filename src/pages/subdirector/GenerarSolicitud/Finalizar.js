import React, { useEffect } from "react";
import ResumenSolicitud from "../../../components/ResumenSolicitud";

const Finalizar = (props) => {
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
          className="waves-effect waves-light btn teal accent-4   "
          onClick={() =>
            // nextSection("test9")
            console.log("object")
          }
        >
          Enviar solicitud a revisión
        </button>
      </div>
    </>
  );
};
export default Finalizar;
