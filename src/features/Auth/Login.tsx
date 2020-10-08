import { AppDispatch } from '@/app/store';
import Box from '@/components/Common/Box';
import LoginForm, { LoginFormValues } from '@/components/Form/LoginForm';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSumit = async (values: LoginFormValues) => {
    dispatch(login(values));
  };
  return (
    <Row justify="center">
      <Col>
        <Box
          p="20px 30px"
          backgroundColor="#fff"
          maxWidth={300}
          marginTop={100}
        >
          <LoginForm onFinish={handleSumit} />
        </Box>
      </Col>
    </Row>
  );
}

export default Login;
