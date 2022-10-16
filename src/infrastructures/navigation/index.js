import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { OnboardingScreen } from '../../features/onboarding/screens/onboarding.screen'
import { OnboardContext } from '../../services/onboarding/onboarding.context'
import { AppNavigator } from './app.navigator'
import { OnboardNavigator } from './onboard.navigator'

const Stack = createStackNavigator();

export const Navigation = ({ onboard }) => {
  return (
    <Stack.Navigator initialRouteName={onboard==true ? 'Onboard' : 'Main'}>
      <Stack.Screen name='Onboard' component={OnboardNavigator} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  )
}
