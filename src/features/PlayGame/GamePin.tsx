import Box from '@/components/Common/Box';
import GamePinForm from '@/components/Form/GamePinForm';
import { Col, Row } from 'antd';
import React from 'react';

function GamePin() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Box p="40px 30px 5px 30px" backgroundColor="#fff">
          <GamePinForm />
        </Box>
      </Col>
    </Row>
  );
}

export default GamePin;
