import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../images/spinner.svg";
import { darkTheme, lightThem } from "../theme";

export const LoadingInformation = styled.p`
    font-size: 20px;
    margin-top: 88px;
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

