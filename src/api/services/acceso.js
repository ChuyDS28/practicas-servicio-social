import axios from "../axios";
import jwt_decode from "jwt-decode";
import { setToken, TOKEN_KEY } from "../auth";
import { setUserData, deleteUserData } from "../../utils/userData";

export function login(data) {
  return axios.post(`/login`, data).then((response) => {
    console.log(response);
    setToken(response.headers["Authorization"]);
    let decoded = jwt_decode(response.headers["Authorization"]);
    setUserData(decoded);
    return decoded;
  });
}

export function logout() {
  return axios.get(`/logout`).then((response) => {
    console.log("logout", response);
    deleteUserData();
    localStorage.removeItem(TOKEN_KEY);
    return response;
  });
}
