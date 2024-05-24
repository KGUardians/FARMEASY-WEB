import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_BASE_URL } from '@constants/environment';

const server = axios.create({
  baseURL: API_BASE_URL,
});

server.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): AxiosResponse | Promise<AxiosResponse> => {
    return Promise.reject(error.response);
  },
);

export default server;
