import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const RecommandationPage = () => {
  // 페이지 이동 Hook
  const navigate = useNavigate();
  const moveToTestOne = () => {
    const nickname = inputNickname;
    navigate(`/test-one`, {
      state: {
        nickname: nickname || '학생',
      },
    });
  };

  // 답안지 작성 내용 관리 Hook
  const [inputNickname, setInputNickname] = useState('');

  // useEffect(() => {}, [inputNickName]);

  // 새로고침 방지 Hook
  useEffect(() => {
    const handleBeforeUnload = event => {
      event.preventDefault();
      // 사용자에게 표시할 메시지
      event.returnValue =
        '새로고침은 부정행위입니다. 저는 여러분의 양심을 믿습니다.';
    };

    const handleRefresh = event => {
      event.preventDefault();
      // 사용자에게 표시할 메시지
      const confirmationMessage =
        '새로고침은 부정행위입니다. 저는 여러분의 양심을 믿습니다.';
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('unload', handleRefresh);
    };
  }, []);

  // 답안지 작성 관리 함수
  const handleChange = event => {
    const newInputNickname = event.target.value;
    setInputNickname(newInputNickname);
  };

  return (
    <MainBody>
      <HeaderArea>
        <Timer>30:00</Timer>
      </HeaderArea>
      {/* <Instruction src="./images/etc/before-start-test.png" /> */}
      <Instruction>
        <InstructionTitle>■ 시험 전 유의사항 (필독)</InstructionTitle>
        <ul>
          <InstructionList>
            ⁃ 답은 반드시 답안지에 기입해주시기 바랍니다.
          </InstructionList>
          <InstructionList>
            ⁃ 제한 시간은 15분, 총 문제 수는 20문제이며, 배점은 문제 당
            5점입니다.
          </InstructionList>
          <InstructionList>
            ⁃ 답안지를 제출하거나 제한시간이 모두 지나면, 자동으로 채점되어 시험
            결과가 발표됩니다. 채점 시 영어 대소문자는 구분하지 않습니다.
          </InstructionList>
          <InstructionList>
            ⁃ 시험 시작 전, 종이와 펜을 미리 준비해주시기 바랍니다. 반드시
            필요한 것은 아니지만, 만일 있다면 문제 풀이가 좀 더 수월할 것입니다.
          </InstructionList>
          <InstructionList>
            ⁃ 시험이 진행되는 도중에는 새로고침을 하거나 페이지를 이탈하지
            않도록 각별히 주의해주시기 바랍니다. 답안지가 모두 초기화될 수
            있습니다.
          </InstructionList>
        </ul>
      </Instruction>
      <FooterArea>
        <NicknameBar>
          <NicknameSpan>아래에 이름 혹은 닉네임을 기입해주세요</NicknameSpan>
          <NickNameInput onChange={event => handleChange(event)} />
        </NicknameBar>
        <BtnArea>
          <AnswerSheetBtn onClick={moveToTestOne}>시험 시작</AnswerSheetBtn>
        </BtnArea>
      </FooterArea>
    </MainBody>
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
  height: 450px;
  margin: 10px 0px;
  padding: 50px;
  border-radius: 5px;
  background-color: white;
  font-family: 'paybooc';
`;

const InstructionTitle = styled.h3`
  margin-bottom: 20px;
`;

const InstructionList = styled.li`
  padding: 5px 0px;
  line-height: 25px;
  font-size: 14px;
`;

const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin: 15px 0px;
`;

const NicknameBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 100px;
  margin: 10px 0px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
`;

const NicknameSpan = styled.span`
  font-family: 'paybooc';
`;

const NickNameInput = styled.input`
  width: 200px;
  margin: 10px 10px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 15px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnswerSheetBtn = styled.button`
  width: 230px;
  height: 40px;
  margin: 0px 10px;
  font-size: medium;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default RecommandationPage;
