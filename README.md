# 🚪 방탈출고사 - 모두를 위한 온라인 방탈출 테스트

<div align="center">

<img src="public/images/etc/logo.png" width="500">

<a href="https://roomescapetest.swygbro.com/" target="_blank">🎮 플레이 하러 가기</a>

<br/>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSangYoonLee1231%2Froom-escape-test&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

<br/><br/>

## 프로젝트 소개

- 초보부터 고수까지, 방탈출 혹은 미궁게임을 좋아하는 모든 사람들을 위한 방탈출 능력 미니 테스트 앱입니다.

- 방탈출 문제 및 미궁 게임 제작자 SYL의 공식 7번째 작품입니다.

  <a href="https://superb-ranunculus-46a.notion.site/cb0658883e874aa6b9414d8da7c8aefa">👉 제작자의 다른 작품 보러가기</a>

- SWYG에서 진행한 스터디인 SWYDY(스위디)에서 진행했던 개인 프로젝트입니다.

- 개발 기간 : 2023.05.15 ~ 2023.05.30

<br/>

<div align="center">

<img src="public/images/etc/play-screenshot.png" height="330">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="public/images/etc/play-screenshot2.png" height="330">

<br/>

⭐️ **재밌게 플레이해주세요!** ⭐️

</div>

<br/><br/>

## 🛠️ 기술 스택

<div align="center">

#### Environment

<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

#### Config

<img src="https://img.shields.io/badge/NPM-E34F26?style=for-the-badge&logo=npm&logoColor=white">

#### Development

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

#### Etc

<img src="https://img.shields.io/badge/Microsoft PowerPoint-B7472A?style=for-the-badge&logo=Microsoft PowerPoint&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">

</div>

<br/><br/>

## 📦 주요 기능

### ■ 테스트 선택 기능

- '기초 역량 테스트'와 '고수 테스트' 둘 중 하나 선택해서 응시 가능

### ■ 테스트 타이머 기능

- 타이머의 남은 시간이 0이 될 시, 테스트 자동 종료 및 답안지 자동 제출

### ■ 시험 중 문제 이동 기능

- 버튼을 통해 문제 번호를 앞 혹은 뒤로 이동할 수 있도록 구현

- 문제 번호 1번과 20번을 연결하여, 1번에서 20번으로, 20번에서 1번으로도 이동이 가능하도록 설정

### ■ 답안지 작성 및 채점 기능

- 시험 중 답안을 작성할 수 있도록 구현

  (답안지에 Toggle 기능을 달아 열고 닫을 수 있도록 함)

- 시험 종료 시 답안지를 결과 페이지로 전송

### ■ 채점 결과 표시 기능

- 답안지의 답과 실제 정답을 비교하여 채점을 진행한 후, 최종 점수와 틀린 문제 번호 등의 정보를 결과 화면에 표시

### ■ 시험 종료 시, 경고 메세지 직접 표현

- React의 Toggle 컴포넌트를 이용하여 구현

  (`prompt` 창을 사용하지 않은 이유 : `prompt` 창이 뜨는 동안 타이머가 일시 정지 하므로)

### ■ 시험 도중 새로고침, 뒤로가기 방지 기능

- `beforeunload` `unload` 이벤트를 처리하여 구현

<br/>

## 라이센스

MIT © SangYoonLee

<br/>
