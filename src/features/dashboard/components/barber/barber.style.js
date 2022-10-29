import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const BarberCardContainer = styled(Card)`
    background-color: #fff;
    margin-left:${(props) => props.theme.space[2]};
    margin-right:${(props) => props.theme.space[2]};
    border-radius:10px;
`

export const BarberCardCover = styled(Card.Cover)`
    background-color:#fff;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`

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