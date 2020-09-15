import { Col, Row } from 'antd';
import React from 'react';
import Box from '../../components/Common/Box';
import LoginForm from '../../components/Form/LoginForm';

function Login() {
  return (
    <Row justify="center">
      <Col>
        <Box
          p="20px 30px"
          backgroundColor="#fff"
          maxWidth={300}
          marginTop={100}>
          <LoginForm />
        </Box>
      </Col>
    </Row>
  );
}

export default Login;
