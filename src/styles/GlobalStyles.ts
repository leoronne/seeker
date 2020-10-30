import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #7467D3;
    --color-primary-lighter: #b6b0e4;
    --font-family: 'Roboto', sans-serif;
    --transition: 0.6s ease-in-out !important;
    --body-background: var(--color-primary);
    --body-background-secondary: #5546a4;

    --text-color: #ffe5e5;

    --scrol-thumb: #333;
    --scrol-bg: #89777a;

    --placeholder-color: #a7a8a9;

    --disabled: #9e9e9e;

    --menu-hover: #787777;
    --menu-background: #35373a;
    --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
    transition: all var(--transition);
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-family: var(--font-family);
    background: var(--body-background);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrol-bg);
    border-radius: 4px;
    transition: var(--transition);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrol-thumb);
    transition: var(--transition);
  }

  a {
    transition: filter var(--transition);
    outline: none;
  }

  a:hover{
    transition: filter var(--transition);
    filter: brightness(1.01);
    outline: none;
  }

  .CookieConsent{
    border-radius: 5px;
    bottom: 25px !important;
    width: 80% !important;
    left: 10% !important;
  }

  .cookie-subtitle {
    font-size: 10px;
    line-height: 14px;
  }
`;
