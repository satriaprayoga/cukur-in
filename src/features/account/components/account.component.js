import { TextInput } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

export const AccountContainer = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    background:#270405;
`;

export const LogoContainer = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const AuthInput = styled(TextInput).attrs({
    placeholderTextColor:'#fff'
})`
    width: 300px;
    height: 50px;
    background-color: #68070B;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-left: ${(props) => props.theme.space[2]};
    margin-top: ${(props) => props.theme.space[3]};
    font-family: ${(props) => props.theme.fonts.monospace}; 
`;