/* eslint-disable no-undef */
import useToggle from '@/hooks/useToggle';
import { Modal } from 'antd';
import React from 'react';

interface Props {
  children: any;
  kahootId: string;
  questionId: string;
  onDelele: (kahootId: string, questionId: string) => void;
}

function DeleteQuestionModal({
  children,
  kahootId,
  questionId,
  onDelele,
}: Props) {
  const [isVisible, onOpen, onClose] = useToggle(false);
  const handleOk = (kahootId: string, questionId: string) => {
    onDelele(kahootId, questionId);
    onClose();
  };
  return (
    <>
      {React.cloneElement(children, { onClick: onOpen })}
      <Modal
        title="Delete kahoot"
        visible={isVisible}
        onOk={e => {
          e.stopPropagation();
          handleOk(kahootId, questionId);
        }}
        onCancel={onClose}
      >
        Do you want to delete this question?
      </Modal>
    </>
  );
}

export default DeleteQuestionModal;
