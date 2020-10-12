/* eslint-disable no-param-reassign */
import { QuestionType } from '@/api/questionApi';
import uploadApi from '@/api/uploadApi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Slider,
  Upload,
  Alert,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { UploadChangeParam } from 'antd/lib/upload';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../Common/Box';

interface Props {
  initialValues: QuestionType;
  onSave: (values: QuestionType) => void;
}

const QuizForm = ({ initialValues, onSave }: Props) => {
  const history = useHistory();

  const { _id } = initialValues;
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
    });
    setImageUrl(initialValues.image);
  }, [initialValues, form]);

  const handleChange = async (info: UploadChangeParam<any>) => {
    try {
      const formData = new FormData();
      formData.append('image', info.file);
      setLoading(true);
      const uploadResponse = await uploadApi.uploadImage(formData);
      setLoading(false);
      setImageUrl(uploadResponse.url);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSave = (questionUpdated: QuestionType) => {
    console.log(questionUpdated);
    const messErrors: string[] = [];
    questionUpdated.image = imageUrl;
    // Remove space in front of content
    questionUpdated.content = questionUpdated.content.trim();
    // Check content and correctAnswer
    if (!questionUpdated.correctAnswer) {
      messErrors.push('Choose the correct answer !');
    }
    if (
      !questionUpdated.answers.A ||
      !questionUpdated.answers.B ||
      !questionUpdated.answers.C ||
      !questionUpdated.answers.D
    ) {
      messErrors.push('Enter full of answers !');
    }

    if (messErrors.length === 0) {
      onSave(questionUpdated);
    } else {
      console.log(messErrors);
      setMessages(messErrors);
    }
  };
  const handleExit = () => {
    history.push('/kahoots');
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Form name={`quiz-form-${_id}`} onFinish={handleSave} form={form}>
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Box>
            <Form.Item
              style={{ margin: '5px' }}
              name="content"
              rules={[
                {
                  required: true,
                  message: 'Please input question!',
                },
              ]}
            >
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

      {messages.length !== 0 &&
        messages.map((message: string) => (
          <Alert message={message} type="error" style={{ margin: '5px 0' }} />
        ))}

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
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: '96px',
              height: '42px',
              margin: '10px',
              padding: '4px 16px 4px',
              borderRadius: '4px',
              fontWeight: 'bold',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
            }}
          >
            Save
          </Button>
          <Button
            style={{
              // Display & Box Model
              width: '96px',
              height: '42px',
              margin: '10px',
              padding: '4px 16px 4px',
              outline: 'none',
              border: '1px solid #fff',
              borderRadius: '4px',
              // Text
              fontWeight: 'bold',
              // Color
              color: '#fff',
              background: '#46178F',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
            }}
            onClick={handleExit}
          >
            Exit
          </Button>
        </Box>
      </Form.Item>
    </Form>
  );
};
export default QuizForm;
