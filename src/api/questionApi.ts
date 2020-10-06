/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
import axiosClient from './axiosClient';

export interface questionType {
  _id: string;
  content: string;
  image: any;
  answers: { A: string; B: string; C: string; D: string };
  correctAnswer: string;
  timeLimit: number;
  points: number;
}
export interface getQuestionResponse {
  data: questionType[];
}
const questionApi = {
  getAll: (kahootId: string): Promise<getQuestionResponse> => {
    return axiosClient.get(`kahoots/${kahootId}/questions`);
  },
  createQuestion: (payload: {
    kahootId: string;
    newQuestion: questionType;
  }) => {
    const { kahootId, newQuestion } = payload;
    return axiosClient.post(`kahoots/${kahootId}/questions`, newQuestion);
  },
  updateQuestion: (payload: {
    kahootId: string;
    questionId: string;
    newQuestion: questionType;
  }) => {
    const { kahootId, newQuestion, questionId } = payload;
    return axiosClient.put(
      `kahoots/${kahootId}/questions/${questionId}`,
      newQuestion,
    );
  },
  deleteQuestion: (payload: { kahootId: string; questionId: string }) => {
    const { kahootId, questionId } = payload;
    return axiosClient.delete(`kahoots/${kahootId}/questions/${questionId}`);
  },
};

export default questionApi;
