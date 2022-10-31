
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const CapsterCardContainer = styled(Card)`
    background-color: #fff;
    margin-left:${(props) => props.theme.space[2]};
    margin-right:${(props) => props.theme.space[2]};
`

export const CapsterCardCover = styled(Card.Cover)`
    background-color:#fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`

export const Info = styled.View`
    padding:${(props) => props.theme.space[1]};
`
export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[3]};
    padding-bottom: 0px;
`;
