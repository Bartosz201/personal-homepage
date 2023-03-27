import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../images/spinner.svg";
import { darkTheme, lightThem, theme } from "../../../core/App/theme";

export const LoadingInformation = styled.p`
    font-size: 20px;
    margin-top: 88px;
    @media (max-width: ${theme.breakPoint.mobile}px) {
        margin-top: 60px;
        font-size: 17px;
    }
`;

const spin = keyframes`
    to{
        transform: rotate(1turn)
    }
`;

export const StyledSpinner = styled(Spinner)`
    margin: 48px;
    animation-name: ${spin};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    color: ${lightThem.color.scienceBlue};
    transition: 1s;
    ${({ themeIsDark }) => themeIsDark && css`
        color: ${darkTheme.color.dodgerBlue};
    `};
`;

