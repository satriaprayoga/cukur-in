import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { Text } from '../../../components/typography/text.component'

const HeaderContainer=styled.View`
    flex-direction:row;
    justify-content:space-between;

`

const TitleContainer=styled.View`
  padding:${(props)=>props.theme.space[1]};
  align-items:center;
`

const NotifyContainer=styled.View`
  padding:${(props)=>props.theme.space[1]};
  align-items:center;
  width: 50px;
`


export const HomeHeader = () => {
  return (
    <HeaderContainer>
         <TitleContainer>
            <Text variant="title">CUKUR-IN</Text>
         </TitleContainer>
         <NotifyContainer>
            <Ionicons name="notifications" size={20} color="black" />
         </NotifyContainer>
    </HeaderContainer>
    
  )
}
