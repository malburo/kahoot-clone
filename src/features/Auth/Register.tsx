import { AppDispatch } from '@/app/store';
import Box from '@/components/Common/Box';
import RegisterForm, {
  RegisterFormValues,
} from '@/components/Form/RegisterForm';
import { Col, message, notification, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from './userSlice';

function Register() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSumit = async (values: RegisterFormValues) => {
    const registerResult = await dispatch(register(values));
    if (register.fulfilled.match(registerResult)) {
      const { payload }: any = registerResult;
      notification.success({
        message: payload.message,
      });
    } else {
      const { payload }: any = registerResult;
      notification.error({
        message: payload.message || payload.error,
      });
    }
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
