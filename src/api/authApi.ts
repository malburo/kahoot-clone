/* eslint-disable arrow-body-style */
import { LoginFormValues } from '@/components/Form/LoginForm';
import { RegisterFormValues } from '@/components/Form/RegisterForm';
import axiosClient from './axiosClient';

export interface LoginResponse {
  message: string;
  accessToken: string;
}
export interface RegisterResponse {
  message: string;
  accessToken: string;
}

const authApi = {
  getMe: () => {
    return axiosClient.get('auth/me');
  },
  login: (payload: LoginFormValues): Promise<LoginResponse> => {
    return axiosClient.post('auth/login', payload);
  },
  register: (payload: RegisterFormValues): Promise<RegisterResponse> => {
    return axiosClient.post('auth/register', payload);
  },
};
export default authApi;
