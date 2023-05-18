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
    background-image: url('./images/geometric-1906240_1920.jpg');
    background-size: 100%;
  }
`;

export default GlobalStyle;
