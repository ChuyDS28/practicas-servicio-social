import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ResumenSolicitud from '../../components/ResumenSolicitud'
 
const RevisarSolicitud = () => {
    return (
        <>
         <div className="container section">
          <Link
            to="/revisor/revisarRegistro"
            className="waves-effect waves-light btn-flat right"
          >
            Regresar
          </Link>       
          <button
             className="waves-effect waves-light btn outlined right"
          >
           Ver PDF
          </button>
          <blockquote>
            <h5 className="header light teal-text">Solicitud de Registro</h5>
            <p>Resumen</p>
          </blockquote>
          <div className="row">

          <ResumenSolicitud/>
          </div>
       
          <br />
          
        </div>
      </>
    )
}

export default RevisarSolicitud
