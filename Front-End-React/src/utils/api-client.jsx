import axios from "axios";

export const ApiClient = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

export default ApiClient;
