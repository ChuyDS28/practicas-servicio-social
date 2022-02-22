import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { activarUsuario } from "../../../api/services/usuarios";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../../../components/Modal";
import DatosUsuario from "./DatosUsuario";
import EditarUsuario from "./EditarUsuario";

const users = {
  ADMINISTRADOR: { icon: "book" },
  SUBDIRECTOR: { icon: "local_library" },
  REVISOR: { icon: "rate_review" },
  REPORTEADOR: { icon: "book" },
  DIRECTOR: { icon: "book" },
};
const status = {
  activada: { badge: "new badge green", title: "Cuenta activada" },
  sinActivar: {
    badge: "new badge amber darken-4",
    title: "Cuenta sin activar",
  },
  deshabilitada: { badge: "new badge grey", title: "Cuenta desactivada" },
};
const FilaU = (props) => {
  const { user, fn, getUsuarios } = props;
  const [modalInfo, setModalInfo] = useState(false);

  function getStatus() {
    if (!user.activo) {
      return status.sinActivar;
    }
    return user.deshabilitada ? status.deshabilitada : status.activada;
  }

  async function handleActivarUsuario() {
    try {
      const response = await activarUsuario(user.id);
      console.log(response);
      M.toast({
        html: `Usuario Activado`,
        classes: "green",
      });
      getUsuarios();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  
  return (
    <>
    
      <Modal open={modalInfo} fnCloseModal={() => setModalInfo(false)}>
        <DatosUsuario user={user}/>
      </Modal>
      
    <tr style={{ fontSize: "1rem" }}>
      <td>{`${user.nombre} ${user.primerApellido} ${user.segundoApellido}`}</td>
      <td>
        <i className="material-icons  blue-grey-text text-darken-3  left circle  teal lighten-4   ">
          {users[user.rol].icon}
        </i>
        {user.rol}
      </td>
      <td>{user.numeroEmpleado}</td>
      <td>
        <span className={getStatus().badge} data-badge-caption="">
          {getStatus().title}
        </span>
      </td>
      <td>
        {user.activo ? (
          user.deshabilitada ? (
            <button className="waves-effect waves-light btn-small" href={props.link}>
              habilitar cuenta
            </button>
          ) : (
            <button className="waves-effect waves-light btn-small grey darken-1">
              Deshabilitar Cuenta
            </button>
          )
        ) : (
          <button
            className=" waves-effect waves-light btn-small"
            onClick={handleActivarUsuario}
          >
            Activar cuenta
          </button>
        )}
      </td>

      <td>
        <button
          className="waves-effect waves-light btn-small blue darken-2"
          onClick={() => {setModalInfo(true)}}
        >
          Ver
        </button>
      </td>
      {user.rol !== "ADMINISTRADOR" && (
        <>
          <td>
            <button class="waves-effect waves-teal  btn-flat">
              <i class="material-icons yellow-text text-darken-4"
                onClick={() => {setModalInfo(true)}}>
                edit</i>
            </button>
          </td>
          <td>
            <button class="waves-effect waves-teal btn-flat">
              <i class="material-icons red-text text-darken-2">delete</i>
            </button>
          </td>
        </>
      )}
    </tr>
    </>
  );
};

export default FilaU;
