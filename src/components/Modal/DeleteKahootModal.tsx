/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AppDispatch } from '@/app/store';
import { deleteKahoot } from '@/features/Kahoot/slice/kahoots';
import { Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function DeleteKahootModal(props: any) {
  const { children, kahootId } = props;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (kahootId: string) => {
    dispatch(deleteKahoot(kahootId));
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <span onClick={() => setVisible(true)}>{children}</span>
      <Modal
        title="Delete kahoot"
        visible={visible}
        onOk={e => handleDelete(kahootId)}
        onCancel={handleCancel}
      >
        Do you want to delete this kahoot?
      </Modal>
    </>
  );
}

export default DeleteKahootModal;
