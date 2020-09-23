import QuizForm from '@/components/Form/QuizForm';
import { Button, Col, Row, Tabs } from 'antd';
import React, { useState } from 'react';

const { TabPane } = Tabs;
function Creator() {
  const [activeKey, setActiveKey] = useState('1');
  const [keys, setKeys] = useState(['1']);

  const onChange = (key: any) => {
    setActiveKey(key);
  };
  const add = () => {
    let key = parseInt(keys[keys.length - 1]);
    const activeKey = ++key;
    const activeKeyString = activeKey.toString();
    const newKeys = [...keys];
    newKeys.push(activeKeyString);
    setKeys(newKeys);
    setActiveKey(activeKeyString);
  };
  const remove = (targetKey: any) => {
    let newActiveKey = activeKey;
    let lastIndex = 0;
    keys.forEach((key, i) => {
      if (key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newKeys = keys.filter(key => key !== targetKey);
    if (newKeys.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newKeys[lastIndex];
      } else {
        // eslint-disable-next-line prefer-destructuring
        newActiveKey = newKeys[0];
      }
    }
    setKeys(newKeys);
    setActiveKey(newActiveKey);
  };
  const onEdit = (a: any, b: any) => {
    if (b === 'add') {
      add();
    } else {
      remove(a);
    }
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        tabPosition="left"
        hideAdd
      >
        {keys.map((key, index) => (
          <TabPane tab={`Quiz ${index}`} key={key}>
            <Row justify="center">
              <Col span={12}>
                <QuizForm id={key} />
              </Col>
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default Creator;
