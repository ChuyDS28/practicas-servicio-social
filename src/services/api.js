import axios from "axios";

const TOKEN_KEY = "HR-TOKEN-SESSION";
const baseUrl = "http://148.204.63.213:80/IPN-Central-Route/";

//Agregar token,local storage
function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

let head = {
  headers: {
    "HR-TOKEN-APPID": 1,
    "HR-APP-TYPE": "WEB",
    "HR-APP-VERSION": "1.0.0",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
function updatehead() {
  head = {
    headers: { ...head.headers, [TOKEN_KEY]: getToken() },
  };
}

export async function login(data) {
  await axios
    .post(`${baseUrl}acceso/login`, JSON.stringify(data), head)
    .then((response) => {
      //console.log(response);
      if (response.status === 200) {
        //console.log("response de token", response.headers["hr-token-session"]);
        setToken(response.headers["hr-token-session"]);
        updatehead();
      }
    });
}
