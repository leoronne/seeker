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
          style={{ background: '#35373a', alignItems: 'center', bottom: '25px' }}
          buttonStyle={{ borderRadius: 5, color: '#fff', backgroundColor: '#7467D3', fontSize: '13px', padding: 12 }}
          expires={150}
          onAccept={() => {
            Cookies.set('@Seeker:cookies', true);
          }}
          debug
        >
          {t('cookie1')}
          <br />
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
