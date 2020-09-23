import { Button, Col, Dropdown, Image, Menu, Row } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined, FormOutlined } from '@ant-design/icons';
import Box from '../Common/Box';
import Text from '../Common/Text';
import { useHistory } from 'react-router-dom';

function KahootCard() {
  const history = useHistory();
  const handleClick = (kahootId: string) => {
    // do something
    history.push('/rooms/roomId')
  }
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
                <Text>Title</Text>
              </Col>
              <Col>
                <Dropdown.Button
                  trigger={['click']}
                  overlay={
                    <Menu>
                      <Menu.Item key="1" icon={<FormOutlined />}>
                        Rename
                      </Menu.Item>
                      <Menu.Item key="2" icon={<EditOutlined />}>
                        Edit
                      </Menu.Item>
                      <Menu.Item key="3" icon={<DeleteOutlined />}>
                        Delete
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
                <Button type="primary" onClick={() => handleClick("id")}>Play</Button>
              </Box>
              <Box>
                <Button>Edit</Button>
              </Box>
            </Row>
          </Box>
        </Col>
      </Row>
    </Box>
  );
}

export default KahootCard;
