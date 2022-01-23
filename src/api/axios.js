import axios from "axios";
import { getToken } from "./auth";

//const baseURL = "http://148.204.63.165/api";
const baseURL = "http://148.204.63.240/api";

//****usuarios****/
//  admin
//subdirector1 subdirector2
// director1
// revisor1
// reporteador1

export const instance = axios.create({
  baseURL,
  headers: {
    common: {
      RPF_DEVICE: "web",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
});
//Interceptor agregar token
instance.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
// Interceptor para enviar datos recibidos y error 401
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response.status === 401) {
      console.log("Error 401 No autorizado");
      window.location.replace("/");
      return Promise.reject(error);
    }
    if (error && error.response.status === 404) {
      console.log("Recurso no encontrado");
      alert("404 Recurso no encontrado");
      return Promise.reject(error);
    }
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default instance;
