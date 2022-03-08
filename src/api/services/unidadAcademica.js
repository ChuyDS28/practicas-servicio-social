import axios from "../axios";

export function obtenerUnidades(pag) {
    return axios.get(`unidadesAcademicas`, {
      params: { pagina: pag, tam: 50 },
    });
  }

  