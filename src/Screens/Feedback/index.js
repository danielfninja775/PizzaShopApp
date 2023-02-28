import React  from 'react'
import { Text, View , TouchableOpacity,TextInput,Image,ScrollView,StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontFamily,Colors } from '../../Assets/CommonStyle';
import { useNavigation } from '@react-navigation/native';

export default function Feedback() {
  const navigation = useNavigation();

  return (

    <View style={styles.container}> 
      <View style={styles.MenuIconBox}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
          <FontAwesome name="bars" size={30} color={'red'}/>
        </TouchableOpacity>
       </View>

    <ScrollView>
       <Image
         source={require('../../Assets/Images/logo.jpg')}
         style={{width:300, height:355, alignSelf:'center',borderRadius:10}}
        />
         <Text style={styles.FeedbackTitle}>
          Your feedback is valuable to us!
        </Text>
        <Text style={styles.feedbackText}>
          Tell us what you like or where we can improve. 
        </Text>

        <View style={styles.InputBox}> 
          <TextInput
           style={styles.InputText }
           placeholder="Leave your comment"
           placeholderTextColor="#011c43"
          textAlign='center'
         />

          <TouchableOpacity>  
            <Text style={styles.Button}>Submit</Text>
          </TouchableOpacity>
       </View>
      </ScrollView>

   </View>  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#011c43'
  },
MenuIconBox:{
  alignSelf:'flex-end', 
  paddingRight:15,
  padding:20
},
FeedbackTitle:{
  color:'white',
  textAlign:'center',
  fontFamily:FontFamily.OpenSans,
  fontSize:24
},
feedbackText:
{color:'white',
textAlign:'center' ,
fontFamily:FontFamily.Poppins,
fontSize:13,
paddingBottom:20
},
InputBox:{ 
  marginBottom:13,
  marginTop:10,
 paddingTop:10,
   width:400,
   height:300,
   alignSelf:'center',
   alignItems:'center',
 backgroundColor:'#f8f9fa'
  },
  InputText:{
 marginTop:20,
 marginBottom:20,
borderWidth:1,
borderColor:'white',
borderRadius:5,
width:'90%',
height:150,
color:'black',
alignItems:'center',
backgroundColor:'white',
shadowOffset: {width: -4, height: 4},  
shadowColor: '#171717',  
shadowOpacity: 0.9,  
shadowRadius: 9,  
backgroundColor: '#f8f9fa',
borderRadius: 8,  
shadowColor: '#52006A',  
  elevation: 10,  
fontSize:20,
    },
Button:{
     fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:10,
    borderColor:'white',
    borderRadius:15,
    width:120,
    alignSelf:'center',
    backgroundColor:'#fb8500',
    color:'white',
    marginBottom:30,
    padding:5
  }
});