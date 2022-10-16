import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TransactionsScreen } from '../../features/transaction/screens/transaction.screen';
import { AccountScreen } from '../../features/account/screens/account.screen';
import { HomeNavigator } from './barber.navigator';
import { OnboardingScreen } from '../../features/onboarding/screens/onboarding.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Home: "md-home",
    Transaction: "md-cash",
    Account: "md-person"
}

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: Platform.OS === 'ios' ? true : false
    }

};


export const AppNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Transaction" component={TransactionsScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
    )
}
