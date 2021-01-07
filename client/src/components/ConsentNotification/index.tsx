import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const ConsentNotification: React.FC = () => {
  const { t } = useTranslation();

  if (Cookies.get('@square-landing-page:cookies') === 'true') return null;

  return (
    <Container>
      <CookieConsent
        location="bottom"
        buttonText={t('accept')}
        cookieName="enableCookies"
        expires={150}
        onAccept={() => {
          Cookies.set('@square-landing-page:cookies', true);
        }}
        debug
      >
        <h2>{t('cookie1')}</h2>
        <span className="cookie-subtitle">{t('cookie2')}</span>
      </CookieConsent>
    </Container>
  );
};

export default ConsentNotification;
