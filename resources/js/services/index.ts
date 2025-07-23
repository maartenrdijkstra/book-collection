import axios, { AxiosResponse } from "axios";

const http = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getRequest = <T>(endpoint: string): Promise<AxiosResponse<T>> =>
    http.get<T>(endpoint);

export const postRequest = <T, D = unknown>(
    endpoint: string,
    data: D
): Promise<AxiosResponse<T>> => {
    return http.post<T>(endpoint, data, { withCredentials: true });
};

export const putRequest = <T, D = unknown>(
    endpoint: string,
    data: D
): Promise<AxiosResponse<T>> => {
    return http.put<T>(endpoint, data, { withCredentials: true });
};

export const deleteRequest = <T>(endpoint: string): Promise<AxiosResponse<T>> =>
    http.delete<T>(endpoint);
