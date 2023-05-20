import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InstructionPage = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/level-select');
  };

  return (
    <MainBody>
      <InstructionInfo />
      <NextButton onClick={onAboutClick}>NEXT</NextButton>
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

const InstructionInfo = styled.img.attrs({
  src: `./images/etc/instruction.png`,
})``;

const NextButton = styled.button`
  width: 150px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: x-large;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

export default InstructionPage;
