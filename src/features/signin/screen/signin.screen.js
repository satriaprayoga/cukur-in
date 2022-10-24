import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import styled from 'styled-components/native';
import { SafeArea } from '../../../components/utilities/safe-area.component';

import { images } from '../../onboarding/components/onboarding.images';

const { logo } = images;

const SignContainer = styled(SafeAreaView)`
    flex:1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    justify-content:center;
    align-items:center;
    background:#270405;
`;



export const SigninScreen = () => {
    return (
        <SignContainer>
            <View style={{justifyContent: 'center', alignItems: 'center' }}>
                <Image source={logo} resizeMode='cover' />
                <Text style={{color:'#ffffff', margin:24, fontSize:18}}>Log In</Text>
            </View>
        </SignContainer>
            
    
    )
}
