/* eslint-disable @typescript-eslint/naming-convention */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { AUTH_TOKEN, BASE_URL } from "./helper";

interface TypedAxiosInstance extends AxiosInstance {
  get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
  post<T, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
}

export const axiosInstance: TypedAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  },
});

function handleResponse<T>(response: AxiosResponse<T>): T {
  return response.data;
}

function handleError(error: AxiosError): Promise<never> {
  return Promise.reject(error);
}

axiosInstance.interceptors.response.use(handleResponse, handleError);
