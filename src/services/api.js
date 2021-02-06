import axios from "axios";


export const api = axios.create({
  baseURL: "https://localhost:5001/achebarato",
  headers: { "content-type": "application/json" },
});



export const signUp = ({ name, email, password, phoneNumber}) => {
  return api
    .post("/users", { name, email, password, phoneNumber });
};

export const get = (url) => {
  return api.get(url);
}

export const postAlarmPrice = ({productId, priceToMonitor}) => {
  return api
  .post('/users/alarmsprice', {productId, priceToMonitor});
}