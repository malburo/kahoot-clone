import { Col, Row } from 'antd';
import React from 'react';
import SignUpForm from '../../components/Form/SignUpForm';
function SignUp() {
  return (
    <Row justify="center">
      <Col>
        <div
          style={{
            margin: '100px 0',
            backgroundColor: 'white',
            padding: '20px 60px',
          }}>
          <SignUpForm />
        </div>
      </Col>
    </Row>
  );
}

export default SignUp;
