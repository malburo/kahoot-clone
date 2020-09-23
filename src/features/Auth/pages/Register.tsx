import { AppDispatch } from '@/app/store';
import { register } from '@/app/userSlice';
import Box from '@/components/Common/Box';
import RegisterForm, { RegisterFormValues } from '@/components/Form/RegisterForm';
import { unwrapResult } from '@reduxjs/toolkit';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

function Register() {
  const dispatch = useDispatch<AppDispatch>()
  const handleSumit = async (values: RegisterFormValues) => {
    try {
      const registerResult = await dispatch(register(values));
      unwrapResult(registerResult);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Row justify="center">
      <Col>
        <Box backgroundColor="#fff" m="100px 0" p="20px 60px">
          <RegisterForm onFinish={handleSumit} />
        </Box>
      </Col>
    </Row>
  );
}

export default Register;
