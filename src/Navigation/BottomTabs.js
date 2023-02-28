import React from 'react'
import { Text,View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { HomeNavigation } from './StackNavigation';
import { SignUp,Menu,Profile,Cart } from '../Screens';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {
    return (
        <Tab.Navigator
        initialRouteName='Home' 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{
             position: 'absolute',
             bottom: 5,
             left:10,
             right: 10,
             elevation: 4,
             borderRadius: 15,
             height:70,
             backgroundColor: '#011c43'
            }
          }}
        >
    <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{ headerShown: false, 
                    tabBarIcon: ({ focused }) => (
                      <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                         <Image
                           source={require('../Assets/Images/iconhome.png')}
                           resizeMode="contain"
                         style={{
                          width:30,
                          height:30,
                        }}
                        />
                        <Text 
                           style={{
                            color: focused ? '#0a9396' : '#d62828',
                            width: 50,
                            fontSize: 11,
                            textAlign: 'center'
                        }}
                        >Home</Text>
                     </View>
                     ),
                  
                  }}/>

      
      <Tab.Screen name="Menu" component={Menu} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                <Image
                 source={require('../Assets/Images/iconemenu.png')}
                 resizeMode="contain"
                 style={{
                   width:30,
                   height:30,
                    }}
               />
                 <Text 
                           style={{
                            color: focused ? '#0a9396' : '#d62828',
                            width: 50,
                            fontSize: 11,
                            textAlign: 'center'
                        }}
                        >Menu</Text>
             </View>
            ),
                }}
        />
               <Tab.Screen name="Cart" component={Cart} 
         options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../Assets/Images/cart.png')}
                resizeMode="contain"
                style={{
                 width:30,
                 height:30,
                  }}
             />
                  <Text 
                           style={{
                            color: focused ? '#0a9396' : '#d62828',
                            width: 50,
                            fontSize: 11,
                            textAlign: 'center'
                        }}
                        >Cart</Text>
           </View>
          ),
          }}
        />

        </Tab.Navigator>

        
    );
}