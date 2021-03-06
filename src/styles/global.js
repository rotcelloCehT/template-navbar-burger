// global.js
import { createGlobalStyle } from 'styled-components';
import Nunito from '../fonts/Nunito-Black.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Nunito';
  src: url(${Nunito}) format('truetype');
  font-display: auto;
}

html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: 'Nunito';
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  div {
    text-align: center;
  }

  small {
    display: block;
  }

  a {
    color: #343078;
    text-decoration: none;
  }
  `