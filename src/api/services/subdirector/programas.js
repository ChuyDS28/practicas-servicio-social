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
  return axios.get(`/programa/${id}/instructores`);
}

export function actualizarPrograma(id,data) {
  return axios.put(`/programas/${id}`, data);
}
