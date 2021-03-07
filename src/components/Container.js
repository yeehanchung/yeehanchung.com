import React from 'react';
import {ContainerWrapper} from '../elements';
import {Nav, Footer} from './index';

export const Container = ({children}) => {
  return (
    <ContainerWrapper>
      {/* <Nav /> */}
      {children}
      <Footer />
    </ContainerWrapper>
  );
};
