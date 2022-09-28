import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { Badge } from 'react-native-paper'; 

import { Text } from '../../../components/typography/text.component'

const HeaderContainer=styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top: ${(props)=>props.theme.space[3]};
`

const TitleContainer=styled.View`
  padding:${(props)=>props.theme.space[1]};
  align-items:center;
  margin-left: 8px;
`

const NotifyContainer=styled.View`
  padding:${(props)=>props.theme.space[2]};
  margin-right: 8px;
  width:30px;
  height:30px;
  align-items:center;
  border-radius:15px;
  background-color: #000111;
`


export const HomeHeader = () => {
  return (
    <HeaderContainer>
         <TitleContainer>
            <Text variant="title">cukur-in</Text>
         </TitleContainer>
         <NotifyContainer>
            {/* <Badge size={6}>
              
            </Badge> */}
            <Feather name="bell" size={16} color="white"/>
         </NotifyContainer>
    </HeaderContainer>
    
  )
}
