import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
    text-decoration: none;
    font-size: 0.625rem;
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  body {
    background: url('./images/pattern-7271947.png') no-repeat fixed 50% 50%;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
