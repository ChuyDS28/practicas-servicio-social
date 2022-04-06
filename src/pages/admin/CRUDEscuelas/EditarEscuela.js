import React, {useState, useEffect} from "react";
import M from "materialize-css/dist/js/materialize.min";
import { editarUnidadesAcademicas } from "../../../api/services/unidadAcademica";
import { clear } from "@testing-library/user-event/dist/clear";
// import { useEffect } from "react/cjs/react.production.min";

const EditarEscuela = (props) => {
  const [formData, setFormData] = useState({
    nombre: props.nombre,
    clave: props.clave,
  });

  useEffect(() => {
    M.updateTextFields();
  },[]);

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
    try{
      const data = {
        nombre: formData.nombre,
        clave: formData.clave
      };
      const unidad = await editarUnidadesAcademicas(props.id, data);
      console.log(unidad);
      M.updateTextFields();
      M.toast({
        html: "La unidad ha sido actualizada con exito",
        classes: "green",
      });
      props.getEscuelas();
    }catch(error){
      console.log(error);
      console.log(error.response);
    }finally{
      clear();
      props.editarEscuela(false);
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
              id="nombreCurso"
              type="text"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="nombreCurso">Siglas o clave</label>
          </div>
          <div className="input-field col s12">
            <blockquote>
              <p>
                Datos del Coordinador Académico (CA) o Jefe de Educación
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
            <label htmlFor="nombreCurso">Número telefónico del Director</label>
          </div>
          <div className="input-field col s3">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extensión del Director</label>
          </div>
          <div className="input-field col s5">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Correo electrónico del Director</label>
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
              Número telefónico del Subdirector
            </label>
          </div>
          <div className="input-field col s6">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">Extensión del Subdirector</label>
          </div>
          <div className="input-field col s12">
            <input id="nombreCurso" type="text" required />
            <label htmlFor="nombreCurso">
              Correo electrónico del Subdirector
            </label>
          </div>

          <br />
          <button
            type="submit"
            className="waves-effect waves-light btn   "
            onClick={handleSubmit}
          >
            Editar
            <i className="material-icons right">edit</i>
          </button>
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
