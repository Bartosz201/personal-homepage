import { createGlobalStyle } from "styled-components";
import { lightThem } from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        max-width: 1216px;
        margin: auto;
        font-family: 'Inter', sans-serif;
        background-color: ${lightThem.color.whiteLilac} ;
        color: ${lightThem.color.slateGray};
    }
`;

export default GlobalStyle;