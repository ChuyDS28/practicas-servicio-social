import axios from "axios";


export function obtenerSolicitudes(pag) {
    return axios.get(`/solicitudes`, {
      params: { pagina: pag, tam: 50 },
    });
  }

  export function obtenerSolicitudesSinRevisor(pag) {
    return axios.get(`/solicitudes/sinRevisor`, {
      params: { pagina: pag, tam: 50 },
    });
  }

export function asignarRevisor(idSolicitud, idRevisor) {
    return axios.patch(`solicitudes/${idSolicitud}`, {
      idRevisor: idRevisor,
    });
  }