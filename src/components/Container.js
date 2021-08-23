import React from 'react';
import { ContainerWrapper } from '../styled/Container';
import { Footer } from './index';
import { Nav } from './Nav';

export const Container = ({ children }) => {
  // console.log('child', children);
  return (
    <ContainerWrapper>
      {/* Nav */}
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  );
};
