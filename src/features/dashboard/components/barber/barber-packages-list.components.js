import React from 'react'
import { Dimensions, FlatList, TouchableOpacity, View } from 'react-native'
import { Text } from '../../../../components/typography/text.component'

const packages=[
  {
    name:'Potong Rambut',
    duration:'30 sampai 60 menit',
    description:'Potongan rambut pria ini membuat rambut bagian samping kanan dan kiri serta sambut bagian belakang dibuat tipis habis hingga plontos.',
    price: 50000
  },
  {
    name:'Potong Rambut + Cuci',
    duration:'30 sampai 60 menit',
    description:'Potongan membuat rambut bagian samping kanan dan kiri serta sambut bagian belakang dibuat tipis habis hingga plontos.',
    price: 60000
  },
  {
    name:'Warnain Rambut',
    duration:'60 sampai 120 menit',
    description:'Potongan rambut pria ini membuat rambut bagian samping kanan dan kiri serta sambut bagian belakang dibuat tipis habis hingga plontos.',
    price: 150000
  },
  {
    name:'Potong rambut+Warnain Rambut',
    duration:'60 sampai 120 menit',
    description:'Potongan rambut pria ini membuat rambut  hingga plontos.',
    price: 200000
  }
]

const RenderItem=({pkg})=>{
  return(
    <>
    <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{width:Dimensions.get('window').width/1.4}}>
          <Text variant="label">{pkg.name}</Text>
          <Text variant="caption" style={{color:'#c1c1c1'}}>Durasi {pkg.duration}</Text>
          <Text variant="body" style={{fontSize:12, color:'#000'}}>{pkg.description}</Text>
          <Text variant="label">Rp {pkg.price}</Text>
        </View>
        <View style={{marginRight:8}}>
          <TouchableOpacity style={{borderRadius:20, borderColor:'#D3D3D3', borderWidth:1, width:Dimensions.get('window').width/5.4, justifyContent:'center', alignItems:'center'}}>
          <Text variant="label" style={{fontSize:11}}>Booking</Text>
          </TouchableOpacity>
        </View>
        
    </View>
     <View style={{borderBottomWidth:1, borderBottomColor:'#D3D3D3'}}></View>
    </>
  )
}

export const BarberPackagesComponents = () => {
  return (
    <View>
      {packages.map((v,idx)=>{
        return(
          <>
          <RenderItem pkg={v} key={idx}/>
         
          </>
        )
      })}
    </View>
  )
}
