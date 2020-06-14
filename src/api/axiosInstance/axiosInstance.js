import axios from "axios";

const baseUrl = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  "Content-Type": "application/json"
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);