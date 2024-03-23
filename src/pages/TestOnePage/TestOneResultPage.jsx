import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import GoogleAd, { infeedProps } from '../../components/GoogleAd';

const TestOneResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 점수 Hook
  const [testScore, setTestScore] = useState(0);
  const [testRank, setTestRank] = useState('');

  useEffect(() => {
    calcScore();
  }, [testScore]);

  const tempArray = Array.from({ length: 20 }, () => '.');

  const answersheet = JSON.parse(
    location.state
      ? location.state.answersheet || JSON.stringify(tempArray)
      : JSON.stringify(tempArray)
  );
  const nickname = location.state ? location.state.nickname || '학생' : '학생';

  const moveToStartPage = () => {
    navigate('/');
  };

  const answer = [
    '36',
    'REAL',
    '별',
    'IN',
    '6135',
    '2129',
    '단두대',
    'EXIT',
    'CF',
    'HOUSE',
    'CLOCK',
    '마구간',
    '사과',
    '특급',
    '160',
    'RICE',
    '527',
    'HIPPO',
    'TEST',
    'ROSE',
  ];

  const rank = [
    ['S', '100점', '고수 후보생'],
    '',
    ['A+', '90~99점', '정말 잘하심'],
    ['A', '80~89점', '잘하심'],
    '',
    ['B+', '70~79점', '중수'],
    ['B', '55~69점', '성장 중'],
    '',
    ['C+', '40~54점', '초보'],
    ['C', '30~39점', '왕초보'],
    '',
    ['D', '20~29점', '경험 더 필요'],
    '',
    ['F', '0~19점', '낙제'],
  ];

  const calcScore = () => {
    let score = 0;
    for (let i = 0; i < 20; i++) {
      if (answersheet[i].toUpperCase() === answer[i]) {
        score += 5;
      }
    }
    setTestScore(score);

    if (score === 100) {
      setTestRank('S');
    } else if (score >= 90 && score <= 99) {
      setTestRank('A+');
    } else if (score >= 80 && score <= 89) {
      setTestRank('A');
    } else if (score >= 70 && score <= 79) {
      setTestRank('B+');
    } else if (score >= 55 && score <= 69) {
      setTestRank('B');
    } else if (score >= 40 && score <= 54) {
      setTestRank('C+');
    } else if (score >= 30 && score <= 39) {
      setTestRank('C');
    } else if (score >= 20 && score <= 29) {
      setTestRank('D');
    } else {
      setTestRank('F');
    }
  };

  return (
    <>
      <GoogleAd {...infeedProps} />
      <MainBody>
        <HeaderArea>
          <Timer>00:00</Timer>
        </HeaderArea>
        {/* <Instruction src="./images/etc/before-start-test.png" /> */}
        <Instruction height="1470px">
          <InstructionTitle>▶︎ 테스트 결과 ◀︎</InstructionTitle>
          <InstructionList />
          <ul>
            <InstructionList fontSize="50px">👏🏻</InstructionList>
            <InstructionList />
            <InstructionList fontSize="17px">수고하셨습니다.</InstructionList>
            <InstructionList fontSize="16px">
              {nickname}님의 '기초 역량 테스트' 점수는 {testScore}
              점입니다.
            </InstructionList>
            <InstructionList fontSize="16px">
              등급은 {testRank}입니다.
            </InstructionList>
            <InstructionList>
              <InstructionList />
              <InstructionTitle>■ 채점표 ■</InstructionTitle>
              <ResultTable>
                <th className="short">번호</th>
                <th className="long">제출한 답</th>
                <th className="long">정답</th>
                <th className="short">정답 여부</th>
                {answersheet.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>{answer[index]}</td>
                    <td>{value.toUpperCase() === answer[index] ? 'O' : 'X'}</td>
                  </tr>
                ))}
              </ResultTable>
              <InstructionTitle>■ '기초 역량 테스트' 등급표 ■</InstructionTitle>
              <RankTable>
                <th>등급</th>
                <th>점수</th>
                <th>평가</th>
                {rank.map((value, index) => (
                  <tr key={index}>
                    <td>{value[0]}</td>
                    <td>{value[1]}</td>
                    <td>{value[2]}</td>
                  </tr>
                ))}
              </RankTable>
            </InstructionList>
          </ul>
          <InstructionList />
          <InstructionList />
        </Instruction>
        <Instruction height="1000px" fontColor="black">
          <InstructionList>
            문제의 풀이가 궁금하신 분들을 위해 해설 답안을 제공합니다.
          </InstructionList>
          <InstructionList>
            (해설 사이트 접속까지 시간이 꽤 소요될 수 있습니다.)
          </InstructionList>
          <ExplanationBtn
            onClick={() => {
              window.open(
                'https://superb-ranunculus-46a.notion.site/913536920aca4b0d96804336d2cc85a1'
              );
            }}
            target="_blank"
          >
            해설 보러 가기
          </ExplanationBtn>
          <InstructionList />
          <InstructionList />
          <hr width="400px" />
          <InstructionList />
          <InstructionList />
          <InstructionList>
            혹시 시험에 관하여 제작자에게 문의드리고 싶은 것이 있다면
          </InstructionList>
          <InstructionList>
            일대일 오픈채팅방을 이용해주시기를 바랍니다.
          </InstructionList>
          <ExplanationBtn
            onClick={() => {
              window.open('https://open.kakao.com/o/sAFqQtae');
            }}
            target="_blank"
          >
            오픈채팅방 바로가기
          </ExplanationBtn>
          <InstructionList />
          <InstructionList />
          <hr width="400px" />
          <InstructionList />
          <InstructionList />
          <InstructionList>
            또한, 제작자의 다른 작품을 플레이해보고 싶거나
          </InstructionList>
          <InstructionList>
            제작자를 후원하고 싶으신 분들은 아래 버튼을 클릭해주세요.
          </InstructionList>
          <InstructionList />
          <ExplanationBtn
            onClick={() => {
              window.open(
                'https://superb-ranunculus-46a.notion.site/cb0658883e874aa6b9414d8da7c8aefa'
              );
            }}
            target="_blank"
          >
            제작자의 다른 작품 보러가기
          </ExplanationBtn>
          <ExplanationBtn
            onClick={() => {
              window.open('https://toss.me/syl1231');
            }}
            target="_blank"
          >
            제작자 후원하기
          </ExplanationBtn>
          <InstructionList />
          <InstructionList>
            여러분의 후원은 제가 더 좋은 작품을 만드는 동기로 삼겠습니다.
          </InstructionList>
          <InstructionList />
          <InstructionList />
          <hr width="400px" />
          <InstructionList />
          <InstructionList />
          <InstructionList>◆ 플레이 해주셔서 감사드립니다. ◆</InstructionList>
          <InstructionList />
        </Instruction>
        <FooterArea>
          {/* <NicknameBar>
          <NicknameSpan>테스트에 응해주셔서 감사드립니다</NicknameSpan>
          <NickNameInput onChange={event => handleChange(event)} />
        </NicknameBar> */}
          <BtnArea>
            <GoToFirstBtn onClick={moveToStartPage}>
              처음으로 돌아가기
            </GoToFirstBtn>
          </BtnArea>
        </FooterArea>
      </MainBody>
    </>
  );
};

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-bottom: 100px;
  /* height: 95vh; */
`;

const HeaderArea = styled.div`
  display: flex;
  align-items: space-between;
  margin-top: 10vh;
  margin-bottom: 15px;
`;

const ResultFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  background-color: black;
  color: #ecefef;
  font-family: 'SEBANG_Gothic';
  font-size: x-large;
`;

const Instruction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: ${props => props.height || '1100px'};
  margin: 10px 0px 100px 0px;
  border-radius: 5px;
  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.fontColor || 'black'};
  font-family: 'paybooc';
  animation: ${ResultFadeIn} 2s linear;
  &.ul.li {
    text-align: center;
  }
`;

const InstructionTitle = styled.h3`
  margin: 30px 0px 20px 0px;
`;

const InstructionList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  line-height: 25px;
  font-size: ${props => props.fontSize || '14px'};
`;

const ResultTable = styled.table`
  margin: 20px 0px;
  text-align: center;
  tr {
    border: 1px solid black;
  }
  .short {
    width: 50px;
  }
  .long {
    width: 100px;
  }
`;

const RankTable = styled.table`
  text-align: center;
  margin: 20px 0px;
  tr {
    border: 1px solid black;
  }
  th {
    width: 100px;
  }
`;

const ExplanationBtn = styled.button`
  width: 230px;
  height: 40px;
  margin: 10px 10px;
  font-size: medium;
  background-color: white;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: black;
    color: white;
  }
`;

const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 15px 0px;
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoToFirstBtn = styled.button`
  width: 300px;
  height: 50px;
  margin: 0px 10px;
  font-size: large;
  transition: transform 0.1s ease-in-out;
  animation: ${ResultFadeIn} 2s linear;
  &:hover {
    transform: scale(1.05);
  }
`;

export default TestOneResultPage;
