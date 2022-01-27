import React from "react";

const AgregarUsuario = () => {
  return (
    <>
      <div className="teal white-text section center">
        <h5 className="center ">Agregar nuevo Usuario</h5>
      </div>

      <div className="input-field col s12">
        <input id="nombreUsuario" type="text" required />
        <label htmlFor="nombreCurso">Nombre Completo</label>
      </div>
      <div className="input-field col s12">
        <div className="input-field col s6">
          <input id="apellidoP" type="text" required />
          <label htmlFor="nombreArea">Apellido Paterno</label>
        </div>
        <div className="input-field col s6">
          <input id="apellidoM" type="text" data-length="13" required />
          <label htmlFor="nombreCurso">Apellido Materno</label>
        </div>
      </div>

      <div className="file-field input-field col s12">
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Adjuntar CV del Instructor en formato PDF"
          />
        </div>
      </div>
      <div className="input-field col s12">


        <div className="file-field input-field col s12">
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Documentos probatorios"
            />
          </div>
        </div>
      </div>

      <button className="modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
    </>
  );
};

export default AgregarUsuario;
