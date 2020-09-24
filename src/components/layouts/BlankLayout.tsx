import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

interface BlankLayoutProps {
  children: React.ReactNode;
}

function BlankLayout({ children }: BlankLayoutProps) {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
}

export default BlankLayout;
