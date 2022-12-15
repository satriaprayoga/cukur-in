import React from 'react'
import { Dimensions, Image, ScrollView, View } from 'react-native';
import { Text } from '../../../../components/typography/text.component';
import { SafeArea } from '../../../../components/utilities/safe-area.component';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import star from '../../../../../assets/star';
import { SvgXml } from 'react-native-svg';
import { BarberPackagesComponents } from './barber-packages-list.components';

export const BarberDetailPopup = ({ route }) => {

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const { barber } = route.params;
  const rating = Array(Math.round(barber.rating)).fill().map((x, i) => i);

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'white', position: 'relative' }}>
        <Image source={{ uri: barber.photos }} style={{ width: '100%', height: height / 3.3 }} resizeMode='cover' />

        <View style={{ width: 40, height: 40, backgroundColor: '#ffffff', flex: 1, justifyContent: 'center', borderRadius: 40, alignItems: 'center', position: 'absolute', bottom: height / 14, right: width / 20, padding: 2 }}>
          <MaterialCommunityIcons name="map-marker" size={26} color="#D02027" />
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -22, padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text variant="label" style={{ fontSize: 22 }}>{barber.name}</Text>
          <Feather name="heart" size={24} color="black" style={{ marginTop: 4 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          {rating.map((r) =>
            <SvgXml xml={star} width={20}
              height={20} key={r} />
          )}
          <Text variant="caption" style={{ marginLeft: 4 }}>{barber.rating}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
          <Text variant="label" style={{ fontSize: 16 }}>Kapster</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
          <Text variant="label" style={{ fontSize: 16 }}>Paket</Text>
        </View>
        <View style={{borderBottomWidth:1, borderBottomColor:'#D3D3D3'}}></View>
        <BarberPackagesComponents/>
      </View>
    </ScrollView>
  )
}
