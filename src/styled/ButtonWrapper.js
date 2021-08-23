import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  /* margin: 0.75rem 0 5rem 0; */
  /* padding: 0rem 0 5rem 0; */
  /* border-radius: 0.5rem; */
  color: #3fa4e1;
  font-weight: 500;
  /* line-height: 1.4rem; */
  /* font-size: 1.2rem; */
  /* width: fit-content; */
  /* transition: filter 0.3s ease; */
  cursor: pointer;
  text-decoration: none;
  line-height: 1.2rem;
  /* color: ${(props) => props.theme.colors.light1}; */
  /* color: #357ae8; */
  /* background-color: ${(props) => props.theme.colors.main1}; */
  /* transition: all 0.2s; */
  /* &:hover,
  &:focus {
    filter: brighterness(100%);
    // background-color: #357ae8;
    box-shadow: 0px 2px 5px rgba(0,1,4,0.5);
    transform: translateY(-5px);
  } */
  /* &:hover { */
  /* text-decoration: underline; */
  /* } */
`;
