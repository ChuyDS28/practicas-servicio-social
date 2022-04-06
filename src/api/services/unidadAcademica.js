import axios from "../axios";

export function obtenerUnidades(pag) {
    return axios.get(`unidadesAcademicas`, {
      params: { pagina: pag, tam: 5 },
    });
  }
  export function obtenerDetalles(id){
    return axios.get(`unidadesAcademicas/${id}/directivos`);
  }
  export function agregarUnidadAcademica(data){
    return axios.post(`unidadesAcademicas/`, data);
  }
  export function editarUnidadesAcademicas(id,data){
    return axios.put(`unidadesAcademicas/${id}`, data);
  }
  export function eliminarUnidadesAcademicas(id){
    return axios.delete(`unidadesAcademicas/${id}`);
  }
  