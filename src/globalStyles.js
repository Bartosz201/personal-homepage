import { createGlobalStyle, css } from "styled-components";
import { darkTheme, lightThem } from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        max-width: 1216px;
        letter-spacing: 0.05em;
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
    }
`;

export default GlobalStyle;