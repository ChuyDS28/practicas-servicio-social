import React, { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  activarUsuario,
  desactivarUsuario,
  eliminarUsuario,
} from "../../../api/services/usuarios";
import M from "materialize-css/dist/js/materialize.min.js";
import Modal from "../../../components/Modal";
import DatosUsuario from "./DatosUsuario";
import EditarUsuario from "./EditarUsuario";

const usersConfig = {
  ADMINISTRADOR: { icon: "grade" },
  SUBDIRECTOR: { icon: "local_library" },
  REVISOR: { icon: "rate_review" },
  REPORTEADOR: { icon: "book" },
  DIRECTOR: { icon: "school" },
};
const status = {
  activada: { badge: "new badge green", title: "Cuenta activada" },
  sinActivar: {
    badge: "new badge yellow darken-3",
    title: "Cuenta sin activar",
  },
  deshabilitada: { badge: "new badge grey", title: "Cuenta desactivada" },
};
const FilaU = (props) => {
  const { fn, getUsuarios, setUsers, users } = props;
  const [modalInfo, setModalInfo] = useState(false);
  const [EditInfo, setEditlInfo] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const [user, setUser] = useState(props.user);

  function getStatus() {
    if (!user.activo) {
      return status.sinActivar;
    }
    return user.deshabilitada ? status.deshabilitada : status.activada;
  }

  async function handleActivarUsuario() {
    try {
      const response = await activarUsuario(user.id);
      setUser({ ...user, activo: true });
      console.log(response);
      M.toast({
        html: `Usuario Activado`,
        classes: "green",
      });
      //getUsuarios();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  async function handleDesactivarUsuario() {
    try {
      console.log(user);
      const response = await desactivarUsuario(user.id, user);
      setUser({ ...user, activo: false });

      console.log(response);
      M.toast({
        html: `Usuario Desactivado`,
        classes: "amber darken-2",
      });
      //getUsuarios();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
  async function handleEliminarUsuario() {
    try {
      const response = await eliminarUsuario(user.id);
      const newUsers = users.filter((user) => user.id !== user.id);
      setUsers(newUsers);
      console.log(response);
      M.toast({
        html: `Usuario Eliminado`,
        classes: "Amber",
      });
      getUsuarios();
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }

  return (
    <>
      <Modal open={modalDelete} fnCloseModal={() => setModalDelete(false)}>
        <div className="modal-content  ">
          <div className="red darken-2  white-text section center">
            <h5 className="center ">
              ¿Seguro que desea eliminar al usuario {user.nombre} ?
            </h5>
          </div>
          <br />
          <div className="row">
            <div className="col s6">
              <button
                className="waves-effect waves-light btn red "
                onClick={handleEliminarUsuario}
              >
                <i className="material-icons left">delete</i> Eliminar usuario
              </button>
            </div>
            <div className="col s6">
              <button
                className="waves-effect waves-light btn blue right"
                onClick={() => {
                  setModalDelete(false);
                }}
              >
                <i className="material-icons left">block</i> Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={modalInfo} fnCloseModal={() => setModalInfo(false)}>
        <DatosUsuario user={user} />
      </Modal>
      <Modal open={EditInfo} fnCloseModal={() => setEditlInfo(false)}>
        <EditarUsuario user={user} />
      </Modal>

      <tr style={{ fontSize: "1rem" }}>
        <td>{`${user.nombre} ${user.primerApellido} ${user.segundoApellido}`}</td>
        <td>
          <i className="material-icons  blue-grey-text text-darken-3  left circle  teal lighten-4   ">
            {usersConfig[user.rol].icon}
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
              <button
                className="waves-effect waves-light btn-small"
                href={props.link}
              >
                habilitar cuenta
              </button>
            ) : (
              <button
                className="waves-effect waves-light btn-small grey darken-1"
                onClick={handleDesactivarUsuario}
              >
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
            onClick={() => {
              setModalInfo(true);
            }}
          >
            Ver
          </button>
        </td>
        {user.rol !== "ADMINISTRADOR" && (
          <>
            <td>
              <button
                class="waves-effect waves-teal  btn-flat"
                onClick={() => {
                  setEditlInfo(true);
                }}
              >
                <i class="material-icons yellow-text text-darken-4">edit</i>
              </button>
            </td>
            <td>
              <button
                class="waves-effect waves-teal btn-flat"
                // onClick={handleEliminarUsuario}
                onClick={() => {
                  setModalDelete(true);
                }}
              >
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
