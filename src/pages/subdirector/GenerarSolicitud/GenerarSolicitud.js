import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import ResumenSolicitud from "../../../components/ResumenSolicitud";
import RegistrarInstructor from "../../../components/RegistrarInstructor";
import estudio from "../../../assets/images/estudio.png";
import Background5 from "../../../assets/images/Background5.png";
import puntitos from "../../../assets/images/puntitos.png";
import "./GenerarSolicitud.css";
import instructivo from "../../../assets/pdfs/InstructivoSolicitud.pdf";
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

const GenerarSolicitud = () => {
  const tabs = useRef(null);

  useEffect(() => {
    let elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, { format: "dd/mm/yyyy" });
    //var el = document.querySelector('.tabs');
    M.Tabs.init(tabs.current, {});
    let modales = document.querySelectorAll(".modal");
    M.Modal.init(modales, {});
    let textNeedCount = document.querySelectorAll("#input_text, #textarea1");
    M.CharacterCounter.init(textNeedCount);
  }, []);

  const nextSection = (id) => {
    var instance = M.Tabs.getInstance(tabs.current);
    window.scroll({ top: 400, behavior: "smooth" });
    setTimeout(() => instance.select(id), 500);

    //window.scrollTo(0, 200);
  };
  const backSection = (id) => {
    var instance = M.Tabs.getInstance(tabs.current);
    window.scroll({ top: 400, behavior: "smooth" });
    setTimeout(() => instance.select(id), 500);
    //window.scrollTo(0, 200);
  };
  const onChange = (e) => {
    //setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const checkboxOnChange = (e, set, areas) => {
    set({ ...areas, [e.target.value]: e.target.checked });
  };

  const addArray = (object) => {
    const arr = [];
    for (const property in object) {
      if (object[property] === true) {
        arr.push(property);
      }
    }
    return arr;
  };
  const Section1 = () => {
    return (
      <>
        <div className="input-field col s12">
          <blockquote>
            <p>Sección 1 • Datos generales de identificación del programa</p>
          </blockquote>
        </div>

        <div className="input-field col s8 m9 xl9">
          <input id="nombreCurso" type="text" required />
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
            <input id="horasTeoria" type="text" required />
            <label htmlFor="horasTeoria">Horas de teoría</label>
          </div>
          <div className="input-field col s12 ">
            <input id="horasTeoria" type="text" required />
            <label htmlFor="horasTeoria">Horas de práctica</label>
          </div>
          <div className=" col s6 m6 xl6 ">
            <label htmlFor="horasTeoria">Total de horas</label>
          </div>
          <div className=" col s6 m6 xl6 ">15 horas </div>
          <div className=" col s6 m6 xl6 ">
            <label htmlFor="horasTeoria">Tipo de programa</label>
          </div>
          <div className=" col s6 m6 xl6 ">Taller</div>
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
          <input id="horasTeoriaa" type="number" required />
          <label htmlFor="horasTeoriaa">Horas de sesión</label>
          <span class="helper-text">
            Número de horas que dura cada sesión/clase
          </span>
        </div>

        <div className="col s4">
          <label>Nivel:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Básico</option>
            <option value="2">Medio superior</option>
            <option value="2">Superior</option>
            <option value="2">Posgrado</option>
          </select>
        </div>
        <br />
        <div className="col s4">
          <label>Modalidad:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Escolarizada</option>
            <option value="1">No escolarizada</option>
            <option value="2">En línea</option>
            <option value="2">Mixta</option>
          </select>
        </div>
        <div className=" col s4">
          <label>Área:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Ingeniería y Ciencias Físico Matemáticas</option>
            <option value="2">Ciencias Médico Biológicas</option>
            <option value="2">Ciencias Sociales y Administrativas</option>
            <option value="2">TICs</option>

            {/* <option value="2">Otra</option> */}
          </select>
        </div>
        {/*  <div className="input-field col s6">
          <input id="horasPractica" type="text" required disabled />
          <label htmlFor="horasPractica">Area</label>
          <br />
        </div> */}
        <div className="col s12">
          <label>
            Unidad que solicita el registro (Nombre completo del Centro, Escuela
            o Unidad que solicita el registro)
          </label>
          <select
            className="browser-default"
            defaultValue="4"
            required
            disabled
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Cajeme </option>
            <option value="2">Campeche</option>
            <option value="2">Cancún</option>
            <option value="4">Chihuahua</option>
            <option value="2">Culiacán</option>
            <option value="2">Durango</option>
            <option value="2">Los Mochis</option>
            <option value="2">Mazatlán</option>
            <option value="2">Morelia</option>
            <option value="2">Oaxaca</option>
            <option value="2">Tampico</option>
            <option value="2">Veracruz</option>
          </select>
        </div>
        <div className="input-field col s12 xl6">
          <input id="date" type="text" className="datepicker" required />
          <label htmlFor="date">Fecha de inicio del programa</label>
        </div>
        <div className="input-field col s12 xl6">
          <input id="datee" type="text" className="datepicker" required />
          <label htmlFor="datee">Fecha de término del programa</label>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Sede</label>
        </div>

        <div className="col s12 center">
          <button
            onClick={() => nextSection("test2")}
            className="waves-effect waves-light btn "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section2 = () => {
    return (
      <>
        <div className=" col s12">
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
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Público general</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Estudiantes</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Egresados</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Profesionistas del Área</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Beneficiarios del convenio</span>
            </label>
          </p>
        </div>
        {/*         <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Dirigido a: </label>
          <span className="helper-text" data-error="wrong" data-success="right">
            (Público General Estudiantes Egresados Profesionistas del Area
            Beneficiaros del convenio)
          </span>
        </div> */}
        <div className="input-field col s12">
          <input id="nombreCursoe" type="text" required />
          <label htmlFor="nombreCursoe">
            Requisitos académicos y administrativos de ingreso del participante:
          </label>
        </div>
        {/* <label>Recursos de operación del Programa: </label> */}
        <div className="input-field col s12">
          <input id="nombreCursoer" type="text" required />
          <label htmlFor="nombreCursoer">
            Recursos de operación del programa:
          </label>
          <span class="helper-text">
            Insumos extra, materiales especializados solo para este curso
            (Licencias, material de construcción, material mecánico, material
            extra)
          </span>
          <br />
        </div>
        {/* <div className="input-field col s12">
          <input id="nombreCursoo" type="text" required />
          <label htmlFor="nombreCursoo">
            Recursos de operación del Programa
          </label>
          <span className="helper-text" data-error="wrong" data-success="right">
            (Hojas Plumas Equipo de Computo Proyector Software...)
          </span>
        </div> */}
        <div className="col s6">
          <label>Unidades Académicas de colaboración (opcional)</label>
          <select className="browser-default" defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Cajeme </option>
            <option value="2">Campeche</option>
            <option value="2">Cancún</option>
            <option value="2">Chihuahua</option>
            <option value="2">Culiacán</option>
            <option value="2">Durango</option>
            <option value="2">Los Mochis</option>
            <option value="2">Mazatlán</option>
            <option value="2">Morelia</option>
            <option value="2">Oaxaca</option>
            <option value="2">Tampico</option>
            <option value="2">Veracruz</option>
          </select>
        </div>
        <div className="  col s6">
          <label>Sector con el que se vincula el programa:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">a </option>
            <option value="2">b</option>
            <option value="2">c</option>
          </select>
        </div>
        <div className="input-field col s12">
          <label> Evaluación y tipo de reconocimiento que se entregará</label>
          <br /> <br />
          <br />
          {/*  <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Evaluación Diagnóstica</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Participaciones Orales</span>
            </label>
          </p> */}
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Lista de asistencia</span>
            </label>
          </p>
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Cuestionarios</span>
            </label>
          </p>
          {/*   <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Evaluación Sumativa</span>
            </label>
          </p> */}
          <p className="col s12 m4 left-align">
            <label>
              <input
                type="checkbox"
                name="setAreasServicios"
                className="filled-in"
                value="Planeación estrategíca"
                onChange={(e) => {
                  // checkboxOnChange(e,setAreasServicios,areasServicios)
                }}
              />
              <span>Examen final</span>
            </label>
          </p>
          <div className="input-field col s12">
            <input id="nombreCursoerr" type="text" required />
            <label htmlFor="nombreCursoerr">Otro</label>
          </div>
        </div>
        <div className="col s3 xl6 center">
          <button
            onClick={() => backSection("test1")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        &nbsp;
        <div className="col s8 xl6 center">
          <button
            onClick={() => nextSection("test3")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
        {/* <div className="input-field col s12">
          <input id="nombreCursooo" type="text" required />
          <label htmlFor="nombreCursooo">
            Evaluación y tipo de Reconocimiento que se entregará
          </label>
          <span className="helper-text" data-error="wrong" data-success="right">
            Evaluación Diagnóstica Participaciones Orales Cuestionarios
            Evaluación Sumativa Examen Final
          </span>
        </div> */}
      </>
    );
  };
  const Section3 = () => {
    return (
      <>
        <div className=" col s12">
          <blockquote>
            <p>Sección 3 • Planeación</p>
          </blockquote>
        </div>
        <div className="input-field col s12">
          <div className="teal lighten-5 " style={style.infoContainer}>
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Ejemplo
            </span>
            <p>
              Guíese de la estructura de este ejemplo para llenar los campos de
              esta sección.
              <br />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              lectus laoreet, efficitur ipsum sit amet, tempus dui. Maecenas
              posuere eros quam, non sagittis nisl rutrum at. Suspendisse
              faucibus dignissim dapibus. Sed gravida et orci a laoreet. Donec
              sagittis dui rhoncus eros pretium, vitae gravida libero tempor.
              Integer sodales urna at risus pretium imperdiet. Mauris ut arcu
              dui. Etiam faucibus sodales sapien sit amet consectetur. Maecenas
              fermentum tellus sollicitudin, varius libero vitae, vulputate
              quam. Praesent at tortor eu nulla iaculis tempus.
            </p>
          </div>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Fundamentación</label>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Introducción</label>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Competencia general a desarrollar</label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => backSection("test2")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test4")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section4 = () => {
    return (
      <>
        <div className="col s12">
          <blockquote>
            <p>Sección 4 • Programa</p>
          </blockquote>
          <p className="  light ">
            Describir las competencias específicas, actividades de aprendizaje,
            evidencias de aprendizaje y horas por cada uno de los temas.
          </p>
          <div className="row teal lighten-5" style={style.infoContainer}>
            <span className="small material-icons green-text ">list_alt</span>
            <span className="new badge green darken-2" data-badge-caption="">
              Agregar Tema
            </span>
            <p>
              Estos campos se deberán de llenar por cada uno de los temas que
              componen el programa.
            </p>
            <div className="input-field col s12 m6 xl6">
              <input id="nombreCurso" type="text" />
              <label htmlFor="nombreCurso">Nombre del tema</label>
            </div>
            <div className="input-field col s12 m6 xl6">
              <input id="nombreCurso" type="text" />
              <label htmlFor="nombreCurso">Competencia específica</label>
            </div>
            <div className="input-field col s12 m6 xl6">
              <input id="nombreCurso" type="text" />
              <label htmlFor="nombreCurso">Actividad de aprendizaje</label>
            </div>
            <div className="input-field col s12 m6 xl6">
              <input id="nombreCurso" type="text" />
              <label htmlFor="nombreCurso">Evidencia de aprendizaje</label>
            </div>
            <div className="input-field col s12 m6 xl6">
              <input id="nombreCurso" type="text" />
              <label htmlFor="nombreCurso">Horas dedicadas</label>
            </div>
            <div className="input-field col s6 center">
              <button type="submit" className="waves-effect waves-light btn   ">
                Agregar tema
              </button>
            </div>
          </div>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias Específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de Aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de Aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div className="col s12  grey lighten-3" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
            <button className="waves-effect waves-light  btn-flat right red-text valign-wrapper">
              Borrar
              <span className="small material-icons red-text ">delete</span>
            </button>
          </h6>
          <p>
            <strong>· Competencias específicas: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Actividades de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Evidencias de aprendizaje: </strong>Lorem ipsum dolor sit
            amet, consectetur adipiscing elit
            <br />
            <strong>· Horas dedicadas: </strong>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>

        <div className="input-field col s12">
          <input id="dd" type="text" required />
          <label htmlFor="dd">Bibliografía en formato APA</label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => backSection("test3")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test5")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section5 = () => {
    const ModalAgregarInstructor = () => {
      return (
        <div id="modal1" className="modal">
          <div className="modal-content  ">
            <RegistrarInstructor />
          </div>
        </div>
      );
    };
    const ModalSeleccionarInstructor = () => {
      return (
        <div id="modal2" className="modal">
          <div className="modal-content  ">
            <h5>Buscar instructor</h5>
            <p className="  light ">Selecciona tu Instructor</p>

            <div className="row ">
              <div className="input-field col s10">
                <input id="input_text" type="text" data-length="13" required />
                <label htmlFor="nombreCurso">RFC con Homoclave</label>
              </div>

              <div className="input-field col s2">
                <button
                  type="submit"
                  className="waves-effect waves-light btn outlined  "
                >
                  Buscar
                  <i className="material-icons right">search</i>
                </button>
              </div>
            </div>
            <div className="collection">
              <p className="collection-item active  ">
                Listado de Instructores
              </p>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
              <a href="" className="collection-item">
                Antonio Ayola
                <span className="new badge grey darken-2" data-badge-caption="">
                  VECJ880326 XXX
                </span>
                Curso de Informática
              </a>
            </div>
            <br />

            <button className="modal-close waves-effect waves-green btn-flat right">
              Cerrar
            </button>
          </div>
        </div>
      );
    };
    return (
      <>
        <ModalSeleccionarInstructor />
        <ModalAgregarInstructor />
        <div className=" col s12">
          <blockquote>
            <p>Sección 5 • Datos del instructor</p>
          </blockquote>
        </div>

        <div class="input-field col s12 m9 xl9    ">
          <p>
            <strong className="grey-text text-darken-3">
              Instructor: &nbsp;&nbsp; &nbsp;&nbsp;
            </strong>
            Antonio Ayola sdf sd fsd
          </p>
        </div>

        <div className="input-field col s3">
          <a
            className="modal-trigger waves-effect waves-light btn outlined center"
            href="#modal2"
          >
            Seleccionar Instructor
          </a>
        </div>
        {/*  <div className="  col s12">
          <label>Selecciona un instructor:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Instructor1</option>
            <option value="2">Instructor1 Superior</option>
            <option value="2">Instructor1</option>
            <option value="2">Instructor12</option>
          </select>
        </div> */}
        <div className="col s12 teal lighten-5 " style={style.infoContainer}>
          <span className="small material-icons blue-text ">error</span>
          <span className="new badge blue darken-2" data-badge-caption="">
            Nota
          </span>
          <p>
            Verificar que la documentación y CV del instructor esé actualizada,
            en caso contrario puede actualizarla desde:
            <br /> Menu Principal --{">"} Instructores --{">"} Busca tu
            Instructor --{">"} Actualizar
          </p>
        </div>
        <div className=" col s12">
          <br /> En caso que no encuentres al intructor regístralo.&nbsp;&nbsp;
          <a
            className="modal-trigger waves-effect waves-light btn-flat   center"
            href="#modal1"
          >
            Registrar un Instructor
          </a>
          <br />
          <br />
          <div className="divider"></div>
          <br />
        </div>

        <div className="col s6 center">
          <button
            onClick={() => backSection("test4")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test9")}
            className="waves-effect waves-light btn   "
          >
            Guardar y Continuar
          </button>
        </div>
      </>
    );
  };
  const Section6 = () => {
    return (
      <>
        <div className="  col s12">
          <blockquote>
            <p>Sección 6 • Datos del Coordinador Academico (CA)</p>
          </blockquote>
          <div className="teal lighten-5 " style={style.infoContainer}>
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Esta sección se llena en automático al seleccionar el centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className="col s12">
          <label> Coordinador Academico (CA):</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Marco</option>
            <option value="1">Antonio</option>
            <option value="2">En línea</option>
            <option value="2">Mixta</option>
          </select>
        </div>
        <p className="  light " style={{ margin: "15px 0" }}>
          Datos de quien firma y autoriza la solicitud.
        </p>
        <div className="col s6">
          <label> Subdirector:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Marco</option>
            <option value="1">Antonio</option>
            <option value="2">En línea</option>
            <option value="2">Mixta</option>
          </select>
        </div>
        <div className="col s6">
          <label> Director:</label>
          <select className="browser-default" defaultValue="" required>
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="1">Marco</option>
            <option value="1">Antonio</option>
            <option value="2">En línea</option>
            <option value="2">Mixta</option>
          </select>
        </div>
        
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test7")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section66 = () => {
    return (
      <>
        <div className="  col s12">
          <blockquote>
            <p>Sección 6 • Datos del Coordinador Academico (CA)</p>
          </blockquote>
          <div className="  newGroupContainer teal lighten-5 ">
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Esta sección se llena en automático al seleccionar el centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className="input-field col s8">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre completo del CA</label>
        </div>
        <div className="input-field col s4">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Cargo del CA</label>
        </div>
        <div className="input-field col s4">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Número telefónico del CA</label>
        </div>
        <div className="input-field col s3">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Extensión del CA</label>
        </div>
        <div className="input-field col s5">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Correo electrónico del CA</label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => backSection("test5")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test7")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section7 = () => {
    return (
      <>
        <div className=" col s12">
          <blockquote>
            <p>Sección 7 • Aval</p>
          </blockquote>
          <p className="  light ">
            En esta sección deberá de adjuntar el Aval en formato PDF
            correspondiente al programa que se desea registrar.
          </p>
        </div>
        <div className="file-field input-field col s12">
          <div className="btn">
            <span>Cargar archivo</span>
            <input type="file" accept="application/pdf" required />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Aval del programa"
            />
          </div>
        </div>
        <div className="file-field input-field col s12">
          <p className="  light ">
            Documentos probatorios de Aval (De quien lo firma?)
          </p>
          <div className="btn">
            <span>Cargar archivo</span>
            <input type="file" accept="application/pdf" required />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Documentos Probatorios de Aval"
            />
          </div>
        </div>
        <div className="input-field col s9">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del programa</label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => backSection("test6")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("test8")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section8 = () => {
    return (
      <>
        <div className="col s12">
          <blockquote>
            <p>Sección 8 • Datos de firma</p>
          </blockquote>
          <p className="  light ">
            Datos de quien firma y autoriza la solicitud.
          </p>
          <div className="  newGroupContainer teal lighten-5 ">
            <span className="small material-icons blue-text ">error</span>
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Esta sección se llena en automático al seleccionar el centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del Subdirector</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">
            Correo electrónico del Subdirector
          </label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre del Director</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Correo electrónico del Director </label>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => backSection("test7")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            type="submit"
            className="waves-effect waves-light btn   "
            onClick={() => nextSection("test9")}
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  };
  const Section9 = () => {
    return (
      <>
        <div className="col s12">
          <button
            onClick={() => backSection("test5")}
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
  const Tabs = () => {
    return (
      <div className="row">
        <ul className="tabs tabs-fixed-width  z-depth-1 " ref={tabs}>
          <li className="tab col s1">
            <a className="active" href="#test1">
              1
            </a>
          </li>
          <li className="tab col s1">
            <a href="#test2">2</a>
          </li>
          <li className="tab col s1  ">
            <a href="#test3">3</a>
          </li>
          <li className="tab col s1">
            <a href="#test4">4</a>
          </li>
          <li className="tab col s1">
            <a href="#test5">5</a>
          </li>
          <li className="tab col s1">
            <a href="#test6">6</a>
          </li>
         {/*  <li className="tab col s1">
            <a href="#test7">7</a>
          </li>
          <li className="tab col s1">
            <a href="#test8">7</a>
          </li>
          <li className="tab col s1">
            <a href="#test66">66</a>
          </li> */}
          <li className="tab col s1">
            <a href="#test9">Terminar</a>
          </li>
        </ul>

        <div id="test1" className="col s12">
          <Section1 />
        </div>
        <div id="test2" className="col s12">
          <Section2 />
        </div>
        <div id="test3" className="col s12">
          <Section3 />
        </div>
        <div id="test4" className="col s12">
          <Section4 />
        </div>
        <div id="test5" className="col s12">
          <Section5 />
        </div>
        <div id="test6" className="col s12">
          <Section6 />
        </div>
        {/* <div id="test66" className="col s12">
          <Section66 />
        </div>
        <div id="test7" className="col s12">
          <Section7 />
        </div>
        <div id="test8" className="col s12">
          <Section8 />
        </div>*/}
        <div id="test9" className="col s12">
          <Section9 />
        </div> 
      </div>
    );
  };

  return (
    <>
      {/*   <header className="row" style={{ position: "relative", height: "50vh" }}>
      <div className="col s12 m11 l10 xl8 " style={{position:"absolute", top:"-30px", height:"122%",left:"0px"}}>
        <img alt="" src={estudio} className="responsive-img"  style={style.fon}/>

      </div>
        <div className="col s12 m9 l9 xl8 white-text" style={style.headerTitle}>
          <h1 class="titulo">LISTADO DE <b>INSTRUCTORES</b></h1>
          <blockquote>
            <h6 className="subtitulo black-text " >
              <b>Aquí puedes consultar y registrar <br/>instructores</b>
            </h6>
          </blockquote>
        </div>

        <div className="col m8 l8 xl8 hide-on-small-only" style={style.div}>
          <img
            alt=""
            src={estudio}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header> */}
      <header className="row" style={{ position: "relative", height: "50vh" }}>
        <img alt="" src={Background5} style={style.fon} />
        <div
          className="col  s12 m12 l9 xl8 black-text"
          style={style.headerTitle}
        >
          <h3 className="tit center">
            <b>
              Formato de registro de <br /> cursos de formación a{" "}
            </b>
          </h3>
          <h3
            className="center tit yellow-text text-darken-4"
            style={{ position: "relative", top: "-30px" }}
          >
            <b> lo largo de la vida</b>
          </h3>
          <center>
            <b>
              <hr
                color="orange"
                width="150px"
                style={{ position: "relative", top: "-30px", height: "3px" }}
              />
            </b>
          </center>

          <h5
            className="subt center"
            style={{ position: "relative", top: "-30px" }}
          >
            Necesita llenar los campos para poder
            <br /> generar y descargar la solicitud
          </h5>

          <div
            className="container"
            style={{ position: "relative", top: "-25px" }}
          >
            <a
              href={instructivo}
              target="_blank"
              rel="noreferrer noopener"
              className=" waves-effect waves-light btn yellow darken-4 col s12 m5 l5 xl5 "
              style={{ marginRight: "50px", marginBottom: "3px" }}
            >
              <b>Instructivo</b>
            </a>

            <Link
              to="/subdirector/programas/2"
              className=" waves-effect waves-light btn white black-text col s12 m5 l5 xl5"
            >
              <b>Regresar</b>
            </Link>
          </div>
        </div>

        <div className="col m4  xl5 hide-on-med-and-down" style={style.div}>
          <img alt="" src={puntitos} style={style.imag3} />
        </div>
        <div className="col m12 l4 xl5 hide-on-med-and-down " style={style.div}>
          <img
            alt=""
            src={estudio}
            className="responsive-img"
            style={style.imag4}
          />
        </div>
      </header>
      <br />
      <br />
      <div className="container section">
        <p className=" ">
          <blockquote>
            <i>
              Agradecemos leer cuidadosamente cada una de los campos para poder
              colocar la información solicitada de manera correcta.
              <br />
              Es importante señalar que se deberá ocupar mayúsculas y minúsculas
              para su llenado según corresponda.
            </i>
          </blockquote>
        </p>
        <p className="red-text center" style={{ fontSize: "25px" }}>
          <b>
            Verificar campos y enviar solicitud a revisión
            <br />
            Los campos estan guardados, puede regresar para editarlos
          </b>
        </p>
        <p className="header light col s10 ">
          El proceso del llenado de la solicitud esta en el
          <strong className="teal-text"> 70%</strong> <br />
        </p>
        <div className="teal accent-5 ">
          <p className="center white-text" style={{ fontSize: "22px" }}>
            Secciones:
          </p>
        </div>
        <Tabs />
        <form>
          <div className="row ">
            <div className="col s12 center">
              <p>
                <i>
                  Asegúrate de que todos los campos estén correctos, al
                  finalizar podras enviar la solicitud a revisión.
                </i>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GenerarSolicitud;
