import axios from "../axios";

export function obtenerUsuario(id) {
  return axios.get(`/usuarios/${id}`);
}

export function activarUsuario(id) {
  return axios.patch(`/usuarios/${id}/activar`);
}
export function obtenerUsuarios(pag) {
  return axios.get(`usuarios`, {
    params: { pagina: pag, tam: 50 },
  });
}
