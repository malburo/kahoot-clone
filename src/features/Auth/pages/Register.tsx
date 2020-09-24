import { AppDispatch } from '@/app/store';
import { register } from '@/app/userSlice';
import Box from '@/components/Common/Box';
import RegisterForm, {
  RegisterFormValues,
} from '@/components/Form/RegisterForm';
import { Col, message, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();

  const handleSumit = async (values: RegisterFormValues) => {
    const registerResult = await dispatch(register(values));
    if (register.fulfilled.match(registerResult)) {
      const { payload }: any = registerResult;
      message.success(payload.message);
      history.push('/kahoots/my-kahoot');
    } else {
      const { payload }: any = registerResult;
      message.error(payload.message);
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
