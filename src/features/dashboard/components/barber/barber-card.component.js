import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text } from '../../../../components/typography/text.component'
import { BarberCardContainer, BarberCardCover, Info, Rating, Section, SectionEnd } from './barber.style'

import star from '../../../../../assets/star';
import { SvgXml } from 'react-native-svg';

export const BarberCard = ({barber={}}) => {
  return (
    <View style={{borderRadius:30, width:Dimensions.get('window').width/2,flex:1}}>
      <BarberCardContainer elevation={3}>
        <BarberCardCover key={barber.name} source={{uri:barber.photos}}/>
        <Info>
          <Text variant="caption" style={{textAlign:'right',color:'#c1c1c1'}}>{barber.distance} km</Text>
          <Text variant="label" style={{fontSize:14}}>{barber.name}</Text>
          <Section>
            <Rating>
              <SvgXml xml={star} width={20}
                height={20}/>
              <Text variant="label" style={{fontSize:12}}>{barber.rating}</Text>
            </Rating>
          </Section>
        </Info>
    </BarberCardContainer>
    </View>
  )
}
