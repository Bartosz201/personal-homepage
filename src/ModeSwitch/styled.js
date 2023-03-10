import styled from "styled-components";
import { lightThem } from "../theme";


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
`;

export const SwitchIcon = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${lightThem.color.slateGray};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 14px;
`;