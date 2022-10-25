import React from 'react'
import { Image, View } from 'react-native'
import {faker} from '@faker-js/faker'
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { HaloContainer, HeaderContainer, LogoContainer } from '../components/dashboard.component'
import { SvgXml } from 'react-native-svg';

import logo from '../../../../assets/logo_dashboard';
import { Searchbar } from 'react-native-paper';
const fakeUser = faker.image.people(50, 50, true);

export const DashboardScreen = () => {
  return (
   <SafeArea>
        <HeaderContainer>
            <LogoContainer>
                <SvgXml xml={logo} width={80} height={60}/>
            </LogoContainer>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <HaloContainer>
                    <Text style={{color:'#000000', fontSize:12}}>Hallo!</Text>
                    <Text style={{color:'#000000', fontSize:16, fontWeight:'700'}}>Asep Kurnia</Text>
                </HaloContainer>
                <Image source={{uri:fakeUser}} resizeMode="cover"  style={{width: 40, height: 40, borderRadius:20, marginRight:16, marginLeft:4}}/>
            </View>
        </HeaderContainer>
        <View style={{padding:8}}>
            <Searchbar 
                style={{maxHeight:45, borderRadius:10}}  
                placeholder="Cari Barbershop atau Kapster"
                />
        </View>
   </SafeArea>
  )
}
