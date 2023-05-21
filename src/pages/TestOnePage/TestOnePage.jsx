import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TestOnePage = () => {
  const navigate = useNavigate();
  const moveToResultPage = () => {
    navigate('/result');
  };
  const [quizNum, setQuizNum] = useState(0);
  const [timeRemain, setTimeRemain] = useState(1800);
  // const [min, setMin] = useState(30);
  // const [sec, setSec] = useState(0);

  useEffect(() => {}, [quizNum]);

  useEffect(() => {
    const x = setInterval(() => {
      // setMin(min => parseInt(timeRemain / 60));
      // setSec(sec => parseInt(timeRemain % 60));
      setTimeRemain(timeRemain => timeRemain - 1);
    }, 1000);
    // console.log(timeRemain);
    if (timeRemain < 0) {
      moveToResultPage();
    }
    return () => clearInterval(x);
  }, [timeRemain]);

  const moveToPrev = () => {
    setQuizNum(quizNum => (quizNum >= 1 ? quizNum - 1 : 0));
  };

  const moveToNext = () => {
    setQuizNum(quizNum => (quizNum <= 19 ? quizNum + 1 : 20));
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
        <EndBtn>시험 종료하기</EndBtn>
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
  margin: 30px 0px;
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

export default TestOnePage;
