/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import { QuestionType } from '@/api/questionApi';
import { AppDispatch, RootState } from '@/app/store';
import Box from '@/components/Common/Box';
import QuizForm from '@/components/Form/QuizForm';
import DeleteQuestionModal from '@/components/Modal/DeleteQuestionModal';
import { DeleteOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Col, Empty, Layout, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  createQuestions,
  deleteQuestions,
  updateQuestions,
} from './kahootSlice';

const { Content, Sider } = Layout;

function Creator() {
  const kahoots = useSelector((state: RootState) => state.kahoot.items);
  const dispatch = useDispatch<AppDispatch>();
  const { kahootId } = useParams<{ kahootId: string }>();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({
    _id: '0',
    content: '',
    image: '',
    answers: { A: '', B: '', C: '', D: '' },
    correctAnswer: '',
    timeLimit: 0,
    points: 0,
  });
  useEffect(() => {
    const kahoot = kahoots.find(kahoot => kahoot._id === kahootId);
    if (kahoot) {
      setQuestions(kahoot.questions);
      if (kahoot.questions[0]) {
        setCurrentQuestion(kahoot.questions[0]);
      }
    }
  }, [kahoots, kahootId]);

  const handleClick = (questionId: string) => {
    const currentQuestion = questions.find(
      question => question._id === questionId,
    );
    setCurrentQuestion(currentQuestion!);
  };

  const handleAdd = async (kahootId: string) => {
    const newQuestionResponse = await dispatch(
      createQuestions({
        kahootId,
        newQuestion: {
          content: '',
          image: '',
          answers: { A: '', B: '', C: '', D: '' },
          correctAnswer: '',
          timeLimit: 0,
          points: 0,
        },
      }),
    );
    const newQuestion = unwrapResult(newQuestionResponse);
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion(newQuestion);
  };
  const handleSave = async (questionUpdated: QuestionType) => {
    const updatedQuestionResponse = await dispatch(
      updateQuestions({
        kahootId,
        newQuestion: questionUpdated,
        questionId: currentQuestion._id,
      }),
    );
    const updatedQuestion = unwrapResult(updatedQuestionResponse);
    const questionsClone = [...questions];
    const index = questionsClone.findIndex(
      question => question._id === currentQuestion._id,
    );
    questionsClone[index] = updatedQuestion;
    setQuestions(questionsClone);
    setCurrentQuestion(updatedQuestion);
  };
  const handleDelete = (kahootId: string, questionId: string) => {
    dispatch(deleteQuestions({ kahootId, questionId }));
    const questionsClone = [...questions];
    const index = questionsClone.findIndex(
      question => question._id === currentQuestion._id,
    );
    questionsClone.splice(index, 1);
    if (questions.length > 1) {
      setCurrentQuestion(questions[questions.length - 2]);
    }
    setQuestions(questionsClone);
  };
  const questionList = questions.map((question, index) => (
    <React.Fragment key={question._id}>
      <Menu.Item key={question._id} onClick={() => handleClick(question._id)}>
        Question {index + 1}
      </Menu.Item>
      <DeleteQuestionModal
        kahootId={kahootId}
        questionId={question._id}
        onDelele={handleDelete}
      >
        <DeleteOutlined />
      </DeleteQuestionModal>
    </React.Fragment>
  ));
  return (
    <Layout>
      <Sider width={200} theme="light">
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[currentQuestion?._id]}
          style={{ height: '92vh', borderRight: 0 }}
        >
          {questionList}
          {questions.length > 0 && (
            <Box ml={40} my={30}>
              <Button type="primary" onClick={() => handleAdd(kahootId)}>
                Add question
              </Button>
            </Box>
          )}
        </Menu>
      </Sider>
      <Content>
        <Row justify="center" style={{ height: '100%' }} align="middle">
          <Col span={12}>
            {questions.length > 0 && (
              <QuizForm initialValues={currentQuestion} onSave={handleSave} />
            )}

            {questions.length === 0 && (
              <Empty>
                <Button type="primary" onClick={() => handleAdd(kahootId)}>
                  Add question
                </Button>
              </Empty>
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Creator;
