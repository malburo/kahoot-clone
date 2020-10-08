import { AppDispatch } from '@/app/store';
import Box from '@/components/Common/Box';
import RegisterForm, {
  RegisterFormValues,
} from '@/components/Form/RegisterForm';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from './userSlice';

function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSumit = async (values: RegisterFormValues) => {
    dispatch(register(values));
  };
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
