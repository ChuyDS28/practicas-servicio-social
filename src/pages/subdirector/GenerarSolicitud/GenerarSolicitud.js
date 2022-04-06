import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import estudio from "../../../assets/images/estudio.png";
import Background5 from "../../../assets/images/Background5.png";
import puntitos from "../../../assets/images/puntitos.png";
import "./GenerarSolicitud.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Finalizar from "./Finalizar";
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
  let params = useParams();
  const [refresh, setRefresh] = useState("2");

  useEffect(() => {
    let elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, { format: "dd/mm/yyyy" });
    //var el = document.querySelector('.tabs');
    M.Tabs.init(tabs.current, {});
    /*  let modales = document.querySelectorAll(".modal"); */
    /* M.Modal.init(modales, {}); */
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
  /* const Section6 = () => {
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
  }; */
  /*  const Section7 = () => {
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
            onClick={() => backSection("section6")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            onClick={() => nextSection("section8")}
            className="waves-effect waves-light btn   "
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  }; */
  /* const Section8 = () => {
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
            onClick={() => backSection("section7")}
            className="waves-effect waves-light btn "
          >
            Regresar
          </button>
        </div>
        <div className="col s6 center">
          <button
            type="submit"
            className="waves-effect waves-light btn   "
            onClick={() => nextSection("section9")}
          >
            Guardar y continuar
          </button>
        </div>
      </>
    );
  }; */

  const Tabs = () => {
    return (
      <div className="row">
        <ul className="tabs tabs-fixed-width  z-depth-1 " ref={tabs}>
          <li className="tab col s1">
            <a className="active" href="#section1">
              <b>1</b>
            </a>
          </li>
          <li className="tab col s1">
            <a href="#section2">
              <b>2</b>
            </a>
          </li>
          <li className="tab col s1  ">
            <a href="#section3">
              <b>3</b>
            </a>
          </li>
          <li className="tab col s1">
            <a href="#section4">
              <b>4</b>
            </a>
          </li>
          <li className="tab col s1">
            <a href="#section5">
              <b>5</b>
            </a>
          </li>
          {/*  <li className="tab col s1">
            <a href="#section6">
              <b>6</b>
            </a>
          </li> */}
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
            <a href="#finalizar">Terminar</a>
          </li>
        </ul>

        <div id="section1" className="col s12">
          <Section1
            seguir={nextSection}
            programaId={params.programaId}
            solicitudId={params.solicitudId}
          />
        </div>
        <div id="section2" className="col s12">
          <Section2
            seguir={nextSection}
            regresar={backSection}
            programaId={params.programaId}
            solicitudId={params.solicitudId}
          />
        </div>
        <div id="section3" className="col s12">
          <Section3
            seguir={nextSection}
            regresar={backSection}
            programaId={params.programaId}
            solicitudId={params.solicitudId}
          />
        </div>
        <div id="section4" className="col s12">
          <Section4
            seguir={nextSection}
            regresar={backSection}
            programaId={params.programaId}
            solicitudId={params.solicitudId}
          />
        </div>
        <div id="section5" className="col s12">
          <Section5
            seguir={nextSection}
            regresar={backSection}
            programaId={params.programaId}
            solicitudId={params.solicitudId}
          />
        </div>
        {/* <div id="section6" className="col s12">
          <Section6 />
        </div> */}
        {/* <div id="test66" className="col s12">
          <Section66 />
        </div>
        <div id="test7" className="col s12">
          <Section7 />
        </div>
        <div id="test8" className="col s12">
          <Section8 />
        </div>*/}
        <div id="finalizar" className="col s12">
          <Finalizar regresar={backSection} />
        </div>
      </div>
    );
  };

  return (
    <>
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
              to={`/subdirector/programas/${params.programaId}`}
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
        <blockquote>
          <i>
            Agradecemos leer cuidadosamente cada una de los campos para poder
            colocar la información solicitada de manera correcta.
            <br />
            Es importante señalar que se deberá ocupar mayúsculas y minúsculas
            para su llenado según corresponda.
          </i>
        </blockquote>
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
        <div className="teal darken-2">
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
