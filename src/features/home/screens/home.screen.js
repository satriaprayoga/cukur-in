import React, { useEffect, useState } from 'react'
import { View,Text } from 'react-native'
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { HomeHeader } from '../components/header.component'
import { NearestCapsters } from '../components/nearest-capsters.component'
import { Search } from '../components/search.component'

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
        <NearestCapsters/>
        <View>
          {barbers.map((user) => (
            <Text key={user.name}>
              {user.name}
            </Text>
          ))}
        </View>
    </SafeArea>
  )
}
