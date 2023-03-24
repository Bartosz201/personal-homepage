import styled, { css } from "styled-components";
import { ReactComponent as Danger } from "../images/danger.svg";
import { darkTheme, lightThem, theme } from "../theme";

export const Wraper = styled.div`
margin-top: 88px;
text-align: center;
@media (max-width: ${theme.breakPoint.mobile}px) {
        margin-top: 50px;
    }
`;

export const StyledDanger = styled(Danger)`
    color: ${lightThem.color.mineShaft};
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.white};
    `}
`;

export const Header = styled.h3`
    margin-top: 23px;
    font-size: 30px;
    color: ${lightThem.color.mineShaft};
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.white};
    `};
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 18px;
        margin-top: 18px;
    }
`;

export const Information = styled.p`
    font-size: 20px;
    line-height: 1.4;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 17px;
    }
`;

export const Link = styled.a`
    display: block;
    background-color: ${lightThem.color.scienceBlue};
    padding: 12px 16px 12px 16px;
    max-width: fit-content;
    margin: 40px auto 40px auto;
    border-radius: 4px;
    color: ${theme.color.white};
    transition: 1s;
    text-decoration: none;
    ${({ themeIsDark }) => themeIsDark && css`
        background-color: ${darkTheme.color.dodgerBlue};
    `};
        &:hover{
        transform: scale(1.1);
        };
`;