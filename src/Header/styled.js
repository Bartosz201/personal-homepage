import styled from "styled-components";
import { lightThem } from "../theme";


export const StyledHeader = styled.header`
    margin-top: 119px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const Image = styled.img`
    max-width: 384px;
    border-radius: 100%;
`;

export const Wraper = styled.div`
`;

export const StyledH1 = styled.h1`
    font-size: 38px;
    font-weight: 900;
    font-style: normal;
    letter-spacing: 0.05em;
    color: ${lightThem.color.mineShaft};
    margin-top: 12px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 28px;
    margin-top: 35px;
`;