/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { AppDispatch } from '@/app/store';
import kahootsSlice from '@/features/Kahoot/slice/kahoots';
import { SuccessNotification } from '@/utils/notification';
import { Modal } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  children: React.ReactChild;
  kahootId: string;
}
const DeleteKahootModal: FC<Props> = ({ children, kahootId }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (kahootId: string) => {
    dispatch(kahootsSlice.deleteById(kahootId));
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
};

export default DeleteKahootModal;
