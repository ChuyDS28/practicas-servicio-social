import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../../api/services/usuarios";
import { asignarRevisor } from "../../../api/services/admin/solicitudes";

const ModalAsignarRevisor = () => {
  const [revisores, setRevisores] = useState([]);
  const [revisorSeleccionado, setRevisorSeleccionado] = useState(" ");
  const getRevisores = async () => {
    try {
      const response = await obtenerUsuarios(0);
      console.log(response);
      setRevisores(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getRevisores();
  }, []);

  function asignarRevisorSubmit() {
    console.log("ASIGANR");
    console.log({revisorSeleccionado});
  };


  return (
    <div className="modal-content  ">
      <h5>Asignar Revisor</h5>

      <div className="col s6">
        <label>Unidad Academica</label>

        <select
          className="browser-default"
          required
          name=""
          onChange={(evento) => setRevisorSeleccionado(evento.target.value)}
          value={revisorSeleccionado}
        >


            <option value=" " >
            Seleccionar una opcion
            </option>
          {revisores
            .filter((usuario) => usuario.rol === "REVISOR")

            .map((usuario) => (
              <option value={usuario.id} key={usuario.id}>
                {usuario.rol} - {usuario.nombre}
              </option>
            ))}
        </select>

        <br />
      </div>

      <br />
      <button
        onClick={asignarRevisorSubmit}
        className="waves-effect waves-light btn   "
      >
        Asignar
        <i className="material-icons right">picture_as_pdf</i>
      </button>
      <button className="modal-close waves-effect waves-green btn-flat right">
        Cerrar
      </button>
    </div>
  );
};

export default ModalAsignarRevisor;
