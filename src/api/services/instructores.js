import axios from "../axios";

export function registrarInstructor(data) {
  return axios.post(`/instructores`, data);
}
export function obtenerInstructores(pag) {
  return axios.get(`/instructores`, {
    params: { pagina: pag, tam: 15 },
  });
}
export function obtenerInstructor(id) {
  return axios.get(`/instructores/${id}`);
}
export function obtenerDocumentosInstructor(id) {
  return axios.get(`/instructores/${id}/documentos`);
}
export function agregarCV(id, data) {
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "CV");
  return axios.post(`/instructores/${id}/documentos`, formData, {
    "content-type": "multipart/form-data",
  });
}
export function agregarDocsProbatorios(id, data) {
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "PROBATORIO");
  return axios.post(`/instructores/${id}/documentos`, formData, {
    "content-type": "multipart/form-data",
  });
}
export function solicitudEditarTema(data, id) {
  return axios.put(`/temas/${id}`, data);
}
export function editarInstructor(data, id){
  return axios.put(`/instructores/${id}`, data);
}
export function eliminarInstructor(id){
  return axios.delete(`/instructores/${id}`);
}