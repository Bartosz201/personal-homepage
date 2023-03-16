import styled, { css } from "styled-components";
import { ReactComponent as GithubIcon } from "../images/githubIcon.svg";
import { darkTheme, lightThem } from "../theme";

export const Wraper = styled.section`
    margin-top: 72px;
    text-align: center;
`;

export const StyledIcon = styled(GithubIcon)`
    width: 40px;
    color: ${lightThem.color.scienceBlue};
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.dodgerBlue};
    `};
`;

export const Header = styled.h2`
    margin: 13px 0px 8px 0px;
    color: ${lightThem.color.mineShaft};
    font-size: 30px;
    font-weight: 900;
    transition: color 1s;
        ${({ themeIsDark }) => themeIsDark && css`
            color: ${darkTheme.color.white};
        `};
`;

export const SubHeader = styled.span`
    font-size: 20px;
`;

