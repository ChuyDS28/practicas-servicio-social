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
            Sección 1 • Datos generales de identificación del programa
          </p>
        </div>
        <div className="col s12 m12 l12 xl9">
          <p>
            <strong>Nombre del programa:&nbsp;&nbsp;</strong>Programa de Informática
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
            <strong>Nivel:&nbsp;&nbsp;</strong>Básico
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Tipo de programa:&nbsp;&nbsp;</strong>Taller
          </p>
        </div>
        <div className="col s12 m4 xl4">
          <p>
            <strong>Área:&nbsp;&nbsp;</strong>TICs
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
            Sección 2 • Datos específicos por Programa{" "}
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
              Requisitos académicos y administrativos de ingreso del
              participante:&nbsp;&nbsp;
            </strong>
            Estudiantes
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>Recursos de operación del programa:&nbsp;&nbsp;</strong>
            Hojas
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>Unidades Académicas de colaboración:&nbsp;&nbsp;</strong>
            Puebla
          </p>
        </div>
        <div className="col s12 xl6">
          <p>
            <strong>
              Sector con el que se vincula el programa:&nbsp;&nbsp;
            </strong>
            Alumnos
          </p>
        </div>
        <div className="col s12 xl12">
          <p>
            <strong>
              Evaluación y tipo de reconocimiento que se entregará:&nbsp;&nbsp;
            </strong>
            Examen final
          </p>
        </div>
      </div>
      <div className="col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Sección 3 • Planeación</p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Fundamentación:&nbsp;&nbsp;</strong>Examen final
          </p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Introducción:&nbsp;&nbsp;</strong>Examen final
          </p>
        </div>
        <div className="  col s12">
          <p>
            <strong>Competencia general a desarrollar:&nbsp;&nbsp;</strong>
            Examen final
          </p>
        </div>
      </div>
      <div className="  col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Sección 4 • Programa</p>
        </div>
        <div className="col s12 red lighten-5" style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · Nombre del tema</strong>
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
        </div>{" "}
        <div className="col s12 red lighten-5 " style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
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
        </div>{" "}
        <div className=" red lighten-5 col s12 " style={style.temaContainer}>
          <h6>
            <strong>Tema 1 · </strong>Nombre del tema
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
        <div className="  col s12">
          <p>
            <strong>Bibliografía en formato APA: &nbsp;&nbsp;</strong>Antonio
            Ayola
          </p>
        </div>
      </div>

      <div className="  col s12">
        <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}> Sección 5 • Datos del instructor</p>
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
            Documentos probatorios
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
            Sección 6 • Datos del Coordinador Academico (CA) o Jefe de Educación
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
              Esta sección se llena en automático al seleccionar el Centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Nombre completo del CA:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Número telefónico del CA:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Extensión del CA:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Correo electrónico del CA:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
      </div>
      <div className="  col s12">
      <div className="input-field orange lighten-4">
          <p style={{ fontSize: "22px" }}>Sección 7 • Datos de firma</p>
       </div>
        <p className="light">Datos de quien firma y autoriza la solicitud.</p>
        <div className="  col s12">
          <div className="cyan lighten-5" style={style.infoContainer}>
            {/* <i className="small material-icons blue-text ">error</i> */}
            <span className="new badge blue darken-2" data-badge-caption="">
              Nota
            </span>
            
            <p>
            Esta sección se llena en automático al seleccionar el Centro,
              verificar que los campos sean correctos.
            </p>
          </div>
        </div>
        <div className=" col s12 m6 xl6">
          <p>
            <strong>Nombre del Director:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Correo electrónico del Director:&nbsp;&nbsp;</strong>
            Programa de Informática
          </p>
        </div>
        <div className="col s12 m6 xl6">
          <p>
            <strong>Nombre del Subdirector:&nbsp;&nbsp;</strong>Programa de
            Informática
          </p>
        </div>
        <div className="col  s12 m6 xl6" style={{marginBottom:"10px"}}>
          <p>
            <strong>Correo electrónico del Subdirector:&nbsp;&nbsp;</strong>
            Programa de Informática
          </p>
        </div>
      </div>
    </>
  );
};

export default ResumenSolicitud;
