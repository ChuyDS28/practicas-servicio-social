import axios from "axios";
import { getToken } from "./auth";

const baseURL = "http://148.204.63.165/api";

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
    console.log(config);
    const token = getToken();
    console.log(token);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
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
    if (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log("Error 401 No autorizado");
          window.location.replace("/");
        }
        if (error.response.status === 404) {
          console.log("Recurso no encontrado");
          alert("404 Recurso no encontrado");
          // window.location.replace("/account");
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
