import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../../api/services/usuarios";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";


const DatosUsuario = (props) => {
    return (
      <div className="modal-content  ">
        <div className="light-blue lighten-2 white-text section center">
          <h5 className="center ">Datos</h5>
        </div>
        <br />
        <div className="row">
          <div className="col s12 m12 l7 xl7">
            <p>
              <strong>Nombre:&nbsp;&nbsp;</strong>{props.user.nombre}
              <strong>&nbsp;&nbsp;</strong>{props.user.primerApellido}
              <strong>&nbsp;&nbsp;</strong>{props.user.segundoApellido}              
            </p>
          </div>
          <br/>
          <div className="col s12 m12 l12 xl12">
            <p>
              <strong>Tipo de usuario:&nbsp;&nbsp;</strong>{props.user.rol}
            </p>
          </div>
          <br/>
          <br/>
          {props.user.unidadAcademica && 
          <div className="col s12 l7">
          <p>
            <strong>Escuela, unidad o centro:&nbsp;&nbsp;</strong>{props.user.unidadAcademica.nombre}
          </p>
        </div>
          }
          <br/>          
          <div className="col s12 m4 l5">
            <p>
              <strong>Cargo:&nbsp;&nbsp;</strong>{props.user.unidad}
            </p>
          </div>
          <br/>
          <div className="col s12 l7">
            <p>
              <strong>Usermane:&nbsp;&nbsp;</strong>{props.user.username}
            </p>
          </div>
          <br/>
          <div className="col s12 m4 l5">
            <p>
              <strong>Correo institucional:&nbsp;&nbsp;</strong>{props.user.correoInstitucional}
            </p>
          </div>
          <br/>
          <br/>
          <div className="col s12 m4 l5">
            <p>
              <strong>id:&nbsp;&nbsp;</strong>{props.user.id}
            </p>
          </div>
          <br/>
          <div className="col s12 m4 l5">
            <p>
              <strong>Correo personal:&nbsp;&nbsp;</strong>{props.user.correoPersonal}
            </p>
          </div>
          <br/>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Fecha de registro:&nbsp;&nbsp;</strong>{props.user.creado}
            </p>
          </div>
          <br/>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Fecha de inactividad:&nbsp;&nbsp;</strong>{props.user.fechaUltimaConexion}
            </p>
          </div>
          <br/>
          <div className="col s12 m7 xl7">
            <p>
              <strong>Número de telefono:&nbsp;&nbsp;</strong>{props.user.Telefono}
            </p>
          </div>
          <br/>
          <br/>
          <div className="col s12 m5 xl5">
            <p>
              <strong>Extensión:&nbsp;&nbsp;</strong>{props.user.Extencion}
            </p>
          </div>
          <br/>
        </div>
        <button className="light-blue lighten-2 white-text modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
        <br />
      </div>
    );
  };

  export default DatosUsuario;