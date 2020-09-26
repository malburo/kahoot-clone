import getBase64 from '@/utils/image';
import { Button, Col, Form, Input, Radio, Row, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useState } from 'react';
import Box from '../Common/Box';
import QuizImageModal from '../Modal/QuizImageModal';

interface Props {
  id: string;
}
const QuizForm = ({ id }: Props) => {
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = async (file: UploadFile<any>) => {
    const { name } = file;
    let { preview } = file;
    if (!preview) {
      preview = await getBase64(file.originFileObj as Blob);
    }
    setPreviewImage(preview as string);
    setPreviewVisible(true);
    setPreviewTitle(name);
  };
  const handleChange = (info: UploadChangeParam) => {
    setFileList(info.fileList);
  };
  const handleCancel = () => setPreviewVisible(false);

  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form name={`quiz-form-${id}`} onFinish={onFinish}>
      <QuizImageModal
        previewVisible={previewVisible}
        previewTitle={previewTitle}
        handleCancel={handleCancel}
        previewImage={previewImage}
      />
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Box>
            <Form.Item name="question">
              <Input placeholder="Question...?" size="large" />
            </Form.Item>
          </Box>
        </Col>
        <Col>
          <Box marginY={20}>
            <Form.Item name="image">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                fileList={fileList}
                beforeUpload={() => false}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : 'Upload'}
              </Upload>
            </Form.Item>
          </Box>
        </Col>
      </Row>
      <Form.Item name="correct-answer">
        <Radio.Group style={{ display: 'block' }}>
          <Box bg="white" p={20} mt={20}>
            <Row justify="space-between" align="middle">
              <Col span={21}>
                <Form.Item name={['answer', 'A']} style={{ margin: 0 }}>
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
                <Form.Item name={['answer', 'B']} style={{ margin: 0 }}>
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
                <Form.Item name={['answer', 'C']} style={{ margin: 0 }}>
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
                <Form.Item name={['answer', 'D']} style={{ margin: 0 }}>
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
