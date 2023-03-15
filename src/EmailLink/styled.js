import styled, { css } from "styled-components";
import { darkTheme, lightThem, theme } from "../theme";

export const Link = styled.a`
    display: block;
    display: flex;
    align-items: center;
    background-color: ${lightThem.color.scienceBlue};
    margin-top: 32px;
    padding: 12px 16px 12px 16px;
    width: fit-content;
    text-decoration: none;
    border-radius: 4px;
    transition: 1s;
        ${({themeIsDark})=> themeIsDark && css`
        background-color: ${darkTheme.color.dodgerBlue};
        `}
        &:hover{
        transform: scale(1.1);
        };
`;

export const LinkText = styled.div`
    color: ${theme.color.white};
    font-size: 20px;
    font-weight: 600;
    margin-left: 13px;
`;

export const Image = styled.img`
    width: 24px;
`;