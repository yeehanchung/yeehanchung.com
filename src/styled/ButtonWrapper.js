/* --- LIBRARIES --- */
import {Link} from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export const ButtonWrapper = styled((props) => <Link {...props} />)`
    font-size: ${(props) => {
        switch (props.size) {
            case 'medium':
                return '1.5rem';
            case 'small':
                return '0.9rem';
            case 'xSmall':
                return '0.8rem';
            default:
                return '1.125rem';
        }
    }};
    color: #3fa4e1;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    line-height: 1.2rem;
`;
