import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { editarUnidadesAcademicas } from "../../../api/services/unidadAcademica";
import { clear } from "@testing-library/user-event/dist/clear";
// import { useEffect } from "react/cjs/react.production.min";

const EditarEscuela = (props) => {
  const [formData, setFormData] = useState({
    nombre: props.nombre,
    clave: props.clave,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    M.updateTextFields();
  }, []);

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
        html: "Ingresa el nuevo nombre de la unidad academica",
        classes: "red",
      });
      return;
    }
    if (formData.clave == "") {
      M.toast({
        html: "Ingresa la nueva clave de la unidad academica",
        classes: "red",
      });
      return;
    }
    try {
      const data = {
        nombre: formData.nombre,
        clave: formData.clave,
      };
      const unidad = await editarUnidadesAcademicas(props.id, data);
      console.log(unidad);
      M.updateTextFields();
      M.toast({
        html: "La unidad ha sido actualizada con exito",
        classes: "green",
      });
      props.getEscuelas();
      props.reset();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      clear();
      props.editarEscuela(false);
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="modal-content row">
          <h5>Editar Escuela, Centro o Unidad</h5>
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
          {/*  <div className="input-field col s12">
            <blockquote>
              <p>
                Datos del Coordinador Acad??mico (CA) o Jefe de Educaci??n
                Continua - (Opcional)
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
            <label htmlFor="nombreCurso">
              N??mero telef??nico del Subdirector
            </label>
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
              Editar
              <i className="material-icons right">edit</i>
            </button>
          )}
          <button
            href="#!"
            className="modal-close waves-effect waves-green btn-flat "
          >
            Cerrar
          </button>
        </div>
      </form>
    </>
  );
};
export default EditarEscuela;
