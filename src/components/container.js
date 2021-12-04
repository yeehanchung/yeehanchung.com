import React from 'react';

/* --- UI COMPONENTS --- */
import {ContainerWrapper} from '../styled/Container';
import {Footer} from './index';
import {Nav} from './nav';

export const Container = ({children}) => {
    
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    );
};
