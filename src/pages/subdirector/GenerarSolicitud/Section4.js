import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {
  solicitudAgregarTema,
  solicitudEditarTema,
  obtenerSolicitud,
  solicitudAgregarBibliografia

} from "../../../api/services/subdirector/solicitudRegistro";
const style = {
  temaContainer: {
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #9e9e9e",
    padding: "15px",
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

const Section4 = (props) => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    competenciaEspecifica: "",
    actividadDeAprendizaje: "",
    evidenciaDeAprendizaje: "",
    horasDedicadas: "",
    idPrograma: Number(props.programaId),
  });

  const [bibliografia, setBibliografia] = useState("");
  
  useEffect(() => {
    getSolicitud();

  }, []);

  async function getSolicitud() {
    try {
     
      const response = await obtenerSolicitud(props.programaId);
      console.log(response);
   setBibliografia( response.data.bibliografia) 
      M.updateTextFields();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    if (
      formValues.nombre === "" ||
      formValues.competenciaEspecifica === "" ||
      formValues.actividadDeAprendizaje === "" ||
      formValues.evidenciaDeAprendizaje === "" ||
      formValues.horasDedicadas === ""
    ) {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    } 
    try {
     
        const response = await solicitudAgregarTema({
          ...formValues,
          horasDedicadas:Number(formValues.horasDedicadas),
          idPrograma: Number(props.solicitudId),
        });
        console.log(response);
        setFormValues({...formValues,id: response.data.id})
      
      M.toast({
        html: "Datos especificos guardados",
        classes: "green",
      });
      props.seguir("section5");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };
  
  const handleSubmit1 = async (event) => {
    event.preventDefault();
    console.log(bibliografia);

    if (
      bibliografia === "" 
    ) {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    } 
    try {
     
      const response = await solicitudAgregarBibliografia({bibliografia:bibliografia},props.programaId)
        console.log(response);
      
      M.toast({
        html: "Datos especificos guardados",
        classes: "green",
      });
      props.seguir("section5");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };
  const Tema = () => {
    return (
      <div className="col s12  " style={style.temaContainer}>
        <h6 className="blue-grey-text text-darken-4">
          <strong>Tema 1 · </strong>Nombre del tema
          <button className="waves-effect waves-teal  btn-flat right red-text valign-wrapper">
            Borrar
            <span className="small material-icons red-text ">delete</span>
          </button>
          <button className="waves-effect waves-teal  btn-flat right yellow-text text-darken-4">
            Editar
            <i className="material-icons yellow-text text-darken-4">edit</i>
          </button>
        </h6>
        <div class="divider" style={{ margin: "15px 0" }}></div>
        <p>
          <strong>· Competencias específicas: </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elits sdf s dsdfsd
          <br />
          <strong>· Actividades de aprendizaje: </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br />
          <strong>· Evidencias de aprendizaje: </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          <br />
          <strong>· Horas dedicadas: </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    );
  };
  return (
   <>
   <form onSubmit={handleSubmit} className="row">
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
            <input
              id="nombre"
              type="text"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              required
            />
            <label htmlFor="nombre">Nombre del tema</label>
          </div>
          <div className="input-field col s12 m6 xl6">
            <input
              id="competenciaEspecifica"
              name="competenciaEspecifica"
              onChange={handleChange}
              value={formValues.competenciaEspecifica}
              type="text"
              required
            />
            <label htmlFor="competenciaEspecifica">
              Competencia específica
            </label>
          </div>
          <div className="input-field col s12 m6 xl6">
            <input
              id="actividadDeAprendizaje"
              name="actividadDeAprendizaje"
              type="text"
              onChange={handleChange}
              value={formValues.actividadDeAprendizaje}
              required
            />
            <label htmlFor="actvidadDeAprendizaje">
              Actividad de aprendizaje
            </label>
          </div>
          <div className="input-field col s12 m6 xl6">
            <input
              id="evidenciaDeAprendizaje"
              name="evidenciaDeAprendizaje"
              onChange={handleChange}
              value={formValues.evidenciaDeAprendizaje}
              type="text"
              required
            />
            <label htmlFor="evidenciaDeAprendizaje">
              Evidencia de aprendizaje
            </label>
          </div>
          <div className="input-field col s12 m6 xl6">
            <input
              id="horasDedicadas"
              onChange={handleChange}
              name="horasDedicadas"
              value={formValues.horasDedicadas}
              type="number"
              required
            />
            <label htmlFor="horasDedicadas">Horas dedicadas</label>
          </div>
          <div className="input-field col s6 center">
            <button type="submit" className="waves-effect waves-light btn   ">
              Agregar tema
            </button>
          </div>
        </div>
      </div>
      </form>
      <Tema />
      <Tema />
      <Tema />
      <Tema />
      <Tema />

      <form onSubmit={handleSubmit1} className="row">
      <div className="input-field col s12">
        <input id="bibliografia" type="text" onChange={(e)=>setBibliografia(e.target.value)  } name="bibliografia" value={bibliografia} required />
        <label htmlFor="bibliografia">Bibliografía en formato APA</label>
      </div>
      <div className="col s6 center">
        <button
          onClick={() => props.regresar("section5")}
          className="waves-effect waves-light btn "
        >
          Regresar
        </button>
      </div>
      <div className="col s6 center">
        <button
          /* onClick={() => props.seguir("section5")} */
          className="waves-effect waves-light btn   "
        >
          Guardar y continuar
        </button>
      </div>
      </form>
      </>
  );
};
export default Section4;
