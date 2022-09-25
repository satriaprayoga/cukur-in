import React from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { SafeArea } from '../../../components/utilities/safe-area.component'
import { HomeHeader } from '../components/header.component'
import { Search } from '../components/search.component'

export const HomeScreen = () => {
  return (
    <SafeArea>
        <HomeHeader/>
        <Search/>
    </SafeArea>
  )
}
