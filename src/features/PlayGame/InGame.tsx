import AnswerCard from '@/components/Card/AnswerCard';
import Box from '@/components/Common/Box';
import Text from '@/components/Common/Text';
import { Button, Col, Layout, Row } from 'antd';
import React, { useState } from 'react';
import { Bar, BarChart, LabelList } from 'recharts';

function InGame() {
  const data = [
    {
      name: 'Answer A',
      amount: 20,
      fill: 'rgb(226, 27, 60)',
    },
    {
      name: 'Answer B',
      amount: 17,
      fill: 'rgb(19, 104, 206)',
    },
    {
      name: 'Answer C',
      amount: 14,
      fill: 'rgb(216, 158, 0)',
    },
    {
      name: 'Answer D',
      amount: 25,
      fill: 'rgb(38, 137, 12)',
    },
  ];
  const [correctAnswer] = useState('A');
  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value, fill, index } = props;
    return (
      <g>
        {index === correctAnswer.charCodeAt(0) - 65 && (
          <image
            x={x + width / 2 - 38}
            y={y - 20}
            href="https://img.icons8.com/color/48/000000/checkmark.png"
            width={20}
          />
        )}

        <text
          x={x + width / 2}
          y={y - 10}
          fill={fill}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    );
  };
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
            {/* <Box overflow="hidden" height={300} width={300}>
              <Image src="https://res.cloudinary.com/malburo/image/upload/v1599241128/Instagram/Posts/co0gmrfsmpehjyfuecwp.jpg" />
            </Box> */}
            <BarChart
              width={500}
              height={300}
              data={data}
              style={{ fontSize: 30, fontWeight: 'bold' }}
            >
              <Bar dataKey="amount">
                <LabelList
                  dataKey="amount"
                  position="top"
                  content={renderCustomizedLabel}
                />
              </Bar>
            </BarChart>
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
            <AnswerCard
              type="A"
              correct={correctAnswer ? correctAnswer === 'A' : undefined}
            >
              answer...
            </AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard
              type="B"
              correct={correctAnswer ? correctAnswer === 'B' : undefined}
            >
              answer...
            </AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard
              type="C"
              correct={correctAnswer ? correctAnswer === 'C' : undefined}
            >
              answer...
            </AnswerCard>
          </Col>
          <Col span={12}>
            <AnswerCard
              type="D"
              correct={correctAnswer ? correctAnswer === 'D' : undefined}
            >
              answer...
            </AnswerCard>
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
