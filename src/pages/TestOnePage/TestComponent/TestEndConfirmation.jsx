import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TestEndConfirmation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    // 확인 버튼을 눌렀을 때 수행할 작업
    console.log('Confirmed!');
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <p>정말 시험을 종료하고 정답을 확인하시겠습니까?</p>
        <button onClick={handleConfirm}>예. 종료합니다.</button>
        <button onClick={closeModal}>아니오. 계속 풀겠습니다.</button>
      </Modal>
    </div>
  );
};

export default TestEndConfirmation;
