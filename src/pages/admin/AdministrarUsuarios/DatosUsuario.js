import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";


const DatosUsuario = () => {
    return (
      <div className="modal-content  ">
        <div className="light-blue lighten-2 white-text section center">
          <h5 className="center ">Datos</h5>
        </div>
        <br />
        <div className="row">
          <div className="col s12 m12 l7 xl7">
            <p>
              <strong>Nombre:&nbsp;&nbsp;</strong>Pedro Díaz Coronel
            </p>
          </div>

          <div className="col s12 m12 l4 xl4">
            <p>
              <strong>Tipo de usuario:&nbsp;&nbsp;</strong>Subdirector
            </p>
          </div>

          <div className="col s12 l7">
            <p>
              <strong>Escuela, unidad o centro:&nbsp;&nbsp;</strong>
              Juan de Dios Bátiz
            </p>
          </div>
          <div className="col s12 m4 l5">
            <p>
              <strong>Cargo:&nbsp;&nbsp;</strong>Principal
            </p>
          </div>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Fecha de registro:&nbsp;&nbsp;</strong>16/11/2021
            </p>
          </div>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Fecha de inactividad:&nbsp;&nbsp;</strong>17/11/2021
            </p>
          </div>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Número de telefono:&nbsp;&nbsp;</strong>5570293846
            </p>
          </div>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Extensión:&nbsp;&nbsp;</strong>551728
            </p>
          </div>
        </div>
        <button className="light-blue lighten-2 white-text modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
        <br />
      </div>
    );
  };

  export default DatosUsuario;