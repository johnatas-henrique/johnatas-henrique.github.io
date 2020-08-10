import { createGlobalStyle } from 'styled-components';
import logo from '../images/desktop.jpg';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryTwo};
    color: ${({ theme }) => theme.primaryOne};
    display: flex;
    font-family: 'Rajdhani', sans-serif;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    text-rendering: optimizeLegibility;
    /* position: relative; */
    @media (max-width: ${({ theme }) => theme.mobile}) {
      align-items: flex-start;
    }
  }
    body::before {
      background-image: url(${logo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      bottom: 0;
      content: "";
      left: 0;
      right: 0;
      opacity: 0.7;
      position: absolute;
      top: 0;
      z-index: -1;
  }
  `;

export default GlobalStyles;
