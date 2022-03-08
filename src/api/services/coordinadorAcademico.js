import axios from "../axios";

export function obtenerCoordinadorAcademico(pag) {
    return axios.get(`/coordinadoresAcademicos`,{
    params: { pagina: pag, tam: 50 },});

  }