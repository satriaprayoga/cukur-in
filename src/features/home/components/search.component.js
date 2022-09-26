import React from 'react'
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'

const SearchContainer = styled(View)`
    padding : ${(props)=>props.theme.space[2]};
`;

const AppSearchBar = styled(Searchbar)`
    max-height:45px;
    border-radius:16px;
`;


export const Search = () => {
  return (
    <SearchContainer>
        <AppSearchBar/>
    </SearchContainer>
  )
}
