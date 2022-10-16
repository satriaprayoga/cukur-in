import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { OnboardingScreen } from '../../features/onboarding/screens/onboarding.screen';



const HeaderTitle=()=>(
  <View style={{flexDirection:'row'}}>
    <Search/>
  </View>
)

export const OnboardStack = createStackNavigator();

export const OnboardNavigator = () => {
    return (
        <OnboardStack.Navigator>
            <OnboardStack.Screen name='Onboard' component={OnboardingScreen} options={{headerShown:false}}/>
        </OnboardStack.Navigator>
    )
};