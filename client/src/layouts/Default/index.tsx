import React from 'react';

import { Header, ConsentNotification } from '../../components';

import { Container } from './styles';

const Default: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <ConsentNotification />
      {children}
    </Container>
  );
};

export default Default;
