import { Button, Col, Image, Layout, Menu, Row } from 'antd';
import React from 'react';
import logo from '../../assets/images/logo-white.png';
import Box from '../Common/Box';

const { Header, Content, Sider } = Layout;

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
      <Layout>
        <Sider width={200}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" style={{ marginTop: '20px' }}>
              Quiz 1
            </Menu.Item>
            <Box m="40px">
              <Button type="primary">Add new Quiz</Button>
            </Box>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Box p={24} minHeight={280}>
              {children}
            </Box>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default CreatorLayout;
