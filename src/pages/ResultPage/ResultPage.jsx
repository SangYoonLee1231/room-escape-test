import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ResultPage = () => {
  const location = useLocation();

  const answersheet = JSON.parse(location.state.answersheet);
  console.log(answersheet);

  return <MainBody>{answersheet}</MainBody>;
};

const MainBody = styled.div`
  width: 500px;
  height: 60vh;
  background-color: white;
  color: black;
`;

export default ResultPage;
