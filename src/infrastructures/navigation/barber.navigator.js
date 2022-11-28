import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { HomeScreen } from '../../features/home/screens/home.screen';
import { BarberNearestScreen } from '../../features/home/screens/barber/barber-nearest.sceen';
import { Text } from '../../components/typography/text.component';
import { TouchableOpacity, View } from 'react-native';
import { Search } from '../../features/home/components/search.component';
import { BarberDetailPopup } from '../../features/dashboard/components/barber/barber-detail-popup.component';


const HeaderTitle=()=>(
  <View style={{flexDirection:'row'}}>
    <Search/>
  </View>
)

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='home' component={HomeScreen} options={{headerShown:false}}/>
            <HomeStack.Screen name='barberDetails' component={BarberDetailPopup}/>
            <HomeStack.Screen name='NearestBarbers' component={BarberNearestScreen}
                options={{
                    headerTitle:(props)=><HeaderTitle {...props}/>
                }}/>
        </HomeStack.Navigator>
    )
};