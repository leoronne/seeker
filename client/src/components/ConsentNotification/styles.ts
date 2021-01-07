import styled from 'styled-components';

export const Container = styled.div`
  .CookieConsent {
    border-radius: var(--border-radius);
    bottom: 25px !important;
    width: 80% !important;
    left: 10% !important;
    box-shadow: var(--card-box-shadow);

    background-color: white !important;
    color: var(--consent-text-color) !important;

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

    #rcc-confirm-button {
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
      transition: var(--transition) !important;
      &:hover {
        transition: var(--transition) !important;
        background: var(--color-primary) !important;
        color: white !important;
      }
    }
  }

  @media (max-width: 468px) {
    .CookieConsent {
      > div {
        flex: auto !important;
      }
    }
  }
`;
