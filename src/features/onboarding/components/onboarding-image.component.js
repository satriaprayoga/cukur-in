import React from 'react'
import { Dimensions, Image } from 'react-native'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component';



const OnboardItemContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
`;

const OnboardImageContainer = styled.View`
  align-items:center;
  justify-content:center;
  margin-top:56px;
`;

const OnboardImage = styled(Image)`
  width: 100%;
`
const OnboardTextContainer = styled.View`
  align-items:center;
  justify-content:center;
  margin-top:16px;
`

const OnboardTitle = styled(Text)`
  color: #fff;
  text-align:center;
  font-size:24px;
  margin-top:8px;
`

const OnboardSubTitle = styled(Text)`
  color: #fff;
  text-align:center;
  font-size:14px;
`

export const OnBoardingImage = ({image,title,subtitle}) => {
  return (
    <OnboardItemContainer>
      <OnboardImageContainer>
        <OnboardImage source={image} resizeMode="contain"/>
      </OnboardImageContainer>
      <OnboardTextContainer>
         <Text variant="onboardTitle">{title}</Text>
      </OnboardTextContainer>
      <OnboardTextContainer>
        <Text variant="onboardSubTitle">{subtitle}</Text>
      </OnboardTextContainer>
    </OnboardItemContainer>
  )
}
