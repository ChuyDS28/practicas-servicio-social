import axios from "../axios";

export function obtenerUsuario(id) {
  return axios.get(`/usuarios/${id}`);
}

export function activarUsuario(id) {
  return axios.patch(`/usuarios/${id}/activar`);
}

export function desactivarUsuario(id, data) {
  return axios.patch(`/usuarios/${id}`, { activo: false });
}

export function obtenerUsuarios(pag) {
  return axios.get(`usuarios`, {
    params: { pagina: pag, tam: 50 },
  });
}


export function editarUsuarios(id, data) {
  return axios.patch|(`/usuarios/${id}`, 
    data
  );
}





