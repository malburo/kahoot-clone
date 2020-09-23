import { Button, Col, Image, Layout, Row } from 'antd';
import React from 'react';
import logo from '../../assets/images/logo-white.png';
import Box from '../Common/Box';

const { Header, Content } = Layout;

interface CreatorLayoutProps {
  children: React.ReactNode;
}
function CreatorLayout({ children }: CreatorLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#4c3e8e' }}>
        <Row justify="space-between">
          <Col>
            <Image
              src={logo}
              width={96}
              preview={false}
              style={{
                display: 'inline-block',
                float: 'left',
                marginRight: '28px',
              }}
            />
          </Col>
          <Col>
            <Row align="middle">
              <Box mr={10}>
                <Button>Exit</Button>
              </Box>
              <Box>
                <Button>Done</Button>
              </Box>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        <Box p={24}>{children}</Box>
      </Content>
    </Layout>
  );
}

export default CreatorLayout;
