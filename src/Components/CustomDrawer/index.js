import React from 'react';
import { View,ImageBackground,Text,TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';



const CustomDrawer = (props) => {

    const navigation = useNavigation();
    return(
        <View style={{flex:1}}>  

         <DrawerContentScrollView
               {...props}
              contentContainerStyle={{flex:1,backgroundColor:'#011c43'}}>
   
              <ImageBackground source={require('../../Assets/Images/logo333.1.png')}
               style={{paddingTop:280}}/>

           <View style={{flex:1,paddingTop:15}}>
              <DrawerItemList {...props} />
           </View>
         </DrawerContentScrollView>
        </View>
  
    )
}

export default CustomDrawer