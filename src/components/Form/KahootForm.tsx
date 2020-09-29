import { Button, Form, Input } from 'antd';
import React from 'react';

export interface KahootFormValues {
  title: string;
}
interface Props {
  onSubmit: (values: KahootFormValues) => void;
}

function KahootForm({ onSubmit }: Props) {
  return (
    <Form
      name="kahoot"
      initialValues={{
        remember: true,
      }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input title!',
          },
        ]}
      >
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginBottom: 10 }}
          block
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}
export default KahootForm;
