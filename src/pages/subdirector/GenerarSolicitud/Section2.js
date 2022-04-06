import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import {
  obtenerSolicitudDatosEspecificos,
  obtenerSolicitud,
  solicitudAgregarDatosEspecificos,
  solicitudActualizarDatosEspecificos,
} from "../../../api/services/subdirector/solicitudRegistro";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";

const Section2 = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [unidades, setUnidades] = useState([]);
  const [formValues, setFormValues] = useState({
    requisitosAcademicos: "",
    recursosDeOperacion: "",
    unidadesDeColaboracion: "",
    sector: "",
    horario: "",
    idPrograma: Number(props.solicitudId),
  });
  const [dirigidoaValues, setDirigidoaValues] = useState({
    "Publico General": false,
    Estudiantes: false,
    Egresados: false,
    "Profesionistas del Area": false,
    "Beneficiarios del Convenio": false,
  });
  const [evaluacionValues, setEvaluacionValues] = useState({
    "Lista de asistencia": false,
    Cuestionarios: false,
    "Examen final": false,
    Diploma: false,
    Constancia: false,
  });
  useEffect(() => {
    getDatosEspecificos();
    getUnidades();
  }, []);

  async function getDatosEspecificos() {
    try {
      const response = await obtenerSolicitudDatosEspecificos(props.solicitudId);
      console.log(response);
      setFormValues({
        requisitosAcademicos: response.data.requisitosAcademicos,
        recursosDeOperacion: response.data.recursosDeOperacion,
        unidadesDeColaboracion: response.data.unidadesDeColaboracion,
        sector: response.data.sector,
        horario: response.data.horario,
        idPrograma: props.solicitudId,
        id: response.data.id,
      });
      setDirigidoaValues(JSON.parse(response.data.dirigidoA));
      setEvaluacionValues(JSON.parse(response.data.evaluacionReconocimiento));

      M.updateTextFields();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  async function getUnidades() {
    try {
      const dataU = await obtenerUnidades(0);
      setUnidades(dataU.data);
      console.log(dataU);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    if (
      formValues.dirigidoA === "" ||
      formValues.requisitosAcademicos === "" ||
      formValues.recursosDeOperacion === "" ||
      formValues.unidadesDeColaboracion === "" ||
      formValues.sector === "" ||
      formValues.evaluacionReconocimiento === "" ||
      formValues.horario === ""
    ) {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    }
    try {
      if (formValues.id) {
        const response = await solicitudActualizarDatosEspecificos(
          formValues.id,
          {
            ...formValues,
            dirigidoA: JSON.stringify(dirigidoaValues),
            evaluacionReconocimiento: JSON.stringify(evaluacionValues),
          }
        );
        console.log(response);
      } else {
        const response = await solicitudAgregarDatosEspecificos({
          ...formValues,
          dirigidoA: JSON.stringify(dirigidoaValues),
          evaluacionReconocimiento: JSON.stringify(evaluacionValues),
        });
        console.log(response);
      }
      getDatosEspecificos();
      M.toast({
        html: "Datos especificos guardados",
        classes: "green",
      });
      props.seguir("section3");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col s12">
        <blockquote>
          <p>Sección 2 • Datos específicos por programa</p>
        </blockquote>
      </div>
      <div className="input-field col s12">
        <label>Dirigido a:</label>
        <br />
        <br />
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Publico General"
              className="filled-in"
              value="Público general"
              checked={dirigidoaValues["Publico General"]}
              onChange={(e) => {
                checkboxOnChange(e, setDirigidoaValues, dirigidoaValues);
              }}
            />
            <span>Público general</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Estudiantes"
              className="filled-in"
              value="Estudiantes"
              checked={dirigidoaValues["Estudiantes"]}
              onChange={(e) => {
                checkboxOnChange(e, setDirigidoaValues, dirigidoaValues);
              }}
            />
            <span>Estudiantes</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Egresados"
              className="filled-in"
              value="Egresados"
              checked={dirigidoaValues["Egresados"]}
              onChange={(e) => {
                checkboxOnChange(e, setDirigidoaValues, dirigidoaValues);
              }}
            />
            <span>Egresados</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Profesionistas del Area"
              className="filled-in"
              value="Profesionistas del Área"
              checked={dirigidoaValues["Profesionistas del Area"]}
              onChange={(e) => {
                checkboxOnChange(e, setDirigidoaValues, dirigidoaValues);
              }}
            />
            <span>Profesionistas del Área</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Beneficiarios del Convenio"
              className="filled-in"
              value="Beneficiarios del convenio"
              checked={dirigidoaValues["Beneficiarios del Convenio"]}
              onChange={(e) => {
                checkboxOnChange(e, setDirigidoaValues, dirigidoaValues);
              }}
            />
            <span>Beneficiarios del convenio</span>
          </label>
        </p>
      </div>
      <div className="input-field col s12">
        <textarea
          className="materialize-textarea active"
          id="requisitosAcademicos"
          type="text"
          name="requisitosAcademicos"
          value={formValues.requisitosAcademicos}
          onChange={handleChange}
          required
        />
        <label htmlFor="requisitosAcademicos">
          Requisitos académicos y administrativos de ingreso del participante:
        </label>
      </div>
      {/* <label>Recursos de operación del Programa: </label> */}
      <div className="input-field col s12">
        <textarea
          className="materialize-textarea"
          id="recursosDeOperacion"
          type="text"
          name="recursosDeOperacion"
          value={formValues.recursosDeOperacion}
          onChange={handleChange}
          required
        />
        <label htmlFor="recursosDeOperacion">
          Recursos de operación del programa:
        </label>
        <span class="helper-text">
          Insumos extra, materiales especializados solo para este curso
          (Licencias, material de construcción, material mecánico,Equipo de
          Computo, material extra)
        </span>
        <br />
      </div>
      <div className="col s12">
        <label>Unidades Académicas de colaboración (opcional)</label>
        <select
          className="browser-default"
          name="unidadesDeColaboracion"
          value={formValues.unidadesDeColaboracion}
          onChange={handleChange}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {unidades.map((centro, index) => (
            <option key={index} value={centro.id}>
              {centro.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="  col s12">
        <label>Sector con el que se vincula el programa:</label>
        <select
          className="browser-default"
          name="sector"
          value={formValues.sector}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="a">a </option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input
          id="horario"
          type="text"
          name="horario"
          value={formValues.horario}
          onChange={handleChange}
          required
        />
        <label htmlFor="horario">Horario del programa:</label>
        <span class="helper-text">Horario inicial.</span>
        <br />
      </div>
      <div className="input-field col s12">
        <label> Evaluación y tipo de reconocimiento que se entregará</label>
        <br /> <br />
        <br />
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Lista de asistencia"
              className="filled-in"
              value="Lista de asistencia"
              checked={evaluacionValues["Lista de asistencia"]}
              onChange={(e) => {
                checkboxOnChange(e, setEvaluacionValues, evaluacionValues);
              }}
            />
            <span>Lista de asistencia</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Cuestionarios"
              className="filled-in"
              value="Cuestionarios"
              checked={evaluacionValues["Cuestionarios"]}
              onChange={(e) => {
                checkboxOnChange(e, setEvaluacionValues, evaluacionValues);
              }}
            />
            <span>Cuestionarios</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Examen final"
              className="filled-in"
              value="Examen final"
              checked={evaluacionValues["Examen final"]}
              onChange={(e) => {
                checkboxOnChange(e, setEvaluacionValues, evaluacionValues);
              }}
            />
            <span>Examen final</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Diploma"
              className="filled-in"
              value="Diploma"
              checked={evaluacionValues["Diploma"]}
              onChange={(e) => {
                checkboxOnChange(e, setEvaluacionValues, evaluacionValues);
              }}
            />
            <span>Diploma</span>
          </label>
        </p>
        <p className="col s12 m4 left-align">
          <label>
            <input
              type="checkbox"
              name="Constancia"
              className="filled-in"
              value="Constancia"
              checked={evaluacionValues["Constancia"]}
              onChange={(e) => {
                checkboxOnChange(e, setEvaluacionValues, evaluacionValues);
              }}
            />
            <span>Constancia</span>
          </label>
        </p>
      </div>

      <div className="input-field col s12">
        <input id="nombreCursoerr" type="text" />
        <label htmlFor="nombreCursoerr">Otro</label>
      </div>
      <div className="col s6 xl6 center">
        <button
          onClick={() => props.regresar("section1")}
          className="waves-effect waves-light btn blue-grey darken-4"
        >
          Regresar
        </button>
      </div>
      <div className="col s6 xl6 center">
        <button
          type="submit"
          className="waves-effect waves-light btn blue-grey darken-4"
        >
          Guardar y continuar
        </button>
      </div>
    </form>
  );
};
export default Section2;
