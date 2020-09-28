/* eslint-disable no-underscore-dangle */
import { AppDispatch } from '@/app/store';
import { KahootFormValues } from '@/components/Form/KahootForm';
import { createKahoot } from '@/features/Kahoot/kahootSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import KahootForm from '../Form/KahootForm';

function NewKahootModal(props: any) {
  const { children } = props;
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = async (values: KahootFormValues) => {
    setVisible(false);
    const kahootResponse = await dispatch(createKahoot(values));
    const kahoot = unwrapResult(kahootResponse);
    history.push(`/kahoots/${kahoot._id}`);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {children}
      </Button>
      <Modal
        title="Add new kahoot"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={false}
      >
        <KahootForm onSubmit={handleSubmit} />
      </Modal>
    </>
  );
}

export default NewKahootModal;
