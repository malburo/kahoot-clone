import { Image, Layout } from 'antd';
import React from 'react';
import logo from '../../assets/images/logo-purple.svg';
import Box from '../Common/Box';

const { Header, Content } = Layout;
interface AuthLayoutProps {
  children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Image src={logo} width={96} preview={false} />
      </Header>
      <Content>
        <Box p="0 50px">{children}</Box>
      </Content>
    </Layout>
  );
}

export default AuthLayout;
