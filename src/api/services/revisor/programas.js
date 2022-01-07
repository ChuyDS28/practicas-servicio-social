import axios from "../axios";

export function revisarSolicitus(id, data) {
  return axios.patch(`/solicitudes/${id}`, data);
}

export function obtenerProgramas() {
  return axios.get(`/solicitudes`);
}

export function instructoresDelPrograma(id) {
  return axios.get(`/programa/${id}/instructores`);
}
