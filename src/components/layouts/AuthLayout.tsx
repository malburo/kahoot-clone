import { Layout } from 'antd';
import React from 'react';
import logo from '../../assets/images/logo.svg';
const { Header, Content } = Layout;

function AuthLayout(props: any) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: 'white' }}>
        <img alt="logo" src={logo} style={{ width: 96 }} />
      </Header>
      <Content style={{ padding: '0 50px' }}>{props.children}</Content>
    </Layout>
  );
}

export default AuthLayout;
