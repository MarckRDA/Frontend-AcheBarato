import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://localhost:5001/achebarato",
  headers: { "content-type": "application/json" },
});

const 

api.interceptors.request.use(config =>{
  config.headers
})
