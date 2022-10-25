import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top: ${(props)=>props.theme.space[3]};
    align-items: center;
`;

export const LogoContainer = styled.View`
    align-items:center;
    margin-left: ${(props)=>props.theme.space[3]};
`;

export const HaloContainer = styled.View`
    margin-right: ${(props)=>props.theme.space[1]};
    align-items: flex-end;
    line-height: 80%;
`;


