import styled, { css } from "styled-components";
import { darkTheme, lightThem } from "../theme";
import { ReactComponent as Brightness } from "../images/brightness.svg"

export const Wraper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 43px;
`;

export const Button = styled.button`
    background-color: ${lightThem.color.mercury};
    border: 1px solid ${lightThem.color.iron};
    width: 48px;
    height: 26px;
    border-radius: 14px;
    padding: 2px;
    transition: 1s;
        ${({themeIsDark}) => themeIsDark && css`
        background-color: ${darkTheme.color.tundora};
        `}
`;

export const SwitchIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${lightThem.color.slateGray};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
        ${({themeIsDark}) => themeIsDark && css`
        background-color: ${darkTheme.color.white};
        transform: translateX(22px);
        `}
`;

export const Image = styled.img`
    width: 14px;
`;

export const StyledBrightness  = styled(Brightness)`
    color: ${lightThem.color.white};
    transition: 1s;
        ${({themeIsDark}) => themeIsDark && css`
        color: black;    
        `}
`;