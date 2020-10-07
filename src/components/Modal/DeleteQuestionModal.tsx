import { Modal } from 'antd';
import React, { useState } from 'react';

function DeleteQuestionModal(props: any) {
  const { children, kahootId, questionId, onDelele } = props;
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
        onOk={e => handleOk(kahootId, questionId)}
        onCancel={handleCancel}
      >
        Do you want to delete this question?
      </Modal>
    </>
  );
}

export default DeleteQuestionModal;
