/* --- LIBRARIES --- */
import React from 'react';

/* --- UI COMPONENTS --- */
import { ButtonWrapper } from '../../styled';

export const Button = ({ children, href, size }) => {
    return (
        <ButtonWrapper to={`/${href}`} size={size}>
            {children}
        </ButtonWrapper>
    );
};
