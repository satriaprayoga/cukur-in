import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const TitleContainer = styled.View`
    margin-top:4px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
`;

export const TitleText= styled(Text)`
    font-size:18px;
    font-weight: 700;
    letter-spacing: -0.3px;
    margin-left: 8px;
    
`
export const SubtitleText= styled(Text)`
    font-size:12px;
    font-weight: 200;
    letter-spacing: -0.3px;
    margin-right: 8px;
`