import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TestTwoPage = () => {
  // 닉네임 정보 받아오기
  const location = useLocation();

  const nickname = location.state ? location.state.nickname || '학생' : '학생';

  // 페이지 이동 Hook
  const navigate = useNavigate();
  const moveToResultPage = () => {
    const data = JSON.stringify(inputValues);
    navigate(`/test-two-result`, {
      state: {
        answersheet: data || '',
        nickname: nickname || '학생',
      },
    });
  };

  // 타이머 설정 코드 - useState Hook
  const [quizNum, setQuizNum] = useState(1);
  const [timeRemain, setTimeRemain] = useState(1800);

  // 모달 창 Hook
  const [isOpen, setIsOpen] = useState(false);

  // 답안지 토글 관리 Hook
  const [isAnswerSheetOpen, setIsAnswerSheetOpen] = useState(false);

  // 답안지 작성 내용 관리 Hook
  const [inputValues, setInputValues] = useState(Array(15).fill(''));
  console.log(inputValues);

  useEffect(() => {}, [inputValues]);

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
      // 사용자에게 표시할 메시지
      event.preventDefault();
      event.returnValue = '';
    };

    const handleRefresh = event => {
      event.preventDefault();
      // 사용자에게 표시할 메시지
      const confirmationMessage = '';
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

  // 뒤로가기 막는 코드
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, '', ''); // 현재 페이지 history stack 한개 더 쌓기
    window.onpopstate = () => {
      // 뒤로가기가 실행될 경우 추가 action 등록
      alert('뒤로가기 방지용 알림입니다.');
    };
  }, []);

  // 퀴즈 번호 이동 관리 함수 코드
  const moveToPrev = () => {
    setQuizNum(quizNum => (quizNum >= 2 ? quizNum - 1 : 15));
  };

  const moveToNext = () => {
    setQuizNum(quizNum => (quizNum <= 14 ? quizNum + 1 : 1));
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

  // 답안지 토글 관리 함수
  const handleAnswerSheetOpen = () => {
    setIsAnswerSheetOpen(true);
  };

  const handleAnswerSheetClose = () => {
    setIsAnswerSheetOpen(false);
  };

  // 답안지 작성 관리 함수
  const handleChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  return (
    <MainBody>
      <HeaderArea>
        <Timer>
          {String(parseInt(timeRemain / 60)).padStart(2, '0')}:
          {String(timeRemain % 60).padStart(2, '0')}
        </Timer>
      </HeaderArea>
      {/* {isRefreshing ? (
        <BlackScreen />
      ) : (
        <Question src={`./images/questions/q${quizNum}.png`} />
      )} */}
      <Question
        src={`./images/type2/q${quizNum}.png`}
        width="350px"
        height="350px"
      />
      <FooterArea>
        <QuestionBar>
          <MoveBtn onClick={moveToPrev}>◀︎</MoveBtn>
          <QuestionNum>{quizNum} / 15</QuestionNum>
          <MoveBtn onClick={moveToNext}>▶︎</MoveBtn>
        </QuestionBar>
        <BtnArea>
          <AnswerSheetBtn onClick={handleAnswerSheetOpen}>
            답안지 작성
          </AnswerSheetBtn>
          <EndBtn onClick={openModal}>답안지 제출하기</EndBtn>
        </BtnArea>
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
              width: '500px',
              height: '250px',
              border: '5px solid red',
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          <ModalMessage>
            정말 시험을 종료하고 답안지를 제출하시겠습니까?
          </ModalMessage>
          <ModalMessage>
            답안지에 오타가 없는지 다시 한 번 확인하시기 바랍니다.
          </ModalMessage>
          <ModalBtn bgColor="#4b4b4f" fontColor="white" onClick={handleConfirm}>
            🆗 예. 답안지를 제출하고 시험을 종료합니다.
          </ModalBtn>
          <ModalBtn onClick={closeModal}>❌ 아니오. 계속 풀겠습니다.</ModalBtn>
        </Modal>
      </FooterArea>
      {isAnswerSheetOpen && (
        <AnswerSheetArea>
          <AnswerSheet>
            {inputValues.map((value, index) => (
              <AnswerSheetElement key={index}>
                <span>{index + 1}.</span>
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={event => handleChange(index, event)}
                />
              </AnswerSheetElement>
            ))}
          </AnswerSheet>
          <AnswerSheetCloseBtn onClick={handleAnswerSheetClose}>
            답안지 닫기
          </AnswerSheetCloseBtn>
        </AnswerSheetArea>
      )}
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 100px;
  /* height: 95vh; */
`;

const HeaderArea = styled.div`
  display: flex;
  align-items: space-between;
  margin-top: 10vh;
  margin-bottom: 15px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 50px;
  border-radius: 5px;
  background-color: black;
  color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: x-large;
`;

const QuestionNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  background-color: black;
  color: #ecefef;
  font-size: large;
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
  justify-content: center;
  margin: 10px 0px;
`;

const MoveBtn = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: x-large;
  transition: transform 0.1s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
    transform: scale(1.1);
  }
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EndBtn = styled.button`
  width: 180px;
  height: 35px;
  margin: 10px 10px;
  font-size: medium;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const AnswerSheetBtn = styled.button`
  width: 180px;
  height: 35px;
  margin: 10px 10px;
  font-size: medium;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const ModalMessage = styled.div`
  margin-bottom: 30px;
  font-size: large;
  font-family: 'paybooc';
`;

const ModalBtn = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
  padding: 5px 15px;
  margin: 5px;
  font-size: medium;
  border-radius: 10px;
`;

const AnswerSheetArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const AnswerSheet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px 0px;
  border: 2px solid black;
  background-color: white;
  border-radius: 2px;
`;

const AnswerSheetElement = styled.div`
  padding: 5px;
  margin: 2px 0px;
  span {
    font-family: 'paybooc';
  }
  input {
    width: 100px;
    margin: 0px 10px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    text-align: center;
    &:focus {
      outline: none;
    }
  }
`;

const AnswerSheetCloseBtn = styled.button`
  width: 350px;
  height: 30px;
  margin: 10px 10px;
  font-size: medium;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default TestTwoPage;
