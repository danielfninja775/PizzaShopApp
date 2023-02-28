import React, {useState,Component}  from 'react'
import { 
    Text,
    View, 
   TouchableOpacity,
   FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TextInput
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { api } from '../../Services/api';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import MultiSelectItems from '../../Components/Multiselect';
import NumericInput from 'react-native-numeric-input'
import SelectSize from '../../Components/SelectSize';
import ModalSelectSize from '../../Components/ModalSelector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MultiSelectToppings from '../../Components/Multiselect';


export default  function Cart() {

const [value, setValue] = useState('1')


    return (

      <View style={styles.container}>
  
       <Text style={styles.CartText}>My Cart</Text>
       <ScrollView>
       <View style={styles.ProductArea}> 
       
          <View style={styles.ProductBox}>
           
         <Text style={styles.ProductName}> Peperoni Pizza </Text>

         <View style={{flexDirection:'row'}}> 
           <Image source={require('../../Assets/Images/pizzaPeperoni.png')}
                  style={styles.ProductImage}/>
  
       <View style={{paddingLeft:50,paddingTop:35}}> 
            <NumericInput 
            value={value} 
            onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#011c43' 
            leftButtonBackgroundColor='red'
           />
      </View>
    
</View>
<View style={{paddingTop:120, paddingLeft:160,position:"absolute"}}>
<ModalSelectSize/>
</View>
<View style={{marginTop:10}}>   
<MultiSelectToppings/>

</View>

</View>
<Text style={{fontSize:18,fontWeight:'bold',marginLeft:240,color:'black'}}>Price 19.90</Text>
<View style={styles.ProductBox}>
           
           <Text style={styles.ProductName}> Peperoni Pizza </Text>
  
           <View style={{flexDirection:'row'}}> 
             <Image source={require('../../Assets/Images/pizzaPeperoni.png')}
                    style={styles.ProductImage}/>
    
         <View style={{paddingLeft:50,paddingTop:35}}> 
              <NumericInput 
              value={value} 
              onChange={value => this.setState({value})} 
              onLimitReached={(isMax,msg) => console.log(isMax,msg)}
              totalWidth={100} 
              totalHeight={30} 
              iconSize={25}
              step={1}
              valueType='real'
              rounded 
              textColor='#B0228C' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#011c43' 
              leftButtonBackgroundColor='red'
             />
        </View>

        
      
  </View>
  <View style={{paddingTop:120, paddingLeft:160,position:"absolute"}}>
  <ModalSelectSize/>
  </View>
  <View style={{marginTop:10}}>   
  <MultiSelectToppings/>
  
  </View>
  
  </View>
<Text style={{fontSize:18,fontWeight:'bold',marginLeft:240,color:'black'}}>Price 19.90</Text>

  <View style={styles.ProductBox}>
           
           <Text style={styles.ProductName}> Peperoni Pizza </Text>
  
           <View style={{flexDirection:'row'}}> 
             <Image source={require('../../Assets/Images/pizzaPeperoni.png')}
                    style={styles.ProductImage}/>
    
         <View style={{paddingLeft:50,paddingTop:35}}> 
              <NumericInput 
              value={value} 
              onChange={value => this.setState({value})} 
              onLimitReached={(isMax,msg) => console.log(isMax,msg)}
              totalWidth={100} 
              totalHeight={30} 
              iconSize={25}
              step={1}
              valueType='real'
              rounded 
              textColor='#B0228C' 
              iconStyle={{ color: 'white' }} 
              rightButtonBackgroundColor='#011c43' 
              leftButtonBackgroundColor='red'
             />
        </View>
      
  </View>
  <View style={{paddingTop:120, paddingLeft:160,position:"absolute"}}>
  <ModalSelectSize/>
  </View>
  <View style={{marginTop:10}}>   
  <MultiSelectToppings/>
  
  </View>
  
  </View>
  <Text style={{fontSize:18,fontWeight:'bold',marginLeft:240,color:'black'}}>Price 19.90</Text>

         <View style={styles.PaymentBox}>
            <Image source={require('../../Assets/Images/paymentIcon.png')}
              style={{ width:40, height:40,marginRight:5}}/>

            <TouchableOpacity>
              <Text style={styles.CheckOut}> Check Out  </Text> 
            </TouchableOpacity>
         
         </View>
     
</View>
      </ScrollView>
  </View>
   
    )
}
    
  const styles  = StyleSheet.create({
    container:{
   flex:1,
backgroundColor:'white'
    },
    ProductArea:{
      flex:1,
      backgroundColor:'white',
  width:'95%',
borderRadius:30,
shadowOffset: {width: -9, height: 4},  
shadowOpacity: 0.9,  
shadowRadius: 9, 
shadowColor: 'black',  
elevation: 9,  
borderRadius:15,
alignSelf:'center',
marginTop:10
  },
    ProductBox:{
      width:'75%',
  
      alignSelf:'center',
      marginTop:20,
      marginBottom:10,
      borderRadius:20,
      backgroundColor:'white',
      shadowOffset: {width: -9, height: 4},  
      shadowOpacity: 0.9,  
      shadowRadius: 9, 
      shadowColor: 'black',  
      elevation: 9,  
      borderRadius:15,
      
    },
    ProductName:{
     fontSize:24,
     paddingTop:10,
     color:'red',
  textAlign:'center',
  fontWeight:'bold'
    },
    ProductImage:{ 
      width:90,
      height:90,
      borderRadius:80,
      marginTop:20,
      marginLeft:20,
 
    },
    CartText:{
      textAlign:'center',
      fontSize:26,
      color:'black',
      fontWeight:'bold',
      padding:20
    },
    CheckOut:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      borderRadius:10,
      width:130,
      height:40,
      backgroundColor:'#011c43',
      color:'white',
      padding:5
    },
    PaymentBox:{
      marginTop:20,
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:170,
      paddingBottom:100
    }
    
})