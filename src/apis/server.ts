import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import * as dayjs from 'dayjs';

import { API_BASE_URL } from '@constants/environment';
import { parseJwtPayload } from './utils';

const server = axios.create({
  baseURL: API_BASE_URL,
});

server.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error.response);
  },
);

// 토큰의 만료 여부 확인
const checkTokenExpiration = (token: string): boolean => {
  const payload = parseJwtPayload(token);
  if (!payload) {
    return false;
  }
  const expirationTime = dayjs.unix(Number(payload.exp));
  const currentTime = dayjs();
  const diffMinutes = expirationTime.diff(currentTime, 'minute');

  return diffMinutes > 0; // 유효하면 true, 만료하면 false
};

// 리프레쉬 토큰으로 새로운 토큰 발급.
const requestToken = async (refreshToken: string): Promise<string | null> => {
  try {
    const res = await axios.get(`${API_BASE_URL}/new`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (res.data.success) {
      const { token } = res.data.data;
      sessionStorage.setItem('session', token);

      return token;
    }

    return null;
  } catch (e) {
    return null;
  }
};

// 기존 서버 인스턴스 설정

server.interceptors.request.use(async (config) => {
  try {
    const token = sessionStorage.getItem('session');

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }

    // 유효할 경우
    if (token && checkTokenExpiration(token)) {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config as InternalAxiosRequestConfig;
    }

    // 만료되었을 경우 리프레쉬 토큰을 찾아 새로운 토큰 발급
    const refreshTokens = [sessionStorage.getItem('i')];

    for (const rt of refreshTokens) {
      if (rt && checkTokenExpiration(rt)) {
        const newToken = await requestToken(rt); // 새로운 토큰 요청

        if (newToken) {
          config.headers['Authorization'] = `Bearer ${newToken}`;
          return config as InternalAxiosRequestConfig;
        }
      }
    }

    // 모든 토큰이 만료된 경우
    if (token && !checkTokenExpiration(token)) {
      sessionStorage.removeItem('session');
      sessionStorage.removeItem('i');
      window.location.href = '/';
    }

    return config;
  } catch (e) {
    // 오류 처리
    return Promise.reject(e);
  }
});

export default server;
