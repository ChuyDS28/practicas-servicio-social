import React from "react";
const style = {
  temaContainer: {
    marginBottom: "10px",
    objectFit: "cover",
    height: "100%",
    borderRadius: "5px",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
    marginBottom: "10px",
  },
};
const ResumenSolicitud = () => {
  return (
    <>
      <div className=" col s12">
        <div className=" input-field orange lighten-4 col s12">
          <p style={{ fontSize: "22px" }}>
            Seccion 1 • Datos Generales de Identificación del Programa
          </p>
        </div>
        <div className="col s12 m12 l12 xl9">
          <p>
            <strong>Nombre Programa:&nbsp;&nbsp;</strong>Programa de Informatica
          </p>
        </div>

        <div className="col s12 xl9">
          <p>
            <strong>
              Centro, Escuela o Unidad que solicita el Registro:&nbsp;&nbsp;
            </strong>
            CIC SDssd
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Su solicitud es:&nbsp;&nbsp;</strong>Normal
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Nivel:&nbsp;&nbsp;</strong>Basico
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Tipo de programa:&nbsp;&nbsp;</strong>Taller
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Area:&nbsp;&nbsp;</strong>TICs
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Modalidad:&nbsp;&nbsp;</strong>Mixta
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Sede:&nbsp;&nbsp;</strong>Iztapalapa
          </p>
        </div>

        <div className="col s12 m4 xl4">
          <p>
            <strong>Horas de teoría:&nbsp;&nbsp;</strong>10
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Horas de práctica:&nbsp;&nbsp;</strong>15
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Total de horas:&nbsp;&nbsp;</strong>25
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Fecha Inicio:&nbsp;&nbsp;</strong>12/04/2021
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Fecha Termino:&nbsp;&nbsp;</strong>12/04/2021
          </p>
        </div>
      </div>
      <div className=" col s12">
        <div className=" input-field orange lighten-4 col s12">
          <p style={{ fontSize: "22px" }}>
            Seccion 2 • Datos específicos por Programa{" "}
          </p>
        </div>
        <div className="col s12  xl6">
          <p>
            <strong>Dirigido a:&nbsp;&nbsp;</strong>Estudiantes
          </p>
        </div>
        <div className=" col s12 xl12">
          <p>
            <strong>
              Requisitos Académicos y Administrativos de Ingreso del
              Participante:&nbsp;&nbsp;
            </strong>
            Estudiantes
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>Recursos de operación del Programa:&nbsp;&nbsp;</strong>
            Hojas
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>Unidades Académicas de Colaboración:&nbsp;&nbsp;</strong>
            Puebla
          </p>
        </div>
        <div className="col s12 xl6">
          <p>
            <strong>
              Sector con el que se vincula el Programa:&nbsp;&nbsp;
            </strong>
            Alumnos
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>
              Evaluación y tipo de Reconocimiento que se entregará:&nbsp;&nbsp;
            </strong>
            Examen Final
          </p>
        </div>
      </div>
      <div className="col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Seccion 3 • Planeación</p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Fundamentación:&nbsp;&nbsp;</strong>Examen Final
          </p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Introducción:&nbsp;&nbsp;</strong>Examen Final
          </p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Competencia General a desarrollar:&nbsp;&nbsp;</strong>
            Examen Final
          </p>
        </div>
      </div>
      <div className="  col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Seccion 4 • Programa</p>
        </div>
        <div className="col s12 red lighten-5" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · Nombre del Tema</strong>
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
        </div>{" "}
        <div className="col s12 red lighten-5 " style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del Tema
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
        </div>{" "}
        <div className=" red lighten-5 col s12 " style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del Tema
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
        <div className="  col s12">
          <p>
            <strong>Bibliografía en formato APA: &nbsp;&nbsp;</strong>Antonio
            Ayola
          </p>
        </div>
      </div>

      <div className="  col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}> Seccion 5 • Datos del instructor</p>
        </div>
        <div className="  col s12 m5 xl5">
          <p>
            <strong>Nombre del Instructor: &nbsp;&nbsp;</strong>Antonio Ayola
          </p>
        </div>
        <div className="col s5 m2 xl2">
          <button className="waves-effect waves-light btn  white-text teal accent-4 ">
            CV
          </button>
        </div>
        <div className="  col s6 m3 xl3">
          <button className="waves-effect waves-light btn white black-text outlined" style={{borderColor:"teal accent-4"}}>
            Documentos Probatorios
          </button>
        </div>
        <div className="col s12 xl6">
          <p>
            <strong>RFC con Homoclave:&nbsp;&nbsp;</strong>VECJ880326 XXX
          </p>
        </div>
        
       
      </div>
      <div className="  col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>
            Seccion 6 • Datos del Coordinador Academico (CA) o Jefe de Educación
            Continua
          </p>
        </div>
        <div className="  col s12">
          <div className="cyan lighten-5" style={style.infoContainer}>
            {/* <span className="small material-icons blue-text ">error</span> */}
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            <p>
              Esta seccion se llena en automatico al seleccionar el centro,
              verificar que los campos sean correctos
            </p>
          </div>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Nombre completo del CA:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Numero telefonico del CA:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Extensión del CA:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Correo electrónico del CA:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
      </div>
      <div className="  col s12">
      <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Seccion 7 • Datos de firma</p>
       </div>
        <p className="light">Datos de quien firma y autoriza la solicitud.</p>
        <div className="  col s12">
          <div className="cyan lighten-5" style={style.infoContainer}>
            {/* <i className="small material-icons blue-text ">error</i> */}
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            
            <p>
            Esta seccion se llena en automatico al seleccionar el centro,
              verificar que los campos sean correctos
            </p>
          </div>
        </div>
        <div className=" col s12 m6 xl6">
          <p>
            <strong>Nombre del Director:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Correo electrónico del Director:&nbsp;&nbsp;</strong>
            Programa de Informatica
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Nombre del Subdirector:&nbsp;&nbsp;</strong>Programa de
            Informatica
          </p>
        </div>
        <div className="col  s12 m6 xl6" style={{marginBottom:"10px"}}>
          <p>
            <strong>Correo electrónico del Subdirector:&nbsp;&nbsp;</strong>
            Programa de Informatica
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumenSolicitud;
