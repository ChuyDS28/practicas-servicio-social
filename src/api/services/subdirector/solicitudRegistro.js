import axios from "../axios";

export function solicitudDatosGenerales(data) {
  return axios.post(`/programas`, data);
}
export function obtenerSolicitud(id) {
  return axios.get(`/programas/${id}`);
}

export function solicitudDatosEspecificos(data) {
  return axios.post(`/datosEspecificos`, data);
}
export function obtenerSolicitudDatosEspecificos(id) {
  return axios.get(`/programas/${id}/DatosEspecificos`);
}

export function solicitudPlaneacion(data) {
  return axios.post(`/planeaciones`, data);
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
