import Box from '@/components/Common/Box';
import Text from '@/components/Common/Text';
import { UserOutlined } from '@ant-design/icons';
import { Button, Col, Image, Row } from 'antd';
import React from 'react';
import logo from '../../../assets/images/logo-white.png';

function Lobby() {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ height: '20vh', backgroundColor: 'rgb(37, 7, 107)' }}
      >
        <Col>
          <Box backgroundColor="white" p="10px 20px">
            <Text fontSize={20}>Game Pin: 123123</Text>
          </Box>
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ minHeight: '10vh', backgroundColor: 'rgb(70, 23, 143)' }}
      >
        <Col>
          <Box backgroundColor="rgba(0, 0, 0, 0.2)" color="white" p="10px 20px">
            <Text fontSize={20}>
              <UserOutlined /> 0
            </Text>
          </Box>
        </Col>
        <Col>
          <Image src={logo} width={96} preview={false} />
        </Col>
        <Col>
          <Box mr={10}>
            <Button>Start</Button>
          </Box>
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ minHeight: '70vh', backgroundColor: 'rgb(70, 23, 143)' }}
      >
        <Col>
          <Box backgroundColor="rgba(0, 0, 0, 0.2)" color="white" p="10px 20px">
            <Text fontSize={30}>Waiting for players…</Text>
          </Box>
        </Col>
      </Row>
    </>
  );
}

export default Lobby;
