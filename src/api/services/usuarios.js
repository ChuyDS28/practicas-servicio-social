import axios from "../axios";

export function obtenerUsuario(id) {
  return axios.get(`/usuarios/${id}`);
}

export function habilitarUsuario(id) {
    return axios.patch(`/usuarios/${id}/activar`);
  }
