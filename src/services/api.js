import axios from "axios";

const TOKEN_USER = "token";
const USER_ID = "UserId";

const api = axios.create({
  baseURL: "https://localhost:5001/achebarato",
  headers: { "content-type": "application/json" },
});

api.interceptors.request.use((config) => {
  config.headers.Autorization = `Bearer ${localStorage.getItem(TOKEN_USER)}`;

  return config;
});

export const login = ({ email, password }) => {
  return api.post("/users/login", { email, password }).then((response) => {
    localStorage.setItem(TOKEN_USER, response.data.token);
    localStorage.setItem(USER_ID, response.data.userId);
  });
};

export const signUp = ({ name, email, password }) => {
  return api
    .post("/users", { name, email, password })
    .then((response) => localStorage.setItem(USER_ID, response.data));
};

export const get = (url) => {
  return api.get(url);
}