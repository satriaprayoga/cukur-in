import React from 'react'
import { Dimensions, View } from 'react-native'
import { Text } from '../../../../components/typography/text.component'
import { BarberCardContainer, BarberCardCover, Info } from './barber.style'

export const BarberCard = ({barber={}}) => {
  return (
    <View style={{borderRadius:30, width:Dimensions.get('window').width/2}}>
      <BarberCardContainer elevation={3}>
        <BarberCardCover key={barber.name} source={{uri:barber.photos}}/>
        <Info>
        <Text variant="caption" style={{textAlign:'right',color:'#c1c1c1'}}>{barber.distance} km</Text>
        <Text variant="label">{barber.name}</Text>
        </Info>
    </BarberCardContainer>
    </View>
  )
}
