/* eslint-disable arrow-body-style */
import axiosClient from './axiosClient';

interface UploadImageResponse {
  url: string;
  message: string;
}
const uploadApi = {
  uploadImage: async (payload: any): Promise<UploadImageResponse> => {
    return axiosClient.post('image', payload);
  },
};
export default uploadApi;
