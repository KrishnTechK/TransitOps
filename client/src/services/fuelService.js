import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getFuelLogs = () =>
  API.get("/fuel");

export const addFuelLog = (data) =>
  API.post("/fuel", data);

export default API;