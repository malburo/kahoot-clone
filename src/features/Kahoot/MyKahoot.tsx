import { AppDispatch } from '@/app/store';
import KahootCard from '@/components/Card/KahootCard';
import Box from '@/components/Common/Box';
import NewKahootModal from '@/components/Modal/NewKahootModal';
import { Col, Empty, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import kahootsSlice from './slice/kahoots';

function MyKahoot() {
  const dispatch = useDispatch<AppDispatch>();

  const kahoots = useSelector(kahootsSlice.selectAll);
  const kahootList = kahoots.map(kahoot => {
    const { title, _id } = kahoot;
    return <KahootCard title={title} kahootId={_id} key={_id} />;
  });

  useEffect(() => {
    dispatch(kahootsSlice.fetchAll());
  }, [dispatch]);
  return (
    <Box m={100}>
      <Box marginY={50}>
        <Row justify="center">
          <Col span={10}>
            <Search
              placeholder="input search text"
              enterButton="Search"
              size="large"
              onSearch={value => console.log(value)}
            />
          </Col>
        </Row>
      </Box>
      <NewKahootModal>Add new kahoot</NewKahootModal>
      {kahootList}
      {kahootList.length === 0 && <Empty />}
    </Box>
  );
}

export default MyKahoot;
