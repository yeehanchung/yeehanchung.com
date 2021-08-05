import React from 'react';
import { ContainerWrapper } from '../styled/Container';
import { Footer } from './index';

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      {children}
      <Footer />
    </ContainerWrapper>
  );
};
