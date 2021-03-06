import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { agregarUnidadAcademica } from "../../../api/services/unidadAcademica";

const style = {
  blockquote: {
    borderColor: "#ffffff" /* Just change the color value and that's it*/,
  },
  headerImg: {
    position: "relative",
    width: "100%",
    height: "110%",
    top: "0",
    objectFit: "cover",
  },
  headerFilter: {
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    top: "0",
    height: "100%",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50% , -50%)",
    color: "#fff",
  },
  subtitleContainer: {
    width: "fit-content",
    border: "2px solid #fff",
    margin: "auto",
    padding: "0 1rem",
  },
};

const AgregarEscuela = (props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    clave: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const clear = () => {
    setFormData({
      nombre: "",
      clave: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (formData.nombre == "") {
      M.toast({
        html: "Ingresa el nombre de la Unidad Academica",
        classes: "red",
      });
      return;
    }
    if (formData.clave == "") {
      M.toast({
        html: "Ingresa la clave de la Unidad Academica",
        classes: "red",
      });
      return;
    }

    try {
      const data = {
        nombre: formData.nombre,
        clave: formData.clave,
      };
      const unidad = await agregarUnidadAcademica(data);
      console.log(unidad);
      M.updateTextFields();
      M.toast({
        html: "Unidad Academica Registrada",
        classes: "green",
      });
      props.getEscuelas();
      props.reset();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      props.agregarEscuela(false);
      clear();
      setLoading(false);
    }
  };
  return (
    <form onSumit={handleSubmit}>
      <div className="modal-content row ">
        <h5>Registrar Escuela, Centro o Unidad </h5>
        <div className="input-field col s8">
          <input
            name="nombre"
            value={formData.nombre}
            id="nombreCurso"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="nombreCurso">Nombre del centro</label>
        </div>
        <div className="input-field col s4">
          <input
            name="clave"
            value={formData.clave}
            id="claveCurso"
            type="text"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="claveCurso">Siglas o clave</label>
        </div>
        {/*   <div className="input-field col s12">
          <blockquote>
            <p>
              Datos del Coordinador Acad??mico (CA) o Jefe de Educaci??n Continua
              - (Opcional)
            </p>
          </blockquote>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre completo del CA</label>
        </div>
        <div className="input-field col s4">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">N??mero telef??nico del CA</label>
        </div>
        <div className="input-field col s3">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Extensi??n del CA</label>
        </div>
        <div className="input-field col s5">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Correo electr??nico del CA</label>
        </div>
        <div className="input-field col s12">
          <blockquote>
            <p>Datos del Director - (Opcional)</p>
          </blockquote>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre completo del Director</label>
        </div>
        <div className="input-field col s4">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">N??mero telef??nico del Director</label>
        </div>
        <div className="input-field col s3">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Extensi??n del Director</label>
        </div>
        <div className="input-field col s5">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Correo electr??nico del Director</label>
        </div>
        <div className="input-field col s12">
          <blockquote>
            <p>Datos del Subdirector - (Opcional)</p>
          </blockquote>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Nombre completo del Subdirector</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">N??mero telef??nico del Subdirector</label>
        </div>
        <div className="input-field col s6">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">Extensi??n del Subdirector</label>
        </div>
        <div className="input-field col s12">
          <input id="nombreCurso" type="text" required />
          <label htmlFor="nombreCurso">
            Correo electr??nico del Subdirector
          </label>
        </div> */}

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
            Registrar Escuela
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
    </form>
  );
};
export default AgregarEscuela;
