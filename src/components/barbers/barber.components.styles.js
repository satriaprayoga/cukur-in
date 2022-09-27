import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Icon = styled.Image`
    width:15px;
    height:15px;
`;

export const BarberCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    width:250px;
    height:300px;
    margin:${(props) => props.theme.space[2]};
   
`;

export const BarberCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
    padding:${(props) => props.theme.space[2]};
`
