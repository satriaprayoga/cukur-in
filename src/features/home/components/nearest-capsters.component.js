import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';

const NearestHeader=styled.View`
    margin-top: 16px;
    flex-direction:row;
    justify-content:space-between;
`;

const TitleContainer=styled.View`
  padding:${(props)=>props.theme.space[1]};
  align-items:center;
  margin-left: 8px;
`

const CaptionContainer=styled.View`
  padding:${(props)=>props.theme.space[1]};
  align-items:center;
  justify-content:center;
  margin-right: 8px;
`

export const NearestCapsters = ({title='Terdekat',linkTitle='Lihat Semua',onPress}) => {
  return (
    <NearestHeader>
        <TitleContainer>
            <Text variant="title">{title}</Text>
        </TitleContainer>
        <CaptionContainer>
            <TouchableOpacity onPress={onPress}>
              <Text variant="body">{linkTitle}</Text>
            </TouchableOpacity>
        </CaptionContainer>
    </NearestHeader>
  )
}
