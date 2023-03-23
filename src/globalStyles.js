import { createGlobalStyle, css } from "styled-components";
import { darkTheme, lightThem, theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        max-width: 1216px;
        letter-spacing: 0.05em;
        padding-top: 120px;
        margin: auto;
        font-family: 'Inter', sans-serif;
        background-color: ${lightThem.color.whiteLilac} ;
        color: ${lightThem.color.slateGray};
        transition: color 1s;
        transition: background 1s;
            ${({ themeIsDark }) => themeIsDark && css`
            background-color: ${darkTheme.color.mineShaft};
            color: ${darkTheme.color.white};
            `};
        @media (max-width: ${theme.breakPoint.mobile}px) {
            padding: 32px 16px 32px 16px;
        }
    }
`;

export default GlobalStyle;