import axios from "../../axios";

export function crearPrograma(data) {
  return axios.post(`/solicitudes/inicio`, data);
}

export function obtenerPrograma(id) {
  return axios.get(`/solicitudes/${id}`);
}

export function obtenerMisProgramas(id, pag) {
  return axios.get(`/usuarios/${id}/solicitudes`, {
    params: { pagina: pag, tam: 50 },
  });
}

export function obtenerProgramas(pag) {
  return axios.get(`/solicitudes`, {
    params: { pagina: pag, tam: 50 },
  });
}

export function instructoresDelPrograma(id) {
  return axios.get(`/programas/${id}/instructores`);
}

export function actualizarPrograma(id,data) {
  return axios.put(`/programas/${id}`, {idInstructor:1});
}

export function agregarInstructor(id,idInstructor) {
  return axios.post(`/programas/${id}/instructores`, {idInstructor:idInstructor});
}
export function agregarEstado(id,data){
  return axios.patch(`/solicitudes/${id}`, data)
}
export function obtenerDocumentosPrograma(id){
  return axios.get(`/solicitudes/${id}/documentos`);
}
export function obtenerDocumentosSolicitud(id){
  return axios.get(`/programas/${id}/documentos`);
}
export function agregarSolicitudFirmada(id,data){
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "SOLICITUD_FIRMADA");
  return axios.post(`/solicitudes/${id}/documentos`, formData, {
    "content-type": "multipart/form-data"
  });
}
export function agregarCartaAVAL(id,data){
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "CARTA_AVAL");
  return axios.post(`/programas/${id}/documentos`, formData, {
    "content-type": "multipart/form-data"
  });
}
export function agregarDocumentosAVAL(id,data){
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "PROBATORIO_AVAL");
  return axios.post(`/programas/${id}/documentos`, formData, {
    "content-type": "multipart/form-data"
  });
}
export function agregarCronograma(id,data){
  const formData = new FormData();
  formData.append("archivo", data);
  formData.append("tipo", "CRONOGRAMA");
  return axios.post(`/solicitudes/${id}/documentos`, formData, {
    "content-type": "multipart/form-data"
  });
}