import KahootCard from '@/components/Card/KahootCard';
import Box from '@/components/Common/Box';
import { Col, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import React from 'react';

function MyKahoot() {
  return (
    <Box>
      <Box marginY={50}>
        <Row justify="center">
          <Col span={10}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
      </Box>
      <KahootCard />
      <KahootCard />
      <KahootCard />
    </Box>
  );
}

export default MyKahoot;
