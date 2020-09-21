import Modal from 'antd/lib/modal/Modal';
import React from 'react';

interface QuizImageModalProps {
  previewVisible: boolean;
  previewTitle: React.ReactNode;
  handleCancel:
    | ((e: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  previewImage: string;
}

const QuizImageModal: React.FC<QuizImageModalProps> = ({
  previewVisible,
  previewTitle,
  handleCancel,
  previewImage,
}) => (
  <Modal
    visible={previewVisible}
    title={previewTitle}
    footer={null}
    onCancel={handleCancel}
  >
    <img alt="example" style={{ width: '100%' }} src={previewImage} />
  </Modal>
);

export default QuizImageModal;
