import M from "materialize-css/dist/js/materialize.min.js";
import React, { useEffect, useState } from "react";
import { obtenerUnidades } from "../../api/services/unidadAcademica";
import { eliminarInstructor } from "../../api/services/instructores";

const style = {
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  headerTitle: {
    position: "absolute",
    top: "50%",
    left: "30%",
    height: "100%",
    transform: " translate(-50% , -50%)",
    width: "50%",
  },
  fon: {
    height: "100%",
    width: "100%",
    left: "0px",
    top: "0px",
    position: "absolute",
    objectFit: "cover",
  },
  fon7: {
    height: "91%",
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
    top: "0%",
    height: "80%",
    width: "85px",
  },
  imag3: {
    position: "absolute",
    right: "180px",
    top: "0px",
    height: "100%",
    width: "92%",
  },
  imag4: {
    position: "absolute",
    right: "0px",
    top: "0px",
    height: "100%",
    width: "60%",
  },
  botones: {
    borderRadius: "20px",
  },
  cards: {
    width: "600px",
    position: "relative",
    left: "6%",
  },
  div: {
    height: "100%",
    position: "absolute",
    top: "0%",
    right: "0%",
  },
  infoContainer: {
    padding: "25px",
    borderRadius: "5px",
  },
  tit: {
    left: "0px",
    position: "absolute",
  },
};

const ModalEliminarIstructor = (props) => {
  const [Unidades, setunidades] = useState([]);
  const [formValues, setFormValues] = useState({
    nombre: props.nombre,
    area: props.area,
    rfc: props.rfc,
    idUnidadAcademica: props.unidad,
  });

  async function deleteInstructor(){
    try{
      const ins = await eliminarInstructor(props.id);
      M.toast({
        html: "Instructor removido",
        classes: "green",
      });
      props.getInstructores();
      props.modalEliminar(false);
    }catch(error){
      console.log(error);
    }
    
  };
  return (
      <div className="modal-content  ">
        <h5>Eliminar Instructor</h5>
        <p>
          <strong>Deseas eliminar al instructor {props.nombre}?</strong>
          <br />
        </p>

        <br />
        <button
          type="submit"
          className="waves-effect waves-light btn  left "
          onClick={deleteInstructor}
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
export default ModalEliminarIstructor;
