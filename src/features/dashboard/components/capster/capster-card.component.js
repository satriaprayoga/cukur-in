import React from 'react'
import { Dimensions, Image, View } from 'react-native'
import { Text } from '../../../../components/typography/text.component'
import { CapsterCardContainer, CapsterCardCover, Info, Rating, Section} from './capster.style'

export const CapsterCard = ({capster={}}) => {
  return (
    <CapsterCardContainer elevation={3} style={{borderRadius:30, width:100,height:150, justifyContent:'center', alignItems:'center'}}>
        <View style={{width:60, height:60, borderRadius:60, justifyContent:'center',alignItems:'center'}}>
          <Image key={capster.name} source={{uri:capster.photos}} style={{width:60, height:60, borderRadius:60,marginTop:60}}/>
          <Text variant="caption" style={{fontSize:12}}>{capster.barber}</Text>
          <Text variant="label" style={{fontSize:14}}>{capster.name}</Text>
        </View>
        
    </CapsterCardContainer>
  );
}
