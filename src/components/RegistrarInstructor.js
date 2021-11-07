import React from "react";

const style={
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
}

const RegistrarInstructor = () => {
  return (
    <>
      <h5>Registrar Instructor</h5>

      <div className="input-field col s12">
        <input id="nombreCurso" type="text" required />
        <label htmlFor="nombreCurso">Nombre completo del Instructor/es</label>
        <span class="helper-text" data-error="wrong" data-success="right">Sin titulo de grado*</span>

      </div>

      <div className="input-field col s6">
        <input id="nombreArea" type="text" required />
        <label htmlFor="nombreArea">Area</label>
      </div>
      <div className="input-field col s6">
        <input id="input_text" type="text" data-length="13" required />
        <label htmlFor="nombreCurso">RFC con Homoclave</label>
      </div>
      <div className="file-field input-field col s12">
        <p className="  light ">Adjuntar CV del Instructor en formato PDF</p>
        <div className="btn">
          <span>Subir CV</span>
          <input type="file" accept="application/pdf" required />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Adjuntar CV del Instructor en formato PDF"
          />
        </div>
      </div>
      <div className="input-field col s12">
        <p className="  light ">
          Adjuntar documentos Académicos y Probatorios del Instructor en formato
          PDF, recuerda nombrarlos de acuerdo a la nomenclatura especificada
        </p>
        <div className="teal lighten-5 " style={style.infoContainer}>
          <span className="small material-icons blue-text ">error</span>
          <span className="new badge blue darken-2" data-badge-caption="">
            Nota
          </span>
          <p>
            Documetos probatorios:
            <br /> · Título · Certificado · Cédula · Constancias · Diplomas o
            documentos que avalen su experiencia<br/>
            <strong>Subir solo un pdf con todos los documentos.</strong>
          </p>
        </div>
        <div className="file-field input-field col s12">
          <div className="btn">
            <span>Cargar Archivo</span>
            <input type="file" accept="application/pdf" required   />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Documentos probatorios"
            />
          </div>
        </div>
      </div>

      <br />
      <button type="submit" className="waves-effect waves-light btn   ">
        Registrar Instructor
        <i className="material-icons right">picture_as_pdf</i>
      </button>
      <button className="modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
    </>
  );
};

export default RegistrarInstructor;
