import { RootState } from '@/app/store';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Text from '../Common/Text';

export interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}
interface Props {
  onFinish: (values: RegisterFormValues) => void;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 10,
    },
  },
};
function RegisterForm({ onFinish }: Props) {
  const isRegistering = useSelector<RootState>(
    state => state.user.isRegistering,
  );

  const [form] = Form.useForm();
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Text textAlign="center" m={10}>
        Sign Up
      </Text>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{ width: '300px' }} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password style={{ width: '300px' }} />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        hasFeedback
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => {
            return {
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Passwords not match!');
              },
            };
          },
        ]}
      >
        <Input.Password style={{ width: '300px' }} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={!!isRegistering}>
          Register
        </Button>
        Or <Link to="/auth/login">login now!</Link>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
