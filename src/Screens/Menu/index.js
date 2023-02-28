import { View, Text, Image, TouchableOpacity,StyleSheet,ScrollView,ImageBackground} from 'react-native'
import React from 'react'
import { FontFamily,Colors } from '../../Assets/CommonStyle';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function Menu() {

  const navigation = useNavigation();

  return (

      <View style={styles.container}>

       <ImageBackground
          source={require('../../Assets/Images/background7.png')}
          style={{flex:1,resizeMode:'cover'}}>

       

        <Text style={styles.TituloText}> Select By Category </Text>
   
       <ScrollView style={{marginBottom:5}}> 

          <View style={{marginBottom:20}}> 

         <TouchableOpacity onPress={ () => navigation.navigate('Pizzas')} >
           <View style={styles.ItemBox}>
              <View style={styles.ItemNameBox} >
                <Text style={styles.ItemName} >Pizzas </Text>
              </View>
             <Image source={require('../../Assets/Images/pizza1.3.png')}
             style={{width:200,height:120,marginTop:-20,borderRadius:10, 
             justifyContent:'center',alignSelf:'center'}}/>
          </View>
        </TouchableOpacity>


       <TouchableOpacity onPress={ () => navigation.navigate('Starter')} >
       <View style={styles.ItemBox}>
          <View style={styles.ItemNameBox}  >
            <Text style={styles.ItemName} >Starters </Text>
          </View>
             <Image source={require('../../Assets/Images/starters11.png')} 
             style={{width:200,height:120,marginTop:-30,borderRadius:10,
              justifyContent:'center',alignSelf:'center'}}/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Salads')} >
         <View style={styles.ItemBox}>
           <View style={styles.ItemNameBox}  >
             <Text style={styles.ItemName} >Salads </Text>
           </View>
             <Image source={require('../../Assets/Images/salad11.png')} 
             style={{width:220,height:160,marginTop:-45,borderRadius:10, 
             justifyContent:'center',alignSelf:'center'}}/>
          </View>
      </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('Deserts')}>
          <View style={styles.ItemBox}>
            <View style={styles.ItemNameBox}  >
              <Text style={styles.ItemName} >Deserts </Text>
            </View>
             <Image source={require('../../Assets/Images/oreo.png')}
              style={{width:200,height:110,marginTop:-30,borderRadius:10,
               justifyContent:'center',alignSelf:'center'}}/>
         </View>
        </TouchableOpacity>

     <TouchableOpacity  onPress={ () => navigation.navigate('Drinks')}>
        <View style={styles.ItemBox2}>
          <View style={styles.ItemNameBox}  >
            <Text style={styles.ItemName} >Drinks </Text>
          </View>
             <Image source={require('../../Assets/Images/drinks2.png')} 
               style={{width:200,height:120,marginTop:-40,borderRadius:10, 
               justifyContent:'center',alignSelf:'center'}}/>
        </View>
     </TouchableOpacity>

        </View>
      </ScrollView>    
    </ImageBackground>
  </View>
   
  )
}

const styles= StyleSheet.create({
container:{
  flex:1,
 },
ItemBox:{
  borderRadius:5,
  width:300,
  height:140,
  alignSelf:'center',
  marginTop:5,
  paddingLeft:10,
  shadowOffset: {width: -4, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.9,  
  shadowRadius: 9,  
  backgroundColor: 'white',  
  borderRadius: 20,  
  shadowColor: '#52006A',  
  elevation: 5,  
  marginBottom:5,
 borderBottomWidth:20,
 borderColor:'#fb8500',
},
ItemBox2:{
  borderRadius:5,
  width:300,
  height:140,
  alignSelf:'center',
  marginTop:5,
  paddingLeft:10,
  shadowOffset: {width: -4, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.9,  
  shadowRadius: 9,  
  backgroundColor: 'white',  
  borderRadius: 20,  
  shadowColor: '#52006A',  
  elevation: 5,  
  marginBottom:80,
 borderBottomWidth:20,
 borderColor:'#fb8500',
},
ItemImage:{
  marginLeft:50,
  height:100,
  marginTop:-20
},
ItemName:{
  fontSize:19,
  fontFamily:FontFamily.Montserrat,
  color:'#fb8500',
  paddingTop:30
},
ItemNameBox:{
  backgroundColor:'white',
  width:120,
  borderRadius:5,
  alignItems:'center',
  marginTop:2,
  marginBottom:5
},
TituloText:{
  color:'white',
  fontSize:30,
  fontFamily:FontFamily.Poppins,
  paddingLeft:20,
  paddingTop:50,
  paddingBottom:20
},

})