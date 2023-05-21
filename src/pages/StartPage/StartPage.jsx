import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StartPage = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate('/instruction');
  };

  return (
    <MainBody>
      <Title />
      <SubTitle>
        <Text fontSize="large">초보부터 고수까지</Text>
        <Text fontSize="large">모두를 위한 방탈출 문제 천국</Text>
        {/* <Text>Made by SYL</Text> */}
      </SubTitle>
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
  height: 95vh;
`;

const Title = styled.img.attrs({
  src: `./images/etc/title.png`,
  width: '400px',
})``;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
  margin: 4vh 0vh;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-family: 'SEBANG_Gothic';
`;

const Text = styled.span`
  font-size: ${props => props.fontSize || 200};
  margin: 5px;
`;

const StartButton = styled.button`
  width: 150px;
  height: 60px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 5vh;
  font-size: x-large;
  &:hover {
    background-color: black;
    color: white;
    border: 1px solid wheat;
  }
`;

export default StartPage;
