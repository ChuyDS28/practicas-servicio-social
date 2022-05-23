import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {
  solicitudAgregarPlaneacion,
  solicitudActualizarPlaneacion,
  obtenerSolicitudPlaneacion,
} from "../../../api/services/subdirector/solicitudRegistro";
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

const Section3 = (props) => {
  const [formValues, setFormValues] = useState({
    fundamentacion: "",
    introduccion: "",
    competenciaGeneral: "",
    idPrograma: Number(props.solicitudId),
  });
  useEffect(() => {
    getPlaneacion();
  }, []);

  async function getPlaneacion() {
    try {
      const response = await obtenerSolicitudPlaneacion(props.solicitudId);
      console.log(response);
      setFormValues({
        fundamentacion: response.data.fundamentacion,
         introduccion: response.data.introduccion,
        competenciaGeneral: response.data.competenciaGeneral,
        idPrograma: props.solicitudId,
        id: response.data.id, 
      });

      M.updateTextFields();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);

    if (
      formValues.fundamentacion === "" ||
      formValues.introduccion === "" ||
      formValues.competenciaGeneral === ""
    ) {
      M.toast({ html: "Llenar todos los campos", classes: "red" });
      return;
    }

    try {
      if (formValues.id) {
        const response = await solicitudActualizarPlaneacion(formValues.id, {
          ...formValues,
        });
        console.log(response);
      } else {
        const response = await solicitudAgregarPlaneacion({
          ...formValues,
          idPrograma: props.solicitudId,
        });
        console.log(response);
        setFormValues({...formValues,id: response.data.id})
      }
      
      M.toast({
        html: "Datos especificos guardados",
        classes: "green",
      });
      props.seguir("section4");
    } catch (error) {
      console.log(error);
      console.log(error.response);
      M.toast({ html: "Error al registrar", classes: "red" });
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="row">
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
            posuere eros quam, non sagittis nisl rutrum at. Suspendisse faucibus
            dignissim dapibus. Sed gravida et orci a laoreet. Donec sagittis dui
            rhoncus eros pretium, vitae gravida libero tempor. Integer sodales
            urna at risus pretium imperdiet. Mauris ut arcu dui. Etiam faucibus
            sodales sapien sit amet consectetur. Maecenas fermentum tellus
            sollicitudin, varius libero vitae, vulputate quam. Praesent at
            tortor eu nulla iaculis tempus.
          </p>
        </div>
      </div>
      <div className="input-field col s12">
        <input
          id="fundamentacion"
          name="fundamentacion"
          onChange={handleChange}
          value={formValues.fundamentacion}
          type="text"
          required
        />
        <label htmlFor="fundamentacion">Fundamentación</label>
      </div>
      <div className="input-field col s12">
        <input
          id="introduccion"
          name="introduccion"
          onChange={handleChange}
          value={formValues.introduccion}
          type="text"
          required
        />
        <label htmlFor="introduccion">Introducción</label>
      </div>
      <div className="input-field col s12">
        <input
          id="competenciaGeneral"
          type="text"
          name="competenciaGeneral"
          onChange={handleChange}
          value={formValues.competenciaGeneral}
          required
        />
        <label htmlFor="competenciaGeneral">
          Competencia general a desarrollar
        </label>
      </div>
      <div className="col s6 center">
        <button
          onClick={() => props.regresar("section2")}
          className="waves-effect waves-light btn "
        >
          Regresar
        </button>
      </div>
      <div className="col s6 center">
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
export default Section3;
