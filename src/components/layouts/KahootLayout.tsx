import {
  LogoutOutlined,
  SettingOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Col, Dropdown, Image, Layout, Menu, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import Box from '../Common/Box';

const { Header, Content, Sider } = Layout;

interface KahootLayoutProps {
  children: React.ReactNode;
}
function KahootLayout({ children }: KahootLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#4c3e8e' }}>
        <Row justify="space-between">
          <Col span={20}>
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
              <Box marginRight={20}>
                <Link to="/creator">
                  <Button>Create</Button>
                </Link>
              </Box>
              <Box>
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu>
                      <Menu.Item key="1" icon={<SettingOutlined />}>
                        Setting
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item key="2" icon={<LogoutOutlined />}>
                        Logout
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={['click']}
                >
                  <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
              </Box>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              style={{ marginTop: '20px' }}
            >
              My kahoots
            </Menu.Item>
            <Menu.Item key="2" icon={<StarOutlined />}>
              Favorites
            </Menu.Item>
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

export default KahootLayout;
