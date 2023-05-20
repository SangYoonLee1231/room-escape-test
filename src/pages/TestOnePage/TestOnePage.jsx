import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TestOnePage = () => {
  const navigate = useNavigate();
  const [quizNum, setQuizNum] = useState(1);
  const [timeRemain, setTimeRemain] = useState(1800);

  useEffect(() => {}, [quizNum]);

  const moveToPrev = () => {
    setQuizNum(quizNum => (quizNum >= 2 ? quizNum - 1 : 1));
  };

  const moveToNext = () => {
    setQuizNum(quizNum => (quizNum <= 24 ? quizNum + 1 : 25));
  };

  return (
    <MainBody>
      <HeaderArea>
        <Timer />
      </HeaderArea>
      <Question src={`./images/questions/${quizNum}.png`} />
      <FooterArea>
        <QuestionBar>
          <MoveBtn onClick={moveToPrev}>◀︎</MoveBtn>
          <QuestionNum>{quizNum} / 25</QuestionNum>
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
  height: 100vh;
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
