import {graphql, Link, useStaticQuery} from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {NavWrapper} from '../styled';

export const NavElement = styled((props) => <Link {...props} />)`
    color: ${(props) => props.theme.colors.link};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : 'none'};
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;

    display: flex;

    &:hover {
        text-decoration: none;
        background-image: linear-gradient(
            to right,
            hsl(180, 100%, 70%),
            hsl(64, 57%, 82%),
            hsl(0, 100%, 90%)
        );

        -webkit-background-clip: text;
        color: transparent;
        color: #0a192f;
    }
    margin: 0 0.75rem;
`;

export const HomeIcon = styled.div`
    margin: 0 1rem;
`;

export const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            cli: file(relativePath: {eq: "topic-svg/house.svg"}) {
                publicURL
            }
        }
    `);
    let cliSVG = data.cli.publicURL;

    return (
        <NavWrapper>
            <NavElement to={'/'}>
                <HomeIcon>
                    <img
                        src={cliSVG}
                        alt="Home icon"
                        width="25px"
                        height="25px"
                        style={{display: 'flex'}}
                    />
                </HomeIcon>
            </NavElement>
            <NavElement to={'/tech'}>Tech</NavElement>
            <NavElement to={'/blog'}>Blog</NavElement>
            <NavElement to={'/resume'}>Resume</NavElement>
            <NavElement to={'/credits'}>Credits</NavElement>
        </NavWrapper>
    );
};
