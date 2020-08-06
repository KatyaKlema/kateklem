import axios from "axios";

export const createAPI = (onAuth) => {
  const api = axios.create({
    baseURL: `http://localhost:3001/`,
    timeout: 50000,
    withCredentials: false
  });

  return api;
};
