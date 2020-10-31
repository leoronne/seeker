import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import { Header } from '../../components';

import { Container, Main } from './styles';

const Default: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const getConsentNotification = () => {
    if (Cookies.get('@Seeker:cookies') !== 'true')
      return (
        <CookieConsent
          location="bottom"
          buttonText={t('accept')}
          cookieName="enableCookies"
          expires={150}
          onAccept={() => {
            Cookies.set('@Seeker:cookies', true);
          }}
          debug
        >
          <h2>{t('cookie1')}</h2>
          <span className="cookie-subtitle">{t('cookie2')}</span>
        </CookieConsent>
      );
    return null;
  };
  return (
    <Container>
      <Header />
      {getConsentNotification()}
      <Main>{children}</Main>
    </Container>
  );
};

export default Default;
