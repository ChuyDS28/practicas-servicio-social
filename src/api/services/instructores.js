import axios from "../axios";

export function registrarInstructor(data) {
  return axios.post(`/instructores`, data);
}
export function obtenerInstructor(id) {
  return axios.get(`/instructores/${id}`);
}
export function agregarCV(id, data) {
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "CV");
  return axios.get(`/instructores/${id}/documentos`, formData, {
    "content-type": "multipart/form-data",
  });
}
export function solicitudEditarTema(data, id) {
  return axios.put(`/temas/${id}`, data);
}
