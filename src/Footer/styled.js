import styled, { css } from "styled-components";
import { darkTheme, lightThem } from "../theme";
import { ReactComponent as GithubIcon } from "../images/githubIcon.svg";

export const StyledFooter = styled.footer`
    margin: 120px 0px 110px 0px;
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
`;

export const Content = styled.p`
    margin-top: 24px;
    max-width: 670px;
    font-size: 18px;
    line-height: 1.4    ;
`;

export const SocialMedia = styled.div`
    display: flex;
`;

export const Link = styled.a`
    margin-top: 24px;
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
  
`;