import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Text } from '../typography/text.component'
import { BarberCard, BarberCardCover, Info, Rating, Section } from './barber.components.styles'

import star from "../../../assets/star"
export const BarberNearestCard = ({barber}) => {
  return (
    <BarberCard elevation={1}>
      <BarberCardCover source={{uri: barber.photos}} key={barber.name}/>
      <Info>
        <Text variant="label">{barber.name}</Text>
        <Section>
        <Rating>
          <SvgXml xml={star} width={20} height={20}/>
          <Text variant="label">{barber.rating}</Text>
        </Rating>
      </Section>
      </Info>
      
    </BarberCard>
  )
}
