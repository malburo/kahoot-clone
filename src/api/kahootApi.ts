/* eslint-disable arrow-body-style */
import { KahootFormValues } from '@/components/Form/KahootForm';
import axiosClient from './axiosClient';

export interface kahootType {
  _id: string;
  questions: any;
  title: string;
}
export interface getKahootResponse {
  data: kahootType[];
}
export interface createKahootResponse {
  message: string;
  data: kahootType;
}
export interface deleteKahootResponse {
  message: string;
  data: kahootType;
}
const kahootApi = {
  getAll: (): Promise<getKahootResponse> => {
    return axiosClient.get('kahoots');
  },
  getById: (kahootID: string) => {
    return axiosClient.get(`kahoots/${kahootID}`);
  },
  createKahoot: (payload: KahootFormValues): Promise<createKahootResponse> => {
    return axiosClient.post('kahoots', payload);
  },
  editKahoot: (kahootID: string) => {
    return axiosClient.put(`kahoots/${kahootID}`);
  },
  deleteKahoot: (kahootID: string): Promise<deleteKahootResponse> => {
    return axiosClient.delete(`kahoots/${kahootID}`);
  },
};
export default kahootApi;
