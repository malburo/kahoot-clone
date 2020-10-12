import AnswerCard from '@/components/Card/AnswerCard';
import Box from '@/components/Common/Box';
import Text from '@/components/Common/Text';
import { Button, Col, Image, Layout, Row } from 'antd';
import React from 'react';

function InGame() {
  return (
    <Layout style={{ minHeight: '100%', backgroundColor: 'white' }}>
      <Row justify="center" align="middle" style={{ height: '15vh' }}>
        <Col>
          <Text fontSize={30} fontWeight="bold">
            Question...
          </Text>
        </Col>
      </Row>

      <Box padding={40} backgroundColor="#f2f2f2" minHeight="85vh">
        <Row>
          <Box position="absolute" right="40px">
            <Button type="primary">Skip</Button>
          </Box>
        </Row>
        <Row justify="space-between" align="middle">
          <Col>
            <Box
              backgroundColor="#4c3e8e"
              width={75}
              height={75}
              borderRadius="50%"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={30} fontWeight="bold">
                50
              </Text>
            </Box>
          </Col>
          <Col>
            <Box overflow="hidden" height={300} width={300}>
              <Image src="https://res.cloudinary.com/malburo/image/upload/v1599241128/Instagram/Posts/co0gmrfsmpehjyfuecwp.jpg" />
            </Box>
          </Col>
          <Col>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize={34} fontWeight="bold">
                0
              </Text>
              <Text fontSize={24} fontWeight="bold">
                Answer
              </Text>
            </Box>
          </Col>
        </Row>
        <Row
          gutter={[2, 2]}
          justify="center"
          style={{ margin: '50px 0 20px 0' }}
        >
          <Col span={12}>
            <AnswerCard type="A">answer...</AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard type="B">answer...</AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard type="C">answer...</AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard type="D">answer...</AnswerCard>
          </Col>
        </Row>
      </Box>
      <Box
        position="fixed"
        padding={10}
        left={0}
        bottom={0}
        width="100%"
        borderTop="1px solid #e8e8e8"
        backgroundColor="white"
      >
        <Box style={{ float: 'right' }}>
          <Text fontSize={24} fontWeight="bold">
            <span>kahoot-clone</span> Game PIN: 783831
          </Text>
        </Box>
      </Box>
    </Layout>
  );
}

export default InGame;
