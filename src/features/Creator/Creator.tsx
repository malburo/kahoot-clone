import Box from '@/components/Common/Box';
import QuizForm from '@/components/Form/QuizForm';
import { Col, Row } from 'antd';
import React from 'react';

function Creator() {
  return (
    <Box>
      <Row justify="center">
        <Col span={12}>
          <QuizForm />
        </Col>
      </Row>
    </Box>
  );
}

export default Creator;
