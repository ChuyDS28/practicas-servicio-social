import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import moment from "moment";
import { obtenerCoordinadorAcademico } from "../../../api/services/coordinadorAcademico";
import {
  obtenerSolicitud,
  solicitudActualizarDatosGenerales,
} from "../../../api/services/subdirector/solicitudRegistro";
import { obtenerUnidades } from "../../../api/services/unidadAcademica";

const style = {
  temaContainer: {
    marginBottom: "10px",
    borderRadius: "5px",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    height: "100%",
    top: "-5%",
    /* top: "50%",
      left: "50%",
      
      transform: " translate(-50% , -50%)", */
  },
  fon: {
    height: "113%",
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
    top: "20%",
    height: "80%",
    width: "92%",
  },
  imag3: {
    position: "absolute",
    left: "5px",
    top: "40px",
    height: "60%",
    width: "30%",
  },
  imag4: {
    position: "absolute",
    right: "10px",
    top: "70px",
    height: "100%",
    width: "92%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  cont: {},
};

const Section1 = (props) => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    horasTeoria: "",
    horasPractica: "",
    horasSesion: "",
    nivel: "",
    modalidad: "",
    area: "",
    fechaInicio: "",
    fechaFin: "",
    sede: "",
    bibliografia: "Resnick",
    idUnidadAcademica: "",
    idCoordinadorAcademico: "",
  });
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const [suma, setSuma] = useState();
  const [tipo, setTipo] = useState();
  const [coordinadoresAcademicos, setCoordinadoresAcademicos] = useState([]);
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    getCoordinador();
    getUnidades();
    getDatosGenerales();
  }, []);

  async function getDatosGenerales() {
    try {
      const response = await obtenerSolicitud(props.solicitudId);
      console.log(response);
      setFormValues({
        nombre: response.data.nombre,
        horasTeoria: response.data.horasTeoria,
        horasPractica: response.data.horasPractica,
        horasSesion: response.data.horasSesion,
        nivel: response.data.nivel,
        modalidad: response.data.modalidad,
        area: response.data.area,
        fechaInicio: moment(response.data.fechaInicio)
          .utc()
          .format("yyyy-MM-DD"),
        fechaFin: moment(response.data.fechaFin).utc().format("yyyy-MM-DD"),
        sede: response.data.sede,
        bibliografia: "Hola",
        //idUnidadAcademica: String(response.data.unidadAcademica.id),
        idCoordinadorAcademico: String(response.data.coordinadorAcademico.id),
      });

      M.updateTextFields();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  async function getCoordinador() {
    try {
      const dataU = await obtenerCoordinadorAcademico(0);
       setCoordinadoresAcademicos(dataU.data); 
      console.log(dataU);
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
  useEffect(() => {
    const { horasTeoria, horasPractica } = formValues;
    setSuma(Number(horasTeoria) + Number(horasPractica));
    setTipo(Number(horasTeoria) < Number(horasPractica) ? "TALLER" : "CURSO");
  }, [formValues]);

  function reformatDate(dateStr) {
    let dArr = dateStr.split("-");
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0];
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    if (suma > 25) {
      M.toast({
        html: "El total de horas no deberá sobrepasar 25",
        classes: "red",
      });
      return;
    }

    if (
      formValues.nombre === "" ||
      formValues.horasTeoria === "" ||
      formValues.horasPractica === "" ||
      formValues.horasSesion === "" ||
      formValues.nivel === "" ||
      formValues.modalidad === "" ||
      formValues.area === "" ||
      formValues.sede === "" ||
      formValues.fechaInicio === "" ||
      formValues.fechaFin === "" ||
      formValues.idUnidadAcademica === "" ||
      formValues.idCoordinadorAcademico === ""
    ) {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    }
    try {
      const response = await solicitudActualizarDatosGenerales(
        props.solicitudId,
        {
          ...formValues,
          tipo: tipo,
          horasTotales: suma,
          horasTeoria: Number(formValues.horasTeoria),
          horasPractica: Number(formValues.horasPractica),
          horasSesion: Number(formValues.horasSesion),
          fechaFin: reformatDate(formValues.fechaFin),
          fechaInicio: reformatDate(formValues.fechaInicio),
          idCoordinadorAcademico: Number(formValues.idCoordinadorAcademico),
          idUnidadAcademica: Number(formValues.idUnidadAcademica),
          bibliografia: "sd",
        }
      );
      console.log(response);

      M.toast({
        html: "Datos generales guardados",
        classes: "green",
      });
      props.seguir("section2");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="input-field col s12">
        <blockquote>
          <p>Sección 1 • Datos generales de identificación del programa</p>
        </blockquote>
      </div>

      <div className="input-field col s8 m9 xl9">
        <input
          id="nombre"
          type="text"
          name="nombre"
          onChange={handleChange}
          value={formValues.nombre}
          required
        />
        <label htmlFor="nombreCurso">Nombre del programa</label>
      </div>
      {/* <div className="  col s4 m3 xl3">
          <label>Su solicitud es:</label>
          <select className="browser-default" defaultValue="Normal" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Normal</option>
            <option value="2">Urgente</option>
          </select>
        </div> */}
      <div className="col s12 m6 xl6  ">
        <div className="input-field col s12">
          <input
            id="horasTeoria"
            name="horasTeoria"
            min="0"
            max="25"
            value={formValues.horasTeoria}
            type="number"
            onChange={handleChange}
            /*          required */
          />
          <label htmlFor="horasTeoria">Horas de teoría</label>
        </div>
        <div className="input-field col s12 ">
          <input
            id="horasPractica"
            name="horasPractica"
            min="0"
            max="25"
            value={formValues.horasPractica}
            type="number"
            onChange={handleChange}
            /*   required */
          />
          <label htmlFor="horasPractica">Horas de práctica</label>
        </div>
        <div className=" col s6 m6 xl6 ">
          <label htmlFor="horasTotales">Total de horas</label>
        </div>
        <div className=" col s6 m6 xl6 ">{suma}</div>
        <div className=" col s6 m6 xl6 ">
          <label htmlFor="tipo">Tipo de programa</label>
        </div>
        <div className=" col s6 m6 xl6 ">{tipo}</div>
      </div>
      <div className="input-field col s12 m6 xl6">
        <div className="teal lighten-5 " style={style.infoContainer}>
          <span className="small material-icons blue-text ">error</span>
          <span className="new badge blue darken-2" data-badge-caption="">
            Nota
          </span>
          <p>
            El total de horas no deberá de sobrepasar 25.
            <br />
            El total de horas y el tipo de programa se calcula en automático
          </p>
          <p>
            Curso: Horas teoría &#62; Horas Práctica <br />
            Taller: Horas teoría &#60; Horas Práctica
          </p>
        </div>
      </div>

      <div className="input-field col s12 ">
        <input
          id="horasSesion"
          type="number"
          name="horasSesion"
          value={formValues.horasSesion}
          onChange={handleChange}
          /*  required */
        />
        <label htmlFor="horasSesion">Horas de sesión</label>
        <span class="helper-text">
          Número de horas que dura cada sesión/clase
        </span>
      </div>

      <div className="col s4">
        <label>Nivel:</label>
        <select
          className="browser-default"
          defaultValue=""
          /*  required */
          name="nivel"
          value={formValues.nivel}
          onChange={handleChange}
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="BASICO">Básico</option>
          <option value="MEDIO_SUPERIOR">Medio superior</option>
          <option value="SUPERIOR">Superior</option>
          <option value="POSGRADO">Posgrado</option>
        </select>
      </div>
      <br />

      <div className="col s4">
        <label>Modalidad:</label>
        <select
          className="browser-default"
          name="modalidad"
          value={formValues.modalidad}
          onChange={handleChange}
          defaultValue=""
          /*   required */
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="ESCOLARIZADA">Escolarizada</option>
          <option value="NO_ESCOLARIZADA">No escolarizada</option>
          <option value="EN_LINEA">En línea</option>
          <option value="MIXTA">Mixta</option>
        </select>
      </div>
      <div className=" col s4">
        <label>Área:</label>
        <select
          className="browser-default"
          defaultValue=""
          id="area"
          name="area"
          value={formValues.area}
          onChange={handleChange}
          /*           required */
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="FISICO_MATEMATICAS">
            Ingeniería y Ciencias Físico Matemáticas
          </option>
          <option value="MEDICO_BIOLOGICAS">Ciencias Médico Biológicas</option>
          <option value="SOCIALES_ADMINISTRATIVAS">
            Ciencias Sociales y Administrativas
          </option>
          <option value="TICS">TICs</option>

          {/* <option value="2">Otra</option> */}
        </select>
      </div>
      {/*  <div className="input-field col s6">
          <input id="horasPractica" type="text" required disabled />
          <label htmlFor="horasPractica">Area</label>
          <br />
        </div> */}
      <div className="col s6">
        <label>
          Unidad Académica
          {/*  que solicita el registro (Nombre completo del Centro, Escuela o
          Unidad que solicita el registro) */}
        </label>
        <select
          className="browser-default"
          defaultValue=""
          name="idUnidadAcademica"
          value={formValues.idUnidadAcademica}
          onChange={handleChange}
          /*  required */
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
      <div className="col s6">
        <label>
          Coordinador académico
          {/*  que solicita el registro (Nombre completo del Centro, Escuela o
          Unidad que solicita el registro) */}
        </label>
        <select
          className="browser-default"
          name="idCoordinadorAcademico"
          value={formValues.idCoordinadorAcademico}
          onChange={handleChange}
          /*   required */
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {coordinadoresAcademicos.map((coordinador, index) => (
            <option key={index} value={coordinador.id}>
              {coordinador.usuario.nombre}&nbsp;
              {coordinador.usuario.primerApellido}&nbsp;
              {coordinador.usuario.segundoApellido}
            </option>
          ))}
        </select>
      </div>
      <div className="input-field col s12">
        <input
          id="sede"
          type="text"
          name="sede"
          value={formValues.sede}
          onChange={handleChange}
          /* required */
        />
        <label htmlFor="sede">Sede</label>
      </div>
      <div className="input-field col s12 xl6">
        <input
          id="fechaInicio"
          type="date"
          value={formValues.fechaInicio}
          onChange={handleChange}
          name="fechaInicio"
          /*  required */
        />
        <label htmlFor="fechaInicio">Fecha de inicio del programa</label>
      </div>
      <div className="input-field col s12 xl6">
        <input
          id="fechaFin"
          type="date"
          name="fechaFin"
          value={formValues.fechaFin}
          onChange={handleChange}
          /* required */
        />
        <label htmlFor="fechaFin">Fecha de término del programa</label>
      </div>

      <div className="col s12 center">
        <button
          /*  onClick={() => props.seguir("section2")} */
          type="submit"
          className="waves-effect waves-light btn blue-grey darken-4"
        >
          Guardar y continuar
        </button>
      </div>
    </form>
  );
};
export default Section1;
