import { View, Text,ScrollView,Image } from 'react-native'
import React from 'react'

export default function HorizoltalScrool() {

  return (
    <View>
      <ScrollView
       horizontal={true}
       showsHorizontalScrollIndicator={false}
     >

      <Image source={require('../../Assets/Images/flyer.jpg')}
       style={{width:200, height:200,borderRadius:7,margin:5}}
      /> 

     <Image source={require('../../Assets/Images/flyer2.jpg')}
      style={{width:200, height:200,borderRadius:7,margin:5}}
     /> 
    <Image source={require('../../Assets/Images/flyer3.jpg')}
     style={{width:200, height:200,borderRadius:7,margin:5}}
    /> 

    <Image source={require('../../Assets/Images/flyer4.jpg')}
     style={{width:200, height:200,borderRadius:7,margin:5}}
   /> 

     </ScrollView>
    </View>
  )
}