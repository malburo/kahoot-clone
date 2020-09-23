import { Button, Form, Input } from 'antd';
import React from 'react';

function GamePinForm() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input placeholder="Game Pin" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginBottom: 10 }}
          block
        >
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
}

export default GamePinForm;
