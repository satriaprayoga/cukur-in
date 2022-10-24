import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { SignInScreen } from '../../features/account/screens/signin.screen'
import { SignUpScreen } from '../../features/account/screens/signup.screen'
import { OnboardingScreen } from '../../features/onboarding/screens/onboarding.screen'
import { OnboardContext } from '../../services/onboarding/onboarding.context'
import { AppNavigator } from './app.navigator'
import { OnboardNavigator } from './onboard.navigator'

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Onboard' component={OnboardNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Sign In' component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Sign Up' component={SignUpScreen} options={{
        headerTitle:"Create Your Account",
        headerStyle: {
          backgroundColor: '#270405'
        },
        headerTintColor: '#9C0A10',
        headerTitleStyle: {
          color:'#fff',
          fontFamily:'Poppins_400Regular',
          fontSize:18
        },
        headerShadowVisible: false, // applied here
        headerBackTitleVisible: false,
      }} />
    </Stack.Navigator>
  )
}
