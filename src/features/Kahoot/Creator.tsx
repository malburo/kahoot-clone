/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import { QuestionType } from '@/api/questionApi';
import { AppDispatch, RootState } from '@/app/store';
// import Box from '@/components/Common/Box';
import QuizForm from '@/components/Form/QuizForm';
import DeleteQuestionModal from '@/components/Modal/DeleteQuestionModal';
import { DeleteOutlined } from '@ant-design/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Col, Empty, Layout, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  createQuestion,
  deleteQuestion,
  getKahoot,
  updateQuestion,
} from './slice/kahoot';

const { Content, Sider } = Layout;
const Box = styled('div')({
  width: '100%',
  height: '2em',
  padding: '3px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottom: '1px solid #fafafa',
  fontSize: '18px',
});
function Creator() {
  const dispatch = useDispatch<AppDispatch>();

  const questions = useSelector(
    (state: RootState) => state.kahoot.item.questions,
  );
  const { kahootId } = useParams<{ kahootId: string }>();
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>({
    _id: '0',
    content: '',
    image: '',
    answers: { A: '', B: '', C: '', D: '' },
    correctAnswer: '',
    timeLimit: 20,
    points: 0,
  });

  useEffect(() => {
    dispatch(getKahoot(kahootId));
  }, [dispatch, kahootId]);

  useEffect(() => {
    if (questions[0]) {
      setCurrentQuestion(questions[0]);
    }
  }, [questions]);

  const handleClick = (questionId: string) => {
    const currentQuestion = questions.find(
      question => question._id === questionId,
    );
    setCurrentQuestion(currentQuestion!);
  };

  const handleAdd = async (kahootId: string) => {
    try {
      const newQuestion = await dispatch(
        createQuestion({
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
      ).then(unwrapResult);
      setCurrentQuestion(newQuestion);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSave = async (questionUpdated: QuestionType) => {
    try {
      const updatedQuestion = await dispatch(
        updateQuestion({
          kahootId,
          newQuestion: questionUpdated,
          questionId: currentQuestion._id,
        }),
      ).then(unwrapResult);
      setCurrentQuestion(updatedQuestion);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDelete = (kahootId: string, questionId: string) => {
    dispatch(deleteQuestion({ kahootId, questionId }));
  };
  const questionList = questions.map((question, index) => (
    <React.Fragment key={question._id}>
      <Box>
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
      </Box>
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
            <Box style={{ margin: '30px 0px' }}>
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
