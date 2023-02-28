import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigation from './StackNavigation';
import Login from '../Screens/Login';
import { Home,Profile,Menu,Cart,Feedback,Nutrition,PrivacyPolicy,TermsCondition } from '../Screens';
import CustomDrawer from '../Components/CustomDrawer';
const Drawer = createDrawerNavigator();

export default props => (
  <Drawer.Navigator
  drawerContent={ props => <CustomDrawer {...props}/>}
  screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor:'#fb8500',
      drawerActiveTintColor:'white',
      drawerInactiveTintColor:'white',
      drawerStyle: {
       backgroundColor: '#f8f9fa',
       width: 260,
       height:'95%',
       marginTop:10,
       paddingBottom:10,
       paddingTop:10,
       borderRadius:10
     },
     drawerLabelStyle:{
       marginLeft:50,
     fontFamily:'Roboto-Medium'
     },
     headerStyle:{
       backgroundColor:'#f8f9fa',
      },
    }} 
  >
        <Drawer.Screen name="Home Page" component={StackNavigation} 
        options={{
          drawerIcon: (color) =>(
            <Ionicons name="home-outline" size={22} color={'white'} 
              style={{marginRight:-70}}/>
          )
        }}
      />
    
      <Drawer.Screen name="Profile" component={Profile} 
           options={{
            drawerIcon: (color) =>(
              <Ionicons name="person-outline" size={22} color={'white'} 
              style={{marginRight:-70}} />
            )
           }}
      />
      <Drawer.Screen name="Menu" component={Menu}
           options={{
            drawerIcon: (color) =>(
              <Ionicons name="reader-outline" size={22} color={'white'} 
                style={{marginRight:-70}} />
              )
             }}
      />
      <Drawer.Screen name="Cart" component={Cart}
       options={{
        drawerIcon: (color) =>(
          <Ionicons name="cart-outline" size={22} color={'white'} 
          style={{marginRight:-70}} />
        )
       }}
      />
        <Drawer.Screen name="Nutrition" component={Nutrition} />
      <Drawer.Screen name="TermsCondition" component={TermsCondition} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
    </Drawer.Navigator>
);