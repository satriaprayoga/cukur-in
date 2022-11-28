import React from 'react'
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { Text } from '../../../../components/typography/text.component';
import { SafeArea } from '../../../../components/utilities/safe-area.component';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const BarberDetailPopup = ({route}) => {

  const width=Dimensions.get('window').width;
  const height=Dimensions.get('window').height;
  const {barber} = route.params;
  return (
    <ScrollView style={{backgroundColor:'white'}}>
         <View style={{backgroundColor:'white', position:'relative'}}>
            <Image source={{uri:barber.photos}} style={{width:'100%',height:height/3.3}} resizeMode='cover'/>
            
            <View style={{width:40,height:40,backgroundColor:'#ffffff', flex:1, justifyContent:'center', borderRadius:40, alignItems:'center', position:'absolute', bottom:height/14, right:width/20, padding:2}}>
                <MaterialCommunityIcons name="map-marker" size={26} color="#D02027" />
            </View>
        </View>
        <View style={{backgroundColor:'#fff', borderTopLeftRadius:30, borderTopRightRadius:30, marginTop:-22, padding:16}}>
        <Text variant="label" style={{fontSize:22}}>{barber.name}</Text>
        </View>
    </ScrollView>
  )
}
