/* eslint-disable no-underscore-dangle */
import { AppDispatch } from '@/app/store';
import { KahootFormValues } from '@/components/Form/KahootForm';
import kahootsSlice from '@/features/Kahoot/slice/kahoots';
import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Modal } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import KahootForm from '../Form/KahootForm';

const NewKahootModal: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = (values: KahootFormValues) => {
    setVisible(false);
    try {
      const kahoot: any = dispatch(kahootsSlice.createNew(values)).then(
        unwrapResult,
      );
      history.push(`/kahoots/${kahoot.data._id}`);
    } catch (error) {
      console.log(error);
    }
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
};

export default NewKahootModal;
