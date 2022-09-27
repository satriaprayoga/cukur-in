import React from 'react'
import { Text } from '../typography/text.component'
import { BarberCard, BarberCardCover, Info } from './barber.components.styles'



export const BarberNearestCard = ({barber}) => {
  return (
    <BarberCard elevation={1}>
      <BarberCardCover source={{uri: barber.photos}} key={barber.name}/>
      <Info>
        <Text variant="label">{barber.name}</Text>
      </Info>
    </BarberCard>
  )
}
