import { RootState } from '@/app/store';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../Common/Text';

export interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}
interface Props {
  onFinish: (values: LoginFormValues) => void;
}

function LoginForm({ onFinish }: Props) {
  const isFetching = useSelector<RootState>(state => state.user.isFetching);
  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Text textAlign="center" m={10}>
        Login
      </Text>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Link to="/auth/forgot-password">Forgot password</Link>
      </Form.Item>
      <Form.Item>
        {isFetching ? (
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: 10 }}
            block
            disabled
          >
            <Spin />
          </Button>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: 10 }}
            block
          >
            Login
          </Button>
        )}
        Or <Link to="/auth/register">register now!</Link>
      </Form.Item>
    </Form>
  );
}
export default LoginForm;
