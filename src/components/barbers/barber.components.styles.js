import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Icon = styled.Image`
    width:15px;
    height:15px;
`;

export const BarberCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin:${(props) => props.theme.space[2]};
   
`;

export const BarberCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
    padding:${(props) => props.theme.space[2]};
`
export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
    flex-direction:row;
    align-items:center;
`

export const SectionEnd = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`