import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LevelSelctPage = () => {
  const navigate = useNavigate();

  // '기초 역량 테스트'로 이동
  const moveToTestOne = () => {
    navigate('/test-one-before-start');
  };
  // '기초 역량 테스트2'로 이동
  const moveToTestTwo = () => {
    navigate('/test-two-before-start');
  };
  // '기초 역량 테스트2'로 이동
  const moveToTestThree = () => {
    navigate('/test-three-before-start');
  };

  return (
    <MainBody>
      <InstructionInfo>📝 응시할 시험을 선택해주세요</InstructionInfo>
      <TestButton onClick={moveToTestOne}>
        {/* ＜＜ ＞＞ */}
        <Text fontSize="x-large" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 기초 역량 테스트
        </Text>
        <TestInfo>
          <Text fontSize="13px">방탈출 및 미궁 게임 문제에서</Text>
          <Text fontSize="13px">자주 등장하는 소재로 구성된</Text>
          <Text fontSize="14px">기본기 테스트</Text>
          <Text fontSize="5px" />
          <Text fontSize="5px" />
          <Text fontSize="12px">▶︎ 문제 수: 20문제 | 제한시간: 30분 ◀︎</Text>
        </TestInfo>
      </TestButton>
      {/* <TestButton onClick={moveToTestTwo}> */}
      <TestButton>
        {/* <Text fontSize="x-large" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 기초 역량 테스트 2
        </Text> */}
        <Text fontSize="large" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 상급 역량 테스트 (준비중)
        </Text>
        <TestInfo>
          <Text fontSize="13px">새 버전의 방탈출 테스트</Text>
          <Text fontSize="5px" />
          <Text fontSize="13px">⦿ 2023년 8월 28일 출시 예정 ⦿</Text>
          {/* <Text fontSize="13px"></Text> */}
          {/* <Text fontSize="14px">'기초 역량 테스트'보다 조금 더 어려움</Text> */}
          {/* <Text fontSize="5px" /> */}
          {/* <Text fontSize="12px">▶︎ 문제 수: 20문제 | 제한시간: 40분 ◀︎</Text> */}
        </TestInfo>
      </TestButton>
      <TestButton onClick={moveToTestThree}>
        <Text fontSize="x-large" fontStyle="SEBANG_Gothic" marginBottom="20px">
          📌 고수 테스트
        </Text>
        <TestInfo>
          <Text fontSize="13px">다양한 방탈출 문제를 접해본</Text>
          <Text fontSize="13px">경험이 요구되는</Text>
          <Text fontSize="14px">숙련자를 위한 시험</Text>
          <Text fontSize="3px" />
          <Text fontSize="3px" />
          <Text fontSize="12px">▶︎ 문제 수: 20문제 | 제한시간: 30분 ◀︎</Text>
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
  margin: 10vh 0 10vh 0;
`;

const InstructionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 80px;
  margin: 10px 20px 40px 20px;
  /* border-radius: 5px; */
  background-color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: 23px;
`;

const TestButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 220px;
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
  width: 250px;
  height: 120px;
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
