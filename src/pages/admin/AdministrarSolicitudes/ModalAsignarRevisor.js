/* import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import {asignarRevisor} from "../../../api/services/admin/solicitudes";
import axios from "../../axios";
import { obtenerUsuarios } from "../../../api/services/usuarios"

  const ModalAsignarRevisor = () => {
    return (
      <div className="modal-content  ">
        <h5>Asignar Revisor</h5>


            <div className="col s6">
              <label>Unidad Academica</label>
              <select
                className="browser-default"
                required
                name=""
              
              >
                {revisor.map((usuario) => (
                    <option value={usuario.id}key={usuario.id }>
                      
                     {usuario.rol === "REVISOR" &&(usuario.nombre)}
                    </option>
                  ))}

              </select>
              <br />
            </div>

        <br />
        <button onSubmit={asignarRevisor} type="submit" className="waves-effect waves-light btn   ">
          Asignar
          <i className="material-icons right">picture_as_pdf</i>
        </button>
        <button className="modal-close waves-effect waves-green btn-flat right">
          Cerrar
        </button>
      </div>
    );
  }; */