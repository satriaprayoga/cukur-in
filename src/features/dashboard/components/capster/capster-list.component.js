import { faker } from '@faker-js/faker'
import React from 'react'
import { Dimensions, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { CapsterCard } from './capster-card.component'

const capsters=[
    {
        name:faker.name.firstName(),
        photos: faker.image.people(),
        barber:faker.name.firstName(),
    },
    {
        name:faker.name.firstName(),
        photos: faker.image.people(1234, 2345, true),
        barber:faker.name.firstName()
    },
    {
        name:faker.name.firstName(),
        photos: faker.image.people(1234, 2345, true),
        barber:faker.name.firstName(),
    },
    {
        name:faker.name.firstName(),
        photos: faker.image.people(1234, 2345, true),
        barber:faker.name.firstName(),
    }
]

const CapsterFlatList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding:8,
        flexGrow:1,
        paddingBottom:Dimensions.get('window').height/20
    }
})``

export const CapsterList = ({data,onPress}) => {
  return (
    <CapsterFlatList
        data={capsters}
        horizontal
        renderItem={({item})=>{
            return (
                <TouchableOpacity onPress={onPress}>
                    <CapsterCard capster={item}/>
                </TouchableOpacity>
            )
        }}>

    </CapsterFlatList>
  )
}
