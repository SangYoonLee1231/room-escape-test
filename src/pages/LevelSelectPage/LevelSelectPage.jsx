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
      <InstructionInfo>📝 응시할 시험을 선택해주세요</InstructionInfo>
      <TestOneButton onClick={moveToTestOne}>
        {/* ＜＜ ＞＞ */}
        <Text fontSize="larger" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 기초 역량 테스트
        </Text>
        <TestOneInfo>
          <Text fontSize="14px">
            방탈출의 기본기를 테스트하는 가장 베이직한 시험
          </Text>
          <Text fontSize="12px">▸ 추천 대상: 모든 인원</Text>
          <Text fontSize="12px">▸ 20문제 / 제한시간: 30분</Text>
        </TestOneInfo>
      </TestOneButton>
    </MainBody>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100vw;
  height: 95vh;
  margin-top: 10vh;
`;

const InstructionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 120px;
  margin: 10px 20px 40px 20px;
  background-color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: 32px;
`;

const TestOneButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  /* border: 1px solid black; */
  border-radius: 5px;
  font-size: x-large;
  background-color: #50505e;
  color: #ecefef;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

const TestOneInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 85px;
  margin-top: 5px;
  /* border: 2.5px solid #50505e; */
  border-radius: 5px;
  background-color: #e2e2e2;
  color: black;
  font-family: 'paybooc';
`;

const Text = styled.span`
  font-size: ${props => props.fontSize || 200};
  font-family: ${props => props.fontStyle || 'paybooc'};
  margin: 3px;
  margin-bottom: ${props => props.marginBottom};
`;

export default LevelSelctPage;
