import axios, {  AxiosInstance, InternalAxiosRequestConfig } from "axios";
 
const BASE_URL = `http://localhost:3030`;
 
export const defaultAxiosInstance : AxiosInstance = axios.create({
    baseURL: BASE_URL,
})
 
 
defaultAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean = config.url !== "login";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
    }
)

