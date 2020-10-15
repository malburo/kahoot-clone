import store from '@/app/store';
import { logout } from '@/features/Auth/userSlice';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Col, Dropdown, Image, Layout, Menu, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import Box from '../Common/Box';

const { Header } = Layout;

interface KahootLayoutProps {
  children: React.ReactNode;
}
function KahootLayout({ children }: KahootLayoutProps) {
  const history = useHistory();
  const handleLogout = () => {
    store.dispatch(logout());
    history.replace('/auth/login');
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#4c3e8e', height: '10%' }}>
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
              <Box>
                <Dropdown
                  placement="bottomRight"
                  overlay={
                    <Menu>
                      <Menu.Item key="1" icon={<SettingOutlined />}>
                        Setting
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item
                        key="2"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                      >
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
      {children}
    </Layout>
  );
}

export default KahootLayout;
