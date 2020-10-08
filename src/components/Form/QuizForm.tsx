/* eslint-disable no-param-reassign */
import { QuestionType } from '@/api/questionApi';
import uploadApi from '@/api/uploadApi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Radio, Row, Slider, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { UploadChangeParam } from 'antd/lib/upload';
import React, { useEffect, useState } from 'react';
import Box from '../Common/Box';

interface Props {
  initialValues: QuestionType;
  onSave: (values: QuestionType) => void;
}

const QuizForm = ({ initialValues, onSave }: Props) => {
  const { _id } = initialValues;
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
    });
    setImageUrl(initialValues.image);
  }, [initialValues, form]);

  const handleChange = async (info: UploadChangeParam<any>) => {
    const formData = new FormData();
    formData.append('image', info.file);
    setLoading(true);
    const uploadResponse = await uploadApi.uploadImage(formData);
    setLoading(false);
    setImageUrl(uploadResponse.url);
  };
  const handeSave = (questionUpdated: QuestionType) => {
    questionUpdated.image = imageUrl;
    onSave(questionUpdated);
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Form name={`quiz-form-${_id}`} onFinish={handeSave} form={form}>
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Box>
            <Form.Item name="content">
              <Input size="large" placeholder="Question?" />
            </Form.Item>
          </Box>
        </Col>
        <Col>
          <Box marginY={20}>
            <Form.Item name="image">
              <Upload
                name="image"
                listType="picture-card"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="question"
                    style={{ width: '100%' }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </Box>
        </Col>
      </Row>
      <Form.Item name="correctAnswer">
        <Radio.Group style={{ display: 'block' }}>
          <Box bg="white" p={20} mt={20}>
            <Row justify="space-between" align="middle">
              <Col span={21}>
                <Form.Item name={['answers', 'A']} style={{ margin: 0 }}>
                  <TextArea placeholder="Answer A" autoSize bordered={false} />
                </Form.Item>
              </Col>
              <Col>
                <Radio value="A">A</Radio>
              </Col>
            </Row>
          </Box>
          <Box bg="white" p={20} mt={20}>
            <Row justify="space-between" align="middle">
              <Col span={21}>
                <Form.Item name={['answers', 'B']} style={{ margin: 0 }}>
                  <TextArea placeholder="Answer B" autoSize bordered={false} />
                </Form.Item>
              </Col>
              <Col>
                <Radio value="B">B</Radio>
              </Col>
            </Row>
          </Box>
          <Box bg="white" p={20} mt={20}>
            <Row justify="space-between" align="middle">
              <Col span={21}>
                <Form.Item name={['answers', 'C']} style={{ margin: 0 }}>
                  <TextArea placeholder="Answer C" autoSize bordered={false} />
                </Form.Item>
              </Col>
              <Col>
                <Radio value="C">C</Radio>
              </Col>
            </Row>
          </Box>
          <Box bg="white" p={20} mt={20}>
            <Row justify="space-between" align="middle">
              <Col span={21}>
                <Form.Item name={['answers', 'D']} style={{ margin: 0 }}>
                  <TextArea placeholder="Answer D" autoSize bordered={false} />
                </Form.Item>
              </Col>
              <Col>
                <Radio value="D">D</Radio>
              </Col>
            </Row>
          </Box>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="points" label="Points ">
        <Slider
          min={0}
          max={2000}
          step={1000}
          marks={{
            0: '0',
            1000: '1000',
            2000: '2000',
          }}
        />
      </Form.Item>
      <Form.Item name="timeLimit" label="Time limits ">
        <Slider
          min={0}
          max={120}
          step={20}
          marks={{
            0: '0',
            20: '20',
            40: '40',
            60: '60',
            80: '80',
            100: '100',
            120: '120',
          }}
        />
      </Form.Item>
      <Form.Item>
        <Box marginTop={20}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Box>
      </Form.Item>
    </Form>
  );
};
export default QuizForm;
