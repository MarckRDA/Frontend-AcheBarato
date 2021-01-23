import axios from 'axios';
import {getToken}  from './auth';

//definndo qual a api de consumo
const api = axios.create({
baseURL:"https://localhost:5001/achebarato"
});

api.interceptors.request.use(
  async config =>{

  console.log("calling");
  const token = getToken();
  console.log("done");

  if (token){
    config.headers.Authorization = 'Bearer ${token}';
  }
  return config;
});

export default api;
