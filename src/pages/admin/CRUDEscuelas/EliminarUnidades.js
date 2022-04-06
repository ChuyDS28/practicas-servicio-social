import React from "react";
import M from "materialize-css/dist/js/materialize.min";
import { eliminarUnidadesAcademicas } from "../../../api/services/unidadAcademica";

const EliminarUnidades = (props) => {
    async function eliminarEscuela(){
        try{
            const res= await eliminarUnidadesAcademicas(props.id);
            M.toast({
                html: "Unidad Academica Removida",
                classes: "green",
              });
            props.getEscuelas();
            props.setEliminarUnidades(false);
        }
        catch(error){
            console.log(error);
            console.log(error.response);
        }
    }
    return(
        <div className="modal-content  ">
        <h5>Eliminar Unidad Academica</h5>
        <p>
          <strong>Deseas eliminar la unidad academica?</strong>
          <br />
        </p>

        <br/>
        <button
          type="submit"
          className="waves-effect waves-light btn  left "
          onClick={eliminarEscuela}
        >
          Eliminar
          <i className="material-icons left">delete</i>
        </button>
        <button
          className="modal-close waves-effect waves-green btn-flat "
        >
          Cancelar
        </button>
      </div>
    );
};
export default EliminarUnidades;