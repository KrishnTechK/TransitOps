import axios from "axios";

// Central Axios instance for the TransitOps auth API.
// Base URL points at the local auth backend described in the spec.
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the JWT (if present) to every outgoing request so protected
// backend routes work once the auth module is wired into the rest of
// the app.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
