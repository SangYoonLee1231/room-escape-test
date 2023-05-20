import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LevelSelctPage = () => {
  const navigate = useNavigate;
  const onAboutClick = () => {
    navigate('/level-select');
  };

  return (
    <MainBody>
      <InstructionInfo>응시할 시험을 선택해주세요</InstructionInfo>
      <TestOneButton onClick={onAboutClick}>NEXT</TestOneButton>
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

const InstructionInfo = styled.div`
  margin: 10px 20px;
`;

const TestOneButton = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: larger;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

export default LevelSelctPage;
