import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    outline: none;
    padding: 0px;
  }

  body {
    background-color: #fff;
    color: #3A3A3A;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
  }

  main {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 25.875rem;
    min-height: 100vh;
    overflow: hidden;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    display: flex;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
