import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from '../../../components/typography/text.component'
import { AccountContainer, AuthInput } from '../components/account.component'

export const SignUpScreen = ({navigation}) => {
    return (
        <AccountContainer>
            <View style={{flex:1, justifyContent:'flex-start', marginTop:50, alignItems:'center'}}>
            <Text style={{ fontSize: 18, color: '#fff', fontWeight:'500', marginTop:20 }}>Sign Up</Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>We'll have your account in no time</Text>
            <AuthInput placeholder="Nama Lengkap" />
            <AuthInput placeholder="Email" />
            <AuthInput placeholder="No.hape" />
            <AuthInput placeholder="password" secureTextEntry />
            <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')} style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '#9C0A10', width: 298, height: 50, marginTop: 16, borderBottomLeftRadius: 10, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10 }}>
                <Text style={{ color: '#ffffff', fontSize: 14 }}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{ color: '#ffffff', fontSize: 11, textAlign: 'center', marginTop: 4, padding:8 }}>By signing up, you agree to Cukur In <Text style={{ color: '#9C0A10', fontSize: 11 }}>Terms and Condition</Text> and <Text style={{ color: '#9C0A10', fontSize: 11 }}>Privacy Policy</Text></Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#ffffff', fontSize: 14 }}>Already signed up?  </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Sign In')}>
                        <Text style={{ color: '#9C0A10', fontSize: 14 }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AccountContainer>
    )
}
