import { Col, Row } from 'antd';
import React from 'react';
import LoginForm from '../../components/Form/LoginForm';

function Login() {
  return (
    <Row justify="center">
      <Col>
        <div
          style={{
            marginTop: 100,
            backgroundColor: 'white',
            padding: '20px 30px',
            maxWidth: 300,
          }}>
          <LoginForm />
        </div>
      </Col>
    </Row>
  );
}

export default Login;
