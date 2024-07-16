import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";
import requestHandler from "./requestHandler"; // 요청을 처리하는 핸들러 함수를 가져온다.
import errorResponseHandler from "./errorResponseHandler";

const createAxiosInstance = (config: AxiosRequestConfig) => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const unidyAxios: AxiosInstance = createAxiosInstance({
  baseURL: CONFIG.UNIDY_Server,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const unidyAxiosSetAccessToken = (newToken: string) => {
  unidyAxios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

unidyAxios.interceptors.request.use(
  requestHandler as any,
  (response) => response
);

unidyAxios.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);
