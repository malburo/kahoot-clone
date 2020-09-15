import { Col, Row } from 'antd';
import React from 'react';
import SignUpForm from '../../components/Form/SignUpForm';
import Box from '../../components/Common/Box';

function SignUp() {
  return (
    <Row justify="center">
      <Col>
        <Box backgroundColor="#fff" m="100px 0" p="20px 60px">
          <SignUpForm />
        </Box>
      </Col>
    </Row>
  );
}

export default SignUp;
