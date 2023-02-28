import React, {useState} from 'react'
import { View, Text,StyleSheet,ImageBackground,Image, TextInput,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SignUp(){

    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    return( 
    <View style={styles.container}> 

    <ImageBackground
     source={require('../../Assets/Images/background11.png')}
    resizeMode="cover" style={styles.image}>

      <Image
         source={require('../../Assets/Images/1.png')}
         style={styles.Logo}
        /> 

        <Text style={styles.text}>Create new account!</Text>

        <View style={styles.TextInputArea}>
        <TextInput
        style={styles.inputUserName}
        placeholder="Type your email"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
          />
            <FontAwesome name="user-o" size={30} color={'#fb8500'}
            style={styles.IconEmail} />
        </View>

        <View style={styles.TextInputArea}>
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
            style={styles.IconPassword} />
       </View>
       <TouchableOpacity onPress={ () => navigation.navigate('Home')}> 
          <Text style={styles.LoginText}> Sign Up </Text>
       </TouchableOpacity>
        </ImageBackground>
    </View>
    )
}

const styles  = StyleSheet.create({
    container:{
        flex:1,
    
    },
    Logo:{
       width:380,
      height:355,
       alignSelf:'center',
       marginTop:-20
      },
    text:{
        color:'#011c43',
        textAlign:'center',
        fontSize:25,
        marginTop:10

    },
    TextInputArea:{
      flexDirection:'row',
      alignSelf:'center'
    },
    image:{
        height:'100%',
        width:'100%'
    },
    IconEmail:{
      alignSelf:'center',
      position:'absolute',
      paddingLeft:10,
      paddingTop:20
    },
     IconPassword:{
      alignSelf:'center',
      position:'absolute',
      paddingLeft:15,
      paddingTop:10
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
       LoginText:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:50,
        borderColor:'white',
        borderRadius:15,
        width:150,
        alignSelf:'center',
        backgroundColor:'#011c43',
        color:'white',
        padding:5
      },
})