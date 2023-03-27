import styled, { css } from "styled-components";
import { darkTheme, lightThem, theme } from "../../../core/App/theme";

export const List = styled.ul`
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    list-style: none;
    margin-top: 24px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`;

export const ListItem = styled.li`
    padding: 56px;
    text-align: left;
    background-color: ${lightThem.color.white};
    box-shadow: 0px 16px 58px 0px #090A3308;
    box-shadow: 0px -2px 50px 0px #090A3305;
    border: 6px solid ${lightThem.color.ironTransparent};
    word-break: break-word;
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        background-color: ${darkTheme.color.tundora};
    `};
    @media (max-width: ${theme.breakPoint.mobile}px) {
        padding: 24px;
    }
`;

export const Header = styled.h3`
    font-size: 24px;
    color: ${lightThem.color.scienceBlue};
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.white};
    `};
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 1.4;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 14px;
    }
`;

export const LinkWraper = styled.div`
    font-size: 18px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 14px;
    }
`;

export const Link = styled.a`
    color: ${lightThem.color.scienceBlue};
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.dodgerBlue};
    `};
`;