import { createGlobalStyle } from "styled-components";
import { lightThem } from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        max-width: 1216px;
        margin: auto;
        background-color: ${lightThem.color.whiteLilac} ;
    }
`;

export default GlobalStyle;