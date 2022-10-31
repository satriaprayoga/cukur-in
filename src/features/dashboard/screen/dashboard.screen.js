import React, { useContext } from 'react'
import { Image, ScrollView, View } from 'react-native'
import {faker} from '@faker-js/faker'
import { Text } from '../../../components/typography/text.component';
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { HaloContainer, HeaderContainer, LogoContainer } from '../components/dashboard.component'
import { SvgXml } from 'react-native-svg';

import logo from '../../../../assets/logo_dashboard';
import { Searchbar } from 'react-native-paper';
import { AdvertCardComponent } from '../components/advert/advert-card.component';
import DashboardTitle from '../components/title.components';
import { BarbersContext } from '../../../services/barbers/barbers.context';
import { BarberList } from '../components/barber/barber-list.component';
import { CapsterContext, CapstersContext } from '../../../services/capsters/capsters.context';
import { CapsterList } from '../components/capster/capster-list.component';
const fakeUser = faker.image.people(50, 50, true);

export const DashboardScreen = () => {

  const {barbers}=useContext(BarbersContext);
    const {capsters}=useContext(CapsterContext);
  return (
   <SafeArea>
        
        <ScrollView>
        <HeaderContainer>
            <LogoContainer>
                <SvgXml xml={logo} width={80} height={60}/>
            </LogoContainer>
            <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                <HaloContainer>
                    <Text style={{color:'#000000', fontSize:12}}>Halo!</Text>
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
        <AdvertCardComponent/>
        <View style={{flex:1}}>
        <DashboardTitle title="Barber Terdekat" subtitle="Lihat Semua"/>
        <BarberList data={barbers} onPress={()=>{}}/>
        <DashboardTitle title="Kapster Rekomendasi" subtitle="Lihat Semua"/>
        <CapsterList data={capsters}/>
        <DashboardTitle title="Barber Rekomendasi" subtitle="Lihat Semua"/>
        <BarberList data={barbers} onPress={()=>{}}/>
        </View>
       
        </ScrollView>
   </SafeArea>
  )
}
