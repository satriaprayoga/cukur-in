import React from 'react'
import { AccountContainer, LogoContainer } from '../components/account.component'

import { images } from "../../onboarding/components/onboarding.images";
import { Image, Text, TouchableOpacity, View} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeArea } from '../../../components/utilities/safe-area.component';

const {logo}=images;

export const SignInScreen = () => {
  return (
    <AccountContainer>
        <LogoContainer>
            <Image source={logo} resizeMode='cover' />
        </LogoContainer>
        <Text style={{color:'#ffffff', marginTop:24, fontSize:18}}>Log In</Text>
        <TextInput
        placeholder="email/no.hape" 
        textColor={"white"}
        theme={{ colors: { text: "#fff", placeholder:"#fff"} }}
        style={{marginTop:20,width:298, height:50, borderBottomLeftRadius:10, borderTopRightRadius:10, borderBottomRightRadius:10, borderTopLeftRadius:10, backgroundColor:'#68070B', borderColor:'#9C0A10'}}/>
         <TextInput
        placeholder="password" 
        textColor={"white"}
        secureTextEntry
        theme={{ colors: { text: "#fff", placeholder:"#fff"} }}
        style={{marginTop:20,width:298, height:50, borderBottomLeftRadius:10, borderTopRightRadius:10, borderBottomRightRadius:10, borderTopLeftRadius:10, backgroundColor:'#68070B', borderColor:'#9C0A10'}}/>
        <TouchableOpacity style={{justifyContent:'center', alignContent:'center', alignItems:'center',backgroundColor:'#9C0A10', width:298, height:50, marginTop:16, borderBottomLeftRadius:10, borderTopRightRadius:10, borderBottomRightRadius:10, borderTopLeftRadius:10}}>
            <Text style={{color:'#ffffff',fontSize:16}}>Log In</Text>
        </TouchableOpacity>
        <View style={{flex:1, justifyContent:'flex-end', marginBottom:16}}>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#ffffff', fontSize:14}}>New User? </Text>
        <Text style={{color:'#9C0A10', fontSize:14}}>Sign Up</Text>
        </View>
        </View>
    </AccountContainer>
  )
}
