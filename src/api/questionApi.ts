/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
import axiosClient from './axiosClient';

interface AnswersType {
  A: string;
  B: string;
  C: string;
  D: string;
}

export interface QuestionType {
  _id: string;
  content: string;
  image: string;
  answers: AnswersType;
  correctAnswer: string;
  timeLimit: number;
  points: number;
}
export interface getQuestionResponse {
  data: QuestionType[];
}
const questionApi = {
  getAll: (kahootId: string): Promise<getQuestionResponse> => {
    return axiosClient.get(`kahoots/${kahootId}/questions`);
  },
  createQuestion: (payload: {
    kahootId: string;
    newQuestion: QuestionType;
  }) => {
    const { kahootId, newQuestion } = payload;
    return axiosClient.post(`kahoots/${kahootId}/questions`, newQuestion);
  },
  updateQuestion: (payload: {
    kahootId: string;
    questionId: string;
    newQuestion: QuestionType;
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
