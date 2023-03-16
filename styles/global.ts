import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
      --background: #f8f2f5;

      --red: #E52E40;
      --blue: #5429CC;
      --green: #33CC95;

      --blue-light: #6933FF;

      --text-title: #363F5F;
      --text-body: #969CB3;

      --shape: #26262B;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
    font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button { //os elementos listados tem fontes padrões e não importam automaticamente a font.
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`