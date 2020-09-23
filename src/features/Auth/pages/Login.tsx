import { AppDispatch } from "@/app/store";
import { login } from '@/app/userSlice';
import Box from '@/components/Common/Box';
import LoginForm, { LoginFormValues } from '@/components/Form/LoginForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const handleSumit = async (values: LoginFormValues) => {
    try {
      const loginResult = await dispatch(login(values));
      unwrapResult(loginResult);
    } catch (error) {
      console.log(error)
    }
  }
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
