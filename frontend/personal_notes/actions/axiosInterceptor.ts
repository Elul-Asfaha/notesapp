import { refreshTokenEndpoint } from "@/endpoints";
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_API_URL || "";

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await axiosInstance.post(refreshTokenEndpoint);
                return axiosInstance(originalRequest);
            } catch (err: unknown) {
                console.error("token refresh failed", err);
            }
        }
    }
);

export default axiosInstance;
