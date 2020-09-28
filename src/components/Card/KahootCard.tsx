import DeleteKahootModal from '@/components/Modal/DeleteKahootModal';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Image, Menu, Row } from 'antd';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Box from '../Common/Box';

interface Props {
  title: string;
  kahootId: string;
}
function KahootCard({ title, kahootId }: Props) {
  const history = useHistory();
  const handlePlay = (kahootId: string) => {
    const roomId = '123';
    history.push(`/rooms/${roomId}`);
  };
  const handleEdit = (kahootId: string) => {
    history.push(`/kahoots/${kahootId}`);
  };
  return (
    <Box
      width="100%"
      maxHeight={150}
      bg="white"
      overflow="hidden"
      marginTop={20}
    >
      <Row>
        <Col span={4}>
          <Box overflow="hidden" minHeight={150}>
            <Image src="https://res.cloudinary.com/malburo/image/upload/v1599241128/Instagram/Posts/co0gmrfsmpehjyfuecwp.jpg" />
          </Box>
        </Col>
        <Col span={20}>
          <Box height={60} m={20}>
            <Row justify="space-between">
              <Col>
                <Link to={`/kahoots/${kahootId}`}>{title}</Link>
              </Col>
              <Col>
                <Dropdown.Button
                  trigger={['click']}
                  overlay={
                    <Menu>
                      <Menu.Item key="1" icon={<FormOutlined />}>
                        Rename
                      </Menu.Item>
                      <Menu.Item key="2" icon={<DeleteOutlined />}>
                        <DeleteKahootModal kahootId={kahootId}>
                          Delete
                        </DeleteKahootModal>
                      </Menu.Item>
                    </Menu>
                  }
                />
              </Col>
            </Row>
          </Box>
          <Box bg="#f8f8f8" padding="10px 20px">
            <Row justify="end" align="bottom">
              <Box marginRight={20}>
                <Button type="primary" onClick={() => handlePlay(kahootId)}>
                  Play
                </Button>
              </Box>
              <Box>
                <Button onClick={() => handleEdit(kahootId)}>Edit</Button>
              </Box>
            </Row>
          </Box>
        </Col>
      </Row>
    </Box>
  );
}

export default KahootCard;
