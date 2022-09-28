import React, { useContext} from 'react'
import { FlatList, ScrollView } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import styled from 'styled-components/native'
import { BarberNearestCard } from '../../../components/barbers/barber-nearest-card.component'
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { BarbersContext } from '../../../services/barbers/barbers.context'
import { HomeHeader } from '../components/header.component'
import { NearestCapsters } from '../components/nearest-capsters.component'
import { Search } from '../components/search.component'

const NearestBarberList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  flex:1
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const HomeScreen = ({navigation}) => {

  const {isLoading, barbers}=useContext(BarbersContext);

  
  return (
    <SafeArea>
        {isLoading && (
          <LoadingContainer>
             <Loading size={50} animating={true} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <HomeHeader/>
        <Search/>
        <ScrollView>
        <NearestCapsters onPress={()=>navigation.navigate('NearestBarbers')}/>
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
