import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { registrarInstructor } from "../api/services/instructores";
import M from "materialize-css/dist/js/materialize.min.js";
import { obtenerUnidades } from "../api/services/unidadAcademica";
import {
  agregarCV,
  agregarDocsProbatorios,
} from "../api/services/instructores";
const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
};

const RegistrarInstructor = (props) => {
  const [CV, setCV] = useState();
  const [Docs, setDocs] = useState();
  const [Unidades, setunidades] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: "",
    area: "",
    rfc: "",
    idUnidadAcademica: "",
  });

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getUnidades();
  }, []);

  async function getUnidades() {
    try {
      const dataU = await obtenerUnidades(0);
      setunidades(dataU.data);
      console.log(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    console.log(CV);
    console.log(Docs);
    if (formValues.nombre == "") {
      M.toast({
        html: "Ingresa el nombre del instructor a registrar",
        classes: "red",
      });
      return;
    }
    if (formValues.area == "") {
      M.toast({
        html: "Selecciona el area al que pertenece el instructor",
        classes: "red",
      });
      return;
    }
    if (formValues.rfc == "") {
      M.toast({
        html: "Introduce el RFC del instructor a registrar",
        classes: "red",
      });
      return;
    }
    if (CV == null) {
      M.toast({
        html: "Selecciona el CV del instructor que se este registrando",
        classes: "red",
      });
      return;
    }
    if (Docs == null) {
      M.toast({
        html: "Selecciona los documentos que se requieren",
        classes: "red",
      });
      return;
    }
    try {
      const data = {
        nombreCompleto: formValues.nombre,
        area: formValues.area,
        rfc: formValues.rfc,
        idUnidadAcademica: formValues.idUnidadAcademica,
      };
      const response = await registrarInstructor(data);
      const newCV = await agregarCV(response.data.id, CV);
      const newDocs = await agregarDocsProbatorios(response.data.id, Docs);
      props.ModalRegistro(false);
      setCV("");
      setDocs("");
      setFormValues({
        nombre: "",
        area: "",
        rfc: "",
        idUnidadAcademica: "",
      });
      M.updateTextFields();
      M.toast({
        html: "El instructor ha sido exitosamente resitrado",
        classes: "green",
      });
      console.log(response);
      console.log(newCV);
      console.log(newDocs);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error en el registro", classes: "red" });
    }
    props.getInstructores();
  };
  return (
    <>
      <h5>Registrar Instructor</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <input
            name="nombre"
            value={formValues.nombre}
            id="nombreCurso"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="nombreCurso">Nombre completo del Instructor/es</label>
          <span className="helper-text" data-error="wrong" data-success="right">
            Sin título de grado*
          </span>
        </div>

        <div className=" col s6">
          <label>Area:</label>
          <select
            className="browser-default"
            style={{ borderWidth: "1px", borderColor: "grey" }}
            name="area"
            value={formValues.area}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Area
            </option>
            <option value="FISICO_MATEMATICAS">Fisico Matematicas</option>
            <option value="MEDICO_BIOLOGICAS">Medico Biologicas</option>
            <option value="SOCIALES_ADMINISTRATIVAS">
              Sociales y Administrativas
            </option>
            <option value="TICS">TICS</option>
          </select>
        </div>
        <div className=" col s6">
          <label>Unidad Academica:</label>
          <select
            className="browser-default"
            style={{
              borderWidth: "1px",
              borderColor: "grey",
              marginBottom: "20px",
            }}
            name="idUnidadAcademica"
            value={formValues.idUnidadAcademica}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Unidad Academica
            </option>
            {Unidades.map((centro, index) => (
              <option key={index} value={centro.id}>
                {centro.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="input-field col s6">
          <input
            name="rfc"
            value={formValues.rfc}
            id="rfc"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="rfc">RFC con Homoclave</label>
        </div>
        <div className="file-field input-field col s12">
          <p className="  light ">Adjuntar CV del Instructor en formato PDF</p>
          <div className="btn">
            <span>Subir CV</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                setCV(e.target.files[0]);
              }}
              required
            />
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
            Adjuntar documentos académicos y probatorios del Instructor en
            formato PDF, recuerda nombrarlos de acuerdo a la nomenclatura
            especificada.
          </p>
          <div className="teal lighten-5 " style={style.infoContainer}>
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Documetos probatorios:
              <br /> · Título · Certificado · Cédula · Constancias · Diplomas o
              documentos que avalen su experiencia
              <br />
              <strong>Subir solo un pdf con todos los documentos.</strong>
            </p>
          </div>
          <div className="file-field input-field col s12">
            <div className="btn">
              <span>Cargar Archivo</span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => {
                  setDocs(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path"
                type="text"
                placeholder="Documentos probatorios"
              />
            </div>
          </div>
        </div>

        <br />
        <button
          type="submit"
          className="waves-effect waves-light btn   "
          onClick={handleSubmit}
        >
          Registrar Instructor
          <i className="material-icons right">picture_as_pdf</i>
        </button>
        <button className="modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
      </form>
    </>
  );
};

export default RegistrarInstructor;
