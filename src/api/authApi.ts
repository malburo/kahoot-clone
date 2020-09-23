import { LoginFormValues } from '@/components/Form/LoginForm';
import { RegisterFormValues } from '@/components/Form/RegisterForm';
import axiosClient from './axiosClient';

export interface LoginResponse {
  accessToken: string
}
export interface RegisterResponse {
  accessToken: string
}

const authApi = {
  getMe: async () => {
    const url = 'auth/me';
    const response = await axiosClient.get(url);
    return response;
  },
  login: async (payload: LoginFormValues): Promise<LoginResponse> => {
    const url = 'auth/login';
    return axiosClient.post(url, payload);
  },
  register: (payload: RegisterFormValues): Promise<RegisterResponse> => {
    const url = 'auth/register';
    return axiosClient.post(url, payload);
  },
};
export default authApi;