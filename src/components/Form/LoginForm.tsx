import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Text from '../Common/Text';

export interface LoginFormValues {
  username: string,
  password: string,
  remember: boolean
}
interface Props {
  onFinish: (values: LoginFormValues) => void;
}

function LoginForm({ onFinish }: Props) {
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
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
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
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginBottom: 10 }}
          block
        >
          Log in
        </Button>
        Or <Link to="/auth/sign-up">register now!</Link>
      </Form.Item>
    </Form>
  );
}
export default LoginForm;
