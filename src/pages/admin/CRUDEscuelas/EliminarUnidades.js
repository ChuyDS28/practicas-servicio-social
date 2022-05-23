import React, {useState} from "react";
import M from "materialize-css/dist/js/materialize.min";
import { eliminarUnidadesAcademicas } from "../../../api/services/unidadAcademica";

const EliminarUnidades = (props) => {
  const [loading, setLoading] = useState(false);

  async function eliminarEscuela() {
    setLoading(true);
    try {
      const res = await eliminarUnidadesAcademicas(props.id);
      M.toast({
        html: "Unidad Academica Removida",
        classes: "green",
      });
      props.getEscuelas();
      props.reset();
      props.setEliminarUnidades(false);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="modal-content  ">
      <h5>Eliminar Unidad Academica</h5>
      <p>
        <strong>Deseas eliminar la unidad academica?</strong>
        <br />
      </p>

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
          className="waves-effect waves-light btn  left "
          onClick={eliminarEscuela}
        >
          Eliminar
          <i className="material-icons left">delete</i>
        </button>
      )}

      <button className="modal-close waves-effect waves-green btn-flat ">
        Cancelar
      </button>
    </div>
  );
};
export default EliminarUnidades;
