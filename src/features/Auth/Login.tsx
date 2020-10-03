import { AppDispatch } from '@/app/store';
import Box from '@/components/Common/Box';
import LoginForm, { LoginFormValues } from '@/components/Form/LoginForm';
import { Col, message, notification, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function Login() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSumit = async (values: LoginFormValues) => {
    const loginResult = await dispatch(login(values));
    if (login.fulfilled.match(loginResult)) {
      const { payload }: any = loginResult;
      notification.success({
        message: payload.message,
      });
    } else {
      const { payload }: any = loginResult;
      notification.error({
        message: payload.message || payload.error,
      });
    }
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
