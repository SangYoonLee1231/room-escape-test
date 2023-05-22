import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import TestEndConfirmation from './TestComponent/TestEndConfirmation';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TestOnePage = () => {
  // 페이지 이동 Hook
  const navigate = useNavigate();
  const moveToResultPage = () => {
    navigate('/result');
  };

  // 타이머 설정 코드 - useState Hook
  const [quizNum, setQuizNum] = useState(1);
  const [timeRemain, setTimeRemain] = useState(900);

  const [isOpen, setIsOpen] = useState(false);

  // 타이머 설정 코드 - 기능 수행 Hook
  useEffect(() => {
    const x = setInterval(() => {
      setTimeRemain(timeRemain => timeRemain - 1);
    }, 1000);
    if (timeRemain < 0) {
      moveToResultPage();
    }
    return () => clearInterval(x);
  }, [timeRemain]);

  useEffect(() => {}, [quizNum]);

  // 새로고침 방지 Hook
  useEffect(() => {
    const handleBeforeUnload = event => {
      event.preventDefault();
      // 사용자에게 표시할 메시지
      event.returnValue =
        '새로고침은 부정행위입니다. 저는 여러분의 양심을 믿습니다.';
    };

    const handleRefresh = event => {
      event.preventDefault();
      // 사용자에게 표시할 메시지
      const confirmationMessage =
        '새로고침은 부정행위입니다. 저는 여러분의 양심을 믿습니다.';
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleRefresh);
    };
  }, []);

  // 퀴즈 번호 이동 관리 함수 코드
  const moveToPrev = () => {
    setQuizNum(quizNum => (quizNum >= 2 ? quizNum - 1 : 20));
  };

  const moveToNext = () => {
    setQuizNum(quizNum => (quizNum <= 19 ? quizNum + 1 : 1));
  };

  // 모달 창 관리 코드
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    // 확인 버튼을 눌렀을 때 수행할 작업
    moveToResultPage();
    closeModal();
  };

  return (
    <MainBody>
      <HeaderArea>
        <Timer>
          {String(parseInt(timeRemain / 60)).padStart(2, '0')}:
          {String(timeRemain % 60).padStart(2, '0')}
        </Timer>
      </HeaderArea>
      <Question src={`./images/questions/q${quizNum}.png`} />
      <FooterArea>
        <QuestionBar>
          <MoveBtn onClick={moveToPrev}>◀︎</MoveBtn>
          <QuestionNum>{quizNum} / 20</QuestionNum>
          <MoveBtn onClick={moveToNext}>▶︎</MoveBtn>
        </QuestionBar>
        <EndBtn onClick={openModal}>시험 종료하기</EndBtn>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '400px',
              height: '200px',
              border: '5px solid red',
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          <ModalMessage>
            정말 시험을 종료하고 정답을 확인하시겠습니까?
          </ModalMessage>
          <ModalBtn bgColor="#4b4b4f" fontColor="white" onClick={handleConfirm}>
            🆗 예. 종료합니다.
          </ModalBtn>
          <ModalBtn onClick={closeModal}>❌ 아니오. 계속 풀겠습니다.</ModalBtn>
        </Modal>
      </FooterArea>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
`;

const HeaderArea = styled.div`
  display: flex;
  align-items: space-between;
  margin-bottom: 15px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  background-color: black;
  color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: x-large;
`;

const QuestionNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  background-color: black;
  color: #ecefef;
  font-family: 'SEBANG_Gothic';
`;

const Question = styled.img``;

const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 15px 0px;
`;

const QuestionBar = styled.div`
  display: flex;
  align-items: space-between;
  margin: 10px 0px;
`;

const MoveBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: x-large;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

const EndBtn = styled.button`
  height: 30px;
  font-size: medium;
`;

const ModalMessage = styled.div`
  margin-bottom: 30px;
  font-family: 'paybooc';
`;

const ModalBtn = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  padding: 5px 15px;
  margin: 5px;
  font-size: small;
  border-radius: 10px;
`;

export default TestOnePage;