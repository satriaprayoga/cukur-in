import React from 'react'
import { Text } from '../../../components/typography/text.component'
import { SubtitleText, TitleContainer, TitleText } from './title.styles'

const DashboardTitle = ({title,subtitle}) => {
  return (
   <TitleContainer>
        <TitleText>{title}</TitleText>
        <SubtitleText>{subtitle}</SubtitleText>
   </TitleContainer>
  );
}

export default DashboardTitle