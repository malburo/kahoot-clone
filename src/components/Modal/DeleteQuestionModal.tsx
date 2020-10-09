/* eslint-disable no-undef */
import { Modal } from 'antd';
import React, { useState } from 'react';

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
  const [visible, setVisible] = useState(false);

  const handleOk = (kahootId: string, questionId: string) => {
    onDelele(kahootId, questionId);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      {React.cloneElement(children, { onClick: () => setVisible(true) })}
      <Modal
        title="Delete kahoot"
        visible={visible}
        onOk={e => {
          e.stopPropagation();
          handleOk(kahootId, questionId);
        }}
        onCancel={handleCancel}
      >
        Do you want to delete this question?
      </Modal>
    </>
  );
}

export default DeleteQuestionModal;
