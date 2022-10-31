import React from 'react'
import { Dimensions, ImageBackground, View } from 'react-native'
import styled from 'styled-components/native';
import { Text } from '../../../../components/typography/text.component'

import logo from '../../../../../assets/logo_white';
import { SvgXml } from 'react-native-svg';

const image = { uri: "https://reactjs.org/logo-og.png" };


const AdvertContainer = styled.View`
  padding:8px;
  width:100%;
  height:${Dimensions.get('window').height/4}px;
  flex-direction:column;
  background-color:'#fff';
 
`
const ImageCover = styled(ImageBackground)`
  flex:1;
  flex-direction:row;
  align-items:flex-start;
  justify-content:flex-start;
  width:100%;
  background-color:'#fff';
 
`
const LogoContainer = styled.View`
  padding:4px;
`

export const AdvertCardComponent = () => {
  return (
    <AdvertContainer>
      <ImageCover source={image} resizeMode="cover" imageStyle={{borderRadius:10}}>
        <LogoContainer>
          <SvgXml xml={logo} width={80} height={60}/>
          <Text variant="title">Bagi-bagi hadiah</Text>
          <Text variant="caption" style={{color:'white'}}>Bagi-bagi hadiah</Text>
        </LogoContainer>
        
      </ImageCover>
    </AdvertContainer>
  )
}
