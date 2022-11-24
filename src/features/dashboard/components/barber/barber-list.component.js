import React from 'react'
import { Dimensions, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { BarberCard } from './barber-card.component'

const BarberFlatList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:8,
        flexGrow:1,
        paddingBottom:Dimensions.get('window').height/20
    }
})``

export const BarberList = ({data,onPress}) => {
  return (
    <BarberFlatList
        data={data}
        horizontal
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={onPress}>
                    <BarberCard barber={item}/>
                </TouchableOpacity>
            )
        }}>

    </BarberFlatList>
  )
}
