import {
  agregarCV,
  agregarDocsProbatorios,
} from "../../api/services/instructores";
import M from "materialize-css/dist/js/materialize.min.js";
import React, { useEffect, useState } from "react";
import { obtenerUnidades } from "../../api/services/unidadAcademica";
import { editarInstructor } from "../../api/services/instructores";
import { obtenerDocumentosInstructor } from "../../api/services/instructores";

const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon7: {
    height: "91%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon2: {
    position: "absolute",
    objectFit: "cover",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
  },
  imag: {
    position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    objectFit: "cover",
  },
  imag2: {
    position: "absolute",
    right: "60px",
    top: "0%",
    height: "80%",
    width: "85px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "60%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  tit: {
    left: "0px",
    position: "absolute",
  },
};

const ModalEditarInstructor = (props) => {
  const [CV, setCV] = useState();
  const [Docs, setDocs] = useState();
  const [Unidades, setunidades] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: props.nombre,
    area: props.area,
    rfc: props.rfc,
    idUnidadAcademica: props.unidad,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getUnidades();
    M.updateTextFields();
  }, []);

  async function getUnidades() {
    try {
      const dataU = await obtenerUnidades(0);
      setunidades(dataU.data);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  useEffect(() => {
    getDocuments();
  }, []);

  async function getDocuments() {
    try {
      const documents = await obtenerDocumentosInstructor(props.id);
      // setDocsInstructor(documents);
      console.log(documents);
      console.log(URL.createObjectURL(documents.data));
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  const clear = () => {
    setCV(null);
    setDocs(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(CV);
    console.log(Docs);
    setLoading(true);

    if (formValues.nombre == "") {
      M.toast({
        html: "Ingresa un nuevo nombre para el instructor",
        classes: "red",
      });
      return;
    }
    if (formValues.area == "") {
      M.toast({
        html: "Selecciona un area diferente para el instructor",
        classes: "red",
      });
      return;
    }
    if (formValues.rfc == "") {
      M.toast({
        html: "Ingresa un nuevo rfc para el instructor",
        classes: "red",
      });
      return;
    }
    if (formValues.idUnidadAcademica == "") {
      M.toast({
        html: "Selecciona una unidad diferente para el instructor",
        classes: "red",
      });
      return;
    }

    if (CV == null) {
      M.toast({
        html: "Selecciona el nuevo CV",
        classes: "red",
      });
      return;
    }
    if (Docs == null) {
      M.toast({
        html: "Selecciona los nuevos documentos probatorios",
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
      const response = await editarInstructor(data, props.id);
      const newCV = await agregarCV(props.id, CV);
      const newDocs = await agregarDocsProbatorios(props.id, Docs);
      props.ModalActualizar(false);
      clear();
      M.updateTextFields();
      M.toast({
        html: "El instructor ha sido exitosamente actualizado",
        classes: "green",
      });
      console.log(response);
      console.log(newCV);
      console.log(newDocs);
      props.getInstructores();
      props.getDocuments();
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Actualizacion fallida", classes: "red" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-content  ">
        <h5>Actualizar Instructor</h5>
        <p>
          <strong>Nombre del Instructor:</strong> {props.nombre}
          <br />
          <strong>RFC con Homoclave:</strong> {props.rfc}
          <br />
          <strong>Área:</strong> {props.area}
        </p>

        <div className="input-field col s12">
          <input
            name="nombre"
            value={formValues.nombre}
            id="nombreCurso"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="nombreCurso">Nombre completo del Instructor</label>
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
            <option value="" id="0" disabled>
              Area
            </option>
            <option value="FISICO_MATEMATICAS" id="1">
              Fisico Matematicas
            </option>
            <option value="MEDICO_BIOLOGICAS" id="2">
              Medico Biologicas
            </option>
            <option value="SOCIALES_ADMINISTRATIVAS" id="3">
              Sociales y Administrativas
            </option>
            <option value="TICS" id="4">
              TICS
            </option>
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
          <p className="  light ">
            Adjuntar CV actualizado del Instructor en formato PDF
          </p>
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
          <div className="teal lighten-5" style={style.infoContainer}>
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Documentos probatorios:
              <br /> · Título · Certificado · Cédula · Constancias · Diplomas o
              documentos que avalen su experiencia
              <br />
              <strong>Subir solo un pdf con todos los documentos.</strong>
            </p>
          </div>
          <div className="file-field input-field col s12">
            <div className="btn">
              <span>Cargar archivo</span>
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
                className="file-path validate"
                type="text"
                placeholder="Documentos probatorios"
              />
            </div>
          </div>
          <br />
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
              type="submit"
              className="waves-effect waves-light btn   "
              onClick={handleSubmit}
            >
              Actualizar Instructor
              <i className="material-icons right">picture_as_pdf</i>
            </button>
          )}
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat right"
          >
            Cerrar
          </button>
        </div>
      </div>
    </form>
  );
};
export default ModalEditarInstructor;
