import React from 'react'
import { Animated, Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { OnBoardingImage } from '../components/onboarding-image.component';
import {images} from '../components/onboarding.images'

const {onboard_1,onboard_2,onboard_3,onboard_4, logo}=images;

const onBoardings=[
  {
    title:"Selamat Datang di Cukur In",
    subtitle:"Cukur In adalah platform grooming pribadi kamu biar kamu tampil selalu kece",
    img: onboard_1
  },
  {
    title:"Pilih Barber dan Kapster Favorit",
    subtitle:"Kamu bisa pilih barber dan kapster favorit mu agar hasil memuaskan",
    img: onboard_2
  },
  {
    title:"Jadwalkan Kunjungan mu",
    subtitle:"Kamu bisa menrencanakan dan reservasi dari jauh hari tanpa antri",
    img: onboard_3
  },
  {
    title:"Silahkan Nikmati Cukur In",
    subtitle:"Buruan daftar dan log in untuk dapatkan manfaat dan ada promonya lho...",
    img: onboard_4
  }

]



export const OnboardingScreen = ({navigation}) => {

  const scrollX=new Animated.Value(0);

  const renderContent=()=>{
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={8}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {nativeEvent:{contentOffset:{x:scrollX}}},
        ],{useNativeDriver:false})}
      >
      {onBoardings.map((item,index)=>(
        <OnBoardingImage key={index} 
        image={item.img} 
        title={item.title}
        subtitle={item.subtitle}/>
      ))}
    </Animated.ScrollView>
    )
  }
  
  const renderDots=()=>{

    const dotPosition = Animated.divide(scrollX,Dimensions.get('window').width);
    return (
      <View style={{flexDirection:'row'}}>
        {onBoardings.map((item,index)=>{
          const opacity=dotPosition.interpolate({
            inputRange: [index-1,index,index+1],
            outputRange:[0.3,1,0.3],
            extrapolate:'clamp' 
          });
          const dotSize = dotPosition.interpolate({
            inputRange: [index-1,index,index+1],
            outputRange:[8,10,8],
            extrapolate:'clamp' 
          });
          return (
            <Animated.View 
              key={`dot-${index}`}
              opacity={opacity}
              style={{borderRadius:20,backgroundColor:'#fff', marginHorizontal:10, width:dotSize, height:dotSize}}>
        
           </Animated.View>
          )
        })}
      </View>
     
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}
      <View style={{position:'absolute', bottom:'30%'}}>
      {renderDots()}
      </View>
      <TouchableOpacity style={{margin:8}} onPress={()=>navigation.navigate('Sign In')}>
        <Text style={{color:'#fff'}}>Lanjut &#10230; </Text>
      </TouchableOpacity>
      <View style={{margin:24,position:'relative',justifyContent:'center', alignItems:'center'}}>
        <Image source={logo} style={{width:80}} resizeMode='cover'/>
        <Text style={{color:'#ffffff', margin:4}}>V.2.0</Text>
      </View>
      
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1E1E1E'
  }
})