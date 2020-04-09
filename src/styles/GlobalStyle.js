import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
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
    margin: auto;
    max-width: 25.875rem;
    overflow: hidden;
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
