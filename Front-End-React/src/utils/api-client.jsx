import axios from "axios";

export const ApiClient = axios.create({
  baseURL: "http://localhost:3000/api/",

  // For checking the database saving functionality, you can use the following baseURL instead of the one above.
  // baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default ApiClient;
