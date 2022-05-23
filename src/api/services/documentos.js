import axios from "../axios";

export function DescargarDocumentos(id){
    return axios.get(`/documentos/${id}/descargar`, {
        responseType: 'blob',
      })
}