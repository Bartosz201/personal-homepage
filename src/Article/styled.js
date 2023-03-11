import styled from "styled-components";
import { lightThem } from "../theme";

export const Wraper = styled.article`
    background-color: ${lightThem.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    margin-top: 63px;
`;

export const Header = styled.h2`
    color: ${lightThem.color.mineShaft};
    font-weight: 900;
    font-size: 30px;
    padding: 32px 32px 15px 32px;
    border-bottom: 2px solid ${lightThem.color.athensGray};
    margin: 0;
`;

export const List = styled.ul`
    padding: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 12px;
    margin: 0;
`;

export const ListItem = styled.li`
    font-size: 18px;
    list-style: none;
    display: flex;
    align-items: center;
    &::before{
        content: " ";
        background-color: ${lightThem.color.scienceBlue};
        height: 9px;
        width: 9px;
        display: block;
        margin-right: 16px;
        border-radius: 50%;
    }
`;