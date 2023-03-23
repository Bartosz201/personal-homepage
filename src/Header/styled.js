import styled, { css } from "styled-components";
import { darkTheme, lightThem, theme } from "../theme";

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    border-radius: 100%;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        max-width: 132px;
    }
`;

export const Wraper = styled.div`
`;

export const StyledH1 = styled.h1`
    font-size: 38px;
    font-weight: 900;
    font-style: normal;
    color: ${lightThem.color.mineShaft};
    margin-top: 12px;
    transition: color 1s;
    ${({ themeIsDark }) => themeIsDark && css`
    color: ${darkTheme.color.white};
    `}
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin-top: 35px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 17px;
        margin-top: 16px;
    }
`;