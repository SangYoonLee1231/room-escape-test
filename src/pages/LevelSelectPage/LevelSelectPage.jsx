import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LevelSelctPage = () => {
  const navigate = useNavigate();
  const moveToTestOne = () => {
    navigate('/test-one');
  };

  return (
    <MainBody>
      <InstructionInfo>응시할 시험을 선택해주세요</InstructionInfo>
      <TestOneButton onClick={moveToTestOne}>
        ＜＜ 기초 능력 테스트 ＞＞
      </TestOneButton>
      <TestOneInfo>20문제 / 제한시간 30분</TestOneInfo>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 10vh;
`;

const InstructionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 110px;
  margin: 10px 20px 40px 20px;
  background-color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: 32px;
`;

const TestOneButton = styled.button`
  width: 400px;
  height: 70px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: x-large;
  background-color: #626060;
  color: #ecefef;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

const TestOneInfo = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 25px;
  background-color: white;
  border: 0.5px solid black;
  border-radius: 1px;
  font-family: '국립박물관문화재단클래식B';
`;

export default LevelSelctPage;
