import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }

  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.textColor};
  }

  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background: ${props => props.theme.backgroundColor};
  }

  button, input, select {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
  }

`