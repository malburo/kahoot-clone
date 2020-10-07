/* eslint-disable arrow-body-style */
import axiosClient from './axiosClient';

interface uploadImageResponse {
  url: string;
  message: string;
}
const uploadApi = {
  uploadImage: async (payload: any): Promise<uploadImageResponse> => {
    return axiosClient.post('image', payload);
  },
};
export default uploadApi;
