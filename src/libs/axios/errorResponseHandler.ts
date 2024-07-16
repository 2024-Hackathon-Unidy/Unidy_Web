import axios, { AxiosError } from "axios";
import CONFIG from "src/config/config.json";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";
import { unidyAxios } from "src/libs/axios/customAxios";

let isRefreshing: boolean = false;
let refreshSubcribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubcribers.map((callback) => callback(accessToken));
};

const addRefreshSubcriber = (callback: (accessToken: string) => void) => {
  refreshSubcribers.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const useAccessToken = token.getToken(ACCESS_TOKEN_KEY);
    const useRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

    if (
      useAccessToken !== undefined &&
      useRefreshToken !== undefined &&
      status == 401
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const data = await axios.post(
            `${CONFIG.UNIDY_Server}/#` /* 리프레쉬 url로 변경 필요 */, {
              refreshToken: useRefreshToken,
            }
          );

          const newAccessToken = data.data.data.accessToken; // API 값에 따라 수정 필요
          token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
          isRefreshing = false;
          onTokenRefreshed(newAccessToken);
        } catch (error) {
          token.clearToken();
          window.location.href = "/login";
        }
      }

      return new Promise((resolve, rejects) => {
        addRefreshSubcriber((accessToken: string) => {
          if (originalRequest) {
            originalRequest.headers![
              REQUEST_TOKEN_KEY
            ] = `Bearer ${accessToken}`;
            resolve(unidyAxios(originalRequest));
          } else {
            rejects("originalRequest is undefined");
          }
        });
      });
    }
  }

  return Promise.reject(error);
};

export default errorResponseHandler;
