import QuizForm from '@/components/Form/QuizForm';
import { Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const { Content, Sider } = Layout;

function Creator() {
  return (
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '92vh', borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/kahoots/1">asd</Link>
          </Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Row justify="center">
          <Col span={12}>
            <QuizForm id="123" />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Creator;
