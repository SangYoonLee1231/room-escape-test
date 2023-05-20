import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StartPage = () => {
  const navigate = useNavigate;
  const onAboutClick = () => {
    navigate('/instruction');
  };

  return (
    <MainBody>
      <Logo />
      <StartButton onClick={onAboutClick}>START</StartButton>
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

const Logo = styled.img.attrs({
  src: `./images/etc/logo.png`,
})``;

const StartButton = styled.button`
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

export default StartPage;
