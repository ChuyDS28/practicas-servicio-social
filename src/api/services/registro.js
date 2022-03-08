import axios from "../axios";

export function registrarUsuario(data) {
  return axios.post(`/signup`, data);
}
export function registrarRevisor(data) {
  return axios.post(`/usuarios`, data);
}
