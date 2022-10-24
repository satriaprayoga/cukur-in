import React from 'react'
import { AccountContainer, AuthInput, LogoContainer } from '../components/account.component'

import { images } from "../../onboarding/components/onboarding.images";
import { Image, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { Text } from '../../../components/typography/text.component';

const { logo } = images;

export const SignInScreen = ({navigation}) => {
  return (
    <AccountContainer>
      <LogoContainer>
        <Image source={logo} resizeMode='cover' />
      </LogoContainer>
      <Text variant="title">Sign In</Text>
      <AuthInput placeholder="email/no.hape"  />
      <AuthInput placeholder="password" secureTextEntry  />
      <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#9C0A10', width: 298, height: 50, marginTop: 16, borderBottomLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
        <Text style={{ color: '#ffffff', fontSize: 16 }}>Sign In</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#ffffff', fontSize: 14 }}>New User? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Sign Up')}>
            <Text style={{ color: '#9C0A10', fontSize: 14 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AccountContainer>
  )
}
