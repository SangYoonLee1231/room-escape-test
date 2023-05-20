import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'SEBANG_Gothic_Bold', 'Do Hyeon', sans-serif;
    text-decoration: none;
    font-size: 0.625rem;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  body {
    background: url('./images/backgrounds/pattern-7271947.png') no-repeat fixed 50% 50%;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
