import envConfig from "@/config/env";
import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const api = axios.create({
  timeout: 10000,
  baseURL: envConfig.apUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const attachToken = (req: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    req.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return req;
};

const handleNewToken = (res: AxiosResponse) => {
  const newToken = res.headers["x-auth-token"];

  if (newToken) {
    localStorage.setItem("token", newToken);
    api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
  }

  return res;
};

// Interceptors
api.interceptors.request.use(attachToken);
api.interceptors.response.use(handleNewToken, (err) => {
  return Promise.reject(err);
});

export default api;
