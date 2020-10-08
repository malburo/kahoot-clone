/* eslint-disable arrow-body-style */
import { KahootFormValues } from '@/components/Form/KahootForm';
import axiosClient from './axiosClient';
import { QuestionType } from './questionApi';

export interface kahootType {
  _id: string;
  questions: QuestionType[];
  title: string;
}
export interface getKahootResponse {
  data: kahootType[];
}
export interface createKahootResponse {
  data: kahootType;
}
export interface deleteKahootResponse {
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
