import styled, { css } from "styled-components";
import { darkTheme, lightThem, theme } from "../theme";

export const Wraper = styled.article`
    background-color: ${lightThem.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    margin-top: 63px;
    transition: background 1s;
        ${({ themeIsDark }) => themeIsDark && css`
            background-color: ${darkTheme.color.tundora};
        `};
    @media (max-width: ${theme.breakPoint.mobile}px) {
        margin-top: 50px;
    };
`;

export const Header = styled.h2`
    color: ${lightThem.color.mineShaft};
    font-weight: 900;
    font-size: 30px;
    padding: 32px 32px 15px 32px;
    border-bottom: 2px solid ${lightThem.color.athensGray};
    margin: 0;
    transition: 1s;
        ${({ themeIsDark }) => themeIsDark && css`
            color: ${darkTheme.color.white};
            border-bottom: 2px solid ${darkTheme.color.codGray};
        `}
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 18px;
        padding: 16px;
    };
`;

export const List = styled.ul`
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
    margin: 0;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        grid-template-columns: 1fr;
        padding: 16px;
    };
`;

export const ListItem = styled.li`
    font-size: 18px;
    list-style: none;
    display: flex;
    align-items: center;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 14px;
    };
    &::before{
        content: " ";
        background-color: ${lightThem.color.scienceBlue};
        height: 9px;
        width: 9px;
        display: block;
        margin-right: 16px;
        border-radius: 50%;
        ${({ themeIsDark }) => themeIsDark && css`
            background-color: ${darkTheme.color.dodgerBlue};
        `};
        @media (max-width: ${theme.breakPoint.mobile}px) {
            width: 6px;
            height: 6px;
            margin-right: 8px;
        };
    };
    
`;