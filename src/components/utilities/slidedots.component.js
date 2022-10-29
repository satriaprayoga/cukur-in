import React from 'react'
import { Animated } from 'react-native'

const SlideDots = () => {

  const renderContent=({children})=>{

    const scrollX=new Animated.Value(0);

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
            {children}
        </Animated.ScrollView>
    )
  }  

  return (
    <div>SlideDots</div>
  )
}

export default SlideDots;