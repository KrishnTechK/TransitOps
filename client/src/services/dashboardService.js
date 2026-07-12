import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getDashboardStats = () =>
  API.get("/dashboard");

export const getAnalytics = () =>
  API.get("/analytics");

export default API;