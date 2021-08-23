import React from 'react';
import { ButtonWrapper } from '../../styled';

export const Button = ({ children, href, size }) => {
  return (
    <ButtonWrapper to={`/${href}`} size={size}>
      {children}
    </ButtonWrapper>
  );
};
