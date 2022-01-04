import axios from "../axios";

export function registrarUsuario(data) {
  return axios.post(`/signup`, data);
}
