import styled, { css } from "styled-components";
import { darkTheme, lightThem, theme } from "../theme";
import { ReactComponent as GithubIcon } from "../images/githubIcon.svg";

export const StyledFooter = styled.footer`
    margin: 120px 0px 110px 0px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        margin: 48px 0px 0px 0px;
    }
`;

export const MailLink = styled.a`
    color: ${lightThem.color.mineShaft};
    font-size: 32px;
    text-decoration: none;
    display: block;
    font-weight: 900;
    margin-top: 24px;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.white};
    `};
    &:hover{
        color: ${lightThem.color.scienceBlue};
        ${({ themeIsDark }) => themeIsDark && css`  
            color: ${darkTheme.color.dodgerBlue};
        `};
    };
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 18px;
        margin-top: 12px;
    }
`;

export const Content = styled.p`
    margin-top: 24px;
    max-width: 670px;
    font-size: 18px;
    line-height: 1.4;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        font-size: 14px;
        margin-top: 12px;
    };
`;

export const SocialMedia = styled.div`
    display: flex;
    margin-top: 56px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        margin-top: 40px;
    };
    
`;

export const Link = styled.a`
    color: ${lightThem.color.mineShaft};
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.white};
    `};
    &:hover{
        color: ${lightThem.color.scienceBlue};
        ${({ themeIsDark }) => themeIsDark && css`
            color: ${darkTheme.color.dodgerBlue};
        `};
    };
`;

export const StyledGithubIcon = styled(GithubIcon)`
  @media (max-width: ${theme.breakPoint.mobile}px) {
        width: 32px;
    };
`;