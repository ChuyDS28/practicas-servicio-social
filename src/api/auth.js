export const TOKEN_KEY = "HR-TOKEN-SESSION";
//Agregar token,local storage
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function tokenExp() {
  return localStorage.getItem(TOKEN_KEY);
}
