import type { LoginRequest } from '../types/auth';
import axiosClient from './axiosClient';

export const loginApi = (loginRequest: LoginRequest) => {
  return axiosClient.post<string>('/api/auth/login', loginRequest,{
    headers: {
    skipAuth: true,
  },
  });
};