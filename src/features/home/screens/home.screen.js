import React, { useEffect, useState } from 'react'
import { View,Text, FlatList, ScrollView } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
import { BarberNearestCard } from '../../../components/barbers/barber-nearest-card.component'
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { HomeHeader } from '../components/header.component'
import { NearestCapsters } from '../components/nearest-capsters.component'
import { Search } from '../components/search.component'

const NearestBarberList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const HomeScreen = () => {

  const [barbers,setBarbers]=useState([]);

  let fetchBarber = async () =>{
    try {
      let res= await fetch("/api/barbers");
      let data=await res.json();
      setBarbers(data.barbers);
      console.log(data)
    } catch (error) {
      console.log(error.message);
    }
  }
  
  useEffect(()=>{
    fetchBarber();
    console.log("effect");
  },[]);
  
  return (
    <SafeArea>
        <HomeHeader/>
        <Search/>
        <ScrollView>
        <NearestCapsters/>
        <NearestBarberList
          horizontal={true}
          data={barbers}
          renderItem={({item})=>{
            return(
             <BarberNearestCard barber={item}/>
            )
          }}
          keyExtractor={item=>item.name}/>
        <NearestCapsters title="Kapster Rekomendasi"/>
        
        </ScrollView>
    </SafeArea>
  )
}
