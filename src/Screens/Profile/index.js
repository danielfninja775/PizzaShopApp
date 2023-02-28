import React, { useState, useContext} from 'react';
import { View, Text,TextInput, TouchableOpacity, StyleSheet,Image, ImageBackground,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../Contexts/AuthContext'
import axios from 'axios';

export default function Profile() {

  const navigation = useNavigation();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login2(){
    try {
      const response = await axios({
          method: 'post',
          url: 'https://meteologica.cloud/backend/session',
          data: {
              username,
              password
          }
      });
      console.log(response.data);''
  } catch (error) {
      console.log(error);
  }
  }
 

 return (


     <ImageBackground source={require('../../Assets/Images/background.png')}
       resizeMode="cover" style={styles.image}>

      <View style={StyleSheet.container}>
      <TouchableOpacity onPress={()=> navigation.openDrawer()}
           style={{marginLeft:'85%',marginTop:10}}
           >  
             <FontAwesome name="bars" size={30} color={'#fb8500'}/>
           </TouchableOpacity>

        <Image
         source={require('../../Assets/Images/logo333.1.png')}
         style={{width:380, height:355, alignSelf:'center',marginTop:-20}}
        /> 

        <View style={{flexDirection:'row',alignSelf:'center'}}>
         <TextInput
        style={styles.inputUserName}
        placeholder="Type your email"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
          />
            <FontAwesome name="user-o" size={30} color={'#fb8500'}
            style={{alignSelf:'center',position:'absolute',paddingLeft:10,paddingTop:20}} />
        </View>

        <View style={{flexDirection:'row',alignSelf:'center'}}>
     <TextInput
      style={styles.inputPassword}
      placeholder="Type your password"
      secureTextEntry
      returnKeyType="next"
      placeholderTextColor="white"
      value={password}
      onChangeText={setPassword}  
          />
      <FontAwesome name="lock" size={30} color={'#fb8500'}
            style={{alignSelf:'center',position:'absolute',paddingLeft:15,paddingTop:10}} />
        </View>


       <TouchableOpacity> 
          <Text style={styles.Login} onPress={login2}> Sign in </Text>
       </TouchableOpacity>
  <Text style={styles.NewAccountText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}>
          <Text style={styles.newAccount} > Create New Account!</Text>
        </TouchableOpacity>
  
    
   </View>
  </ImageBackground>

  );
}

const styles  = StyleSheet.create({

  container:{
    flex:1,
  },
    image:{
     flex:1
  },
    inputUserName:{
     marginTop:20,
    borderWidth:1,
    borderColor:'white',
    borderRadius:10,
    width:300,
    alignSelf:'center',
    textAlign:'center',
    color:'white'
  },
    inputPassword:{
      marginTop:10,
      borderWidth:1,
      borderColor:'white',
      borderRadius:10,
      width:300,
      alignSelf:'center',
      textAlign:'center',
      color:'white'
    },
    Login:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:20,
      borderColor:'white',
      borderRadius:15,
      width:120,
      alignSelf:'center',
      backgroundColor:'white',
      color:'#011c43',
      padding:5
    },
    newAccount:{
      marginTop:20,
     color:'#011c43',
     alignSelf:'center',
     fontWeight:'bold',
  fontSize:18,
 },
 NewAccountText:{
  color: 'white',
  fontWeight:'bold',
   textAlign:"center",
   paddingTop:40,
   fontSize:22
 }


})