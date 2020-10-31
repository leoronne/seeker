import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-primary: #7467D3;
    --color-primary-lighter: #B2ADDB;
    --color-primary-dark: #584FA1;
    --font-family: 'Roboto', sans-serif;
    --transition: 0.3s ease-in-out !important;
    --transition-slow: 0.6s ease-in-out !important;
    --body-background: var(--color-primary);
    --body-background-secondary: #5546a4;

    --text-color: #ffe5e5;

    --scrol-thumb: #333;
    --scrol-bg: #89777a;

    --placeholder-color: #a7a8a9;

    --disabled: #9e9e9e;
    --text-color: #707070;


    --menu-hover: #787777;
    --menu-background: #35373a;
    --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);

    --card-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

    --border-radius: 8px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
    /* transition: all var(--transition); */
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
    border-radius: var(--border-radius);
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
    border-radius: var(--border-radius);
    bottom: 25px !important;
    width: 80% !important;
    left: 10% !important;
    box-shadow: var(--card-box-shadow);

    background-color: #fff !important;
    color: var(--text-color) !important;

    align-items: center !important;

    h2 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 !important;
      padding: 0 !important;
    }

    .cookie-subtitle {
      font-size: 12px !important;
      line-height: 14px !important;
    }

    #rcc-confirm-button{
      background-color: transparent !important;
      border: 1px solid var(--color-primary) !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      background: transparent !important;
      outline: 0 !important;
      border-radius: var(--border-radius) !important;
      font-family: var(--font-family) !important;
      font-size: 14px !important;
      color: var(--color-primary) !important;
      height: 40px !important;
      cursor: pointer !important;
      font-weight: 500 !important;
      transition: var(--transition-slow) !important;
      &:hover {
        transition: var(--transition-slow) !important;
        background: var(--color-primary) !important;
        color: var(--whiteBackground) !important;
      }
    }
  }
`;
