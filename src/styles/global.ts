import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --body-background: #0e0e0e;
  --color-logo: #ff5b50;
  --card-color: #252525;
  --text-color: #fff;
  --subtitle-color: #5a5757;
  --black-text: #000;
  --color-input: #0D0D0D;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    color: var(--text-color);
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15 px
    }

    @media (min-width: 720px) {
      font-size: 87.5%; // 14 px
    }
  }

  body {
    background: var(--body-background);
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, sans-serif;
  }

  body, input, textarea, button {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
