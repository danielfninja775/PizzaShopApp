import { StyleSheet } from 'react-native';
import { FontFamily, Colors } from '../../Assets/CommonStyle';


export default StyleSheet.create({
container:{
 flex:1,
backgroundColor: '#f8f9fa',

},
DrawerIcon:{
  alignSelf:'flex-end', 
  paddingRight:20,
  padding:20
},
exploreMenuText:{
  flex:1,
paddingLeft:10, 
color:'red', 
fontSize:18, 
marginTop:20,
fontFamily: FontFamily.Montserrat,
},
menuBAR:{

},
iconsTop:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
justifyContent: 'space-between',
width:'90%',
height:60,
paddingHorizontal:40,
shadowOffset: {width: -9, height: 4},  
  shadowOpacity: 0.9,  
shadowRadius: 9,  
backgroundColor:'#011c43',  
shadowColor: 'black',  
  elevation: 9,  
  borderRadius:15,
marginTop:1
},
deliveryIcon:{
marginLeft:6,
   borderRadius:10,
     width:20,
     height:20,
   color:'#fb8500',
},
deliveryIcon2:{
    borderRadius:10,
    width:60,
    height:60,
   marginLeft:4,
    marginTop:5,
 },
 deliveryIcon3:{
    borderRadius:10,
    width:60,
    height:60,
  color:'#fb8500',
  marginRight:8
},
TopBarBox:{
 width:'90%',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  justifyContent: 'space-between',
  paddingHorizontal:40,
},
TopBarText:{
color:'black',
fontSize: 16,
height:40,
fontFamily: FontFamily.Poppins
},
exploreMenu1:{
 marginRight:-15,
  flexDirection:'row',
  marginTop:20,
  alignSelf:'center'
},
exploreDealsImage:{
width:100, 
height:80,
borderRadius:40,
marginLeft:10,
marginTop:5
},
exploreMenuDeals:{
  flexDirection:'row',
  marginTop:-5,
  alignSelf:'center'
},
exploreMenuImage2:{
width:100, 
height:60, 
borderRadius:40,
marginLeft:20,
},
ExploreMenuBox:{
   marginBottom:10,
  marginTop:5,
   borderRadius:5,
   width:350,
   height:160,
   alignSelf:'center',
   alignItems:'center',
   paddingLeft:10,
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.9,  
   shadowRadius: 9,  
   backgroundColor: 'white',  
   borderRadius: 20,  
   shadowColor: '#52006A',  
     elevation: 5,  
   paddingHorizontal: 25, 
},
exploreMenuImage:{
width:330, 
height:150, 
marginTop:-15
},
TopDealBox:{
marginTop:20
},
TopDealText:{
fontFamily: FontFamily.Montserrat,
paddingLeft:10,
paddingTop:20,
color:'red', 
fontSize:18,
},
BeatqueueBox:{
 marginBottom:13,
 marginTop:5,
  borderRadius:5,
  width:320,
  height:120,
  alignSelf:'center',
  alignItems:'center',
  paddingLeft:10,
  shadowOffset: {width: -4, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.9,  
  shadowRadius: 9,  
  backgroundColor: '#011c43',
  borderRadius: 20,  
  shadowColor: '#52006A',  
  elevation: 10,  
  paddingHorizontal: 25,  
  },
  BeatqueueText:{
 paddingTop:20,
justifyContent:'center',
alignSelf:'center',
color:"red",
fontSize:22,
fontFamily: FontFamily.Montserrat
},
shadowProp: {  
  shadowOffset: {width: -2, height: 4},  
  shadowColor: '#171717',  
  shadowOpacity: 0.2,  
  shadowRadius: 3,  
},  
BeatqueueInside:{
flexDirection:'row',
alignItems:'center',
paddingTop:10
},
BeatNumber:{
fontFamily: FontFamily.Montserrat,
color:'#fb8500',
fontSize:18
},
beatText:{
  color:'white',
  fontFamily: FontFamily.Poppins,
  fontSize:16
},

});