import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ResultPage = () => {
  const location = useLocation();

  const answersheet = JSON.parse(location.state.answersheet);
  const nickname = location.state.nickname;
  // console.log(answersheet);
  // console.log(nickname);

  return (
    <MainBody>
      <DivOne>{nickname}</DivOne>
      <DivTwo>{answersheet}</DivTwo>
    </MainBody>
  );
};

const MainBody = styled.div`
  width: 500px;
  height: 60vh;
  background-color: white;
  color: black;
`;

const DivOne = styled.div``;

const DivTwo = styled.div``;

export default ResultPage;
