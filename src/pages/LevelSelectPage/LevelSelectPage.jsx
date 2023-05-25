import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const LevelSelctPage = () => {
  const navigate = useNavigate();
  const moveToTestOne = () => {
    navigate('/test-one-before-start');
  };

  return (
    <MainBody>
      <InstructionInfo>📝 응시할 시험을 선택해주세요</InstructionInfo>
      <TestButton onClick={moveToTestOne}>
        {/* ＜＜ ＞＞ */}
        <Text fontSize="larger" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 기초 역량 테스트
        </Text>
        <TestInfo>
          <Text fontSize="14px">
            방탈출 문제 해결 능력을 평가하는 가장 베이직한 시험
          </Text>
          <Text fontSize="13px">
            (방탈출 및 미궁 게임의 빈출 소재를 바탕으로한 문제들로 구성)
          </Text>
          <Text fontSize="3px" />
          <Text fontSize="12px">
            ▸ 추천 대상 : 모든 인원 (초보자에게 특히 추천)
          </Text>
          <Text fontSize="12px">▸ 문제 수 : 20문제 / 제한시간: 30분</Text>
        </TestInfo>
      </TestButton>
      <TestButton onClick={moveToTestOne}>
        {/* ＜＜ ＞＞ */}
        <Text fontSize="larger" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 고수 테스트
        </Text>
        <TestInfo>
          <Text fontSize="14px">
            난이도가 중급 이상인 문제들이 대부분인, 숙련자들을 위한 시험
          </Text>
          <Text fontSize="13px">
            (최소한의 가이드만 제공. 다양한 문제를 풀어본 경험이 요구됨)
          </Text>
          <Text fontSize="3px" />
          <Text fontSize="12px">
            ▸ 추천 대상 : 방탈출 혹은 미궁 게임 클리어 유경험자
          </Text>
          <Text fontSize="12px">▸ 문제 수 : 15문제 / 제한시간: 50분</Text>
        </TestInfo>
      </TestButton>
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
  height: 90px;
  margin: 10px 20px 40px 20px;
  /* border-radius: 5px; */
  background-color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: 32px;
`;

const TestButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 230px;
  /* border: 1px solid black; */
  margin: 20px 0px;
  border-radius: 5px;
  font-size: x-large;
  background-color: #50505e;
  color: #ecefef;
  transition: transform 0.1s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
    transform: scale(1.1);
  }
`;

const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 115px;
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
