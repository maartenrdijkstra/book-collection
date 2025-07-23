import axios from "axios";

const http = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getRequest = (endpoint) => http.get(endpoint);
export const postRequest = (endpoint, data) =>
    http.post(endpoint, data, { withCredentials: true });
export const putRequest = (endpoint, data) =>
    http.put(endpoint, data, { withCredentials: true });
export const deleteRequest = (endpoint) => http.delete(endpoint);
