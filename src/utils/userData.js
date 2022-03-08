export const USER_DATA_KEY = "CCA_USER_DATA";

export function setUserData(data) {
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
}
export function getUserData() {
  return JSON.parse(localStorage.getItem(USER_DATA_KEY));
}

export function deleteUserData() {
  sessionStorage.removeItem(USER_DATA_KEY);
}

export function userSessionTime() {
  const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));
  const date = new Date(userData.exp * 1000);
  return date;
}
