import axios from "../../axios";

export function obtenerStatusSolicitud(data) {
  return axios.post(`/programas`, data);
}

export function solicitudAgregarDatosGenerales(data) {
  return axios.post(`/programas`, data);
}

export function solicitudActualizarDatosGenerales(id, data) {
  return axios.put(`/programas/${id}`, data);
}

export function obtenerSolicitud(id) {
  return axios.get(`/programas/${id}`);
}

export function solicitudAgregarDatosEspecificos(data) {
  return axios.post(`/datosEspecificos`, data);
}
export function solicitudActualizarDatosEspecificos(id, data) {
  return axios.put(`/datosEspecificos/${id}`, data);
}
export function obtenerSolicitudDatosEspecificos(id) {
  return axios.get(`/programas/${id}/datosEspecificos`);
}

export function solicitudAgregarPlaneacion(data) {
  return axios.post(`/planeaciones`, data);
}

export function solicitudActualizarPlaneacion(id, data) {
  return axios.put(`/planeaciones/${id}`, data);
}

export function obtenerSolicitudPlaneacion(id) {
  return axios.get(`/programas/${id}/planeaciones`);
}

export function solicitudAgregarTema(data) {
  return axios.post(`/temas`, data);
}
export function solicitudBorrarTema(id) {
  return axios.delete(`/temas/${id}`);
}
export function solicitudEditarTema(data, id) {
  return axios.put(`/temas/${id}`, data);
}

export function solicitudAgregarBibliografia(data, id) {
  return axios.patch(`/programas/${id}`, data);
}
export function obtenerSolicitudes(id){
  return axios.get(`/solicitudes/${id}`);
}