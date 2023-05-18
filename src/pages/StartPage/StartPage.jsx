import React from 'react';
import styled from 'styled-components';

const StartPage = () => {
  return (
    <MainBody>
      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
        <div style={{ backgroundColor: 'tomato', width: 100, height: 100 }} />
      </div>
    </MainBody>
  );
};

// const MainBody = styled.div`
//   margin-top: 140px;
// `;

export default StartPage;

const MainBody = styled.div`
  width: 100vw;
  height: 100vh;
`;
