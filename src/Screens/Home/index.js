import React from 'react'
import { View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    SectionList,
   TouchableOpacity,
    SafeAreaView,} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons/faPeopleCarryBox'
import { faShippingFast} from '@fortawesome/free-solid-svg-icons/faShippingFast'
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils'
import Icon from 'react-native-vector-icons/Entypo'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HorizoltalScrool from '../../Components/HorizontalScroll';
import HorizoltalScrool2 from '../../Components/HorizontalScroll2';

const navigation = useNavigation();



export default props => (
    <SafeAreaView style={{flex:1}}> 

      <View style={ styles.container }>
       
        <View style={styles.DrawerIcon}>


           <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>  
             <FontAwesome name="bars" size={30} color={'#fb8500'}/>
           </TouchableOpacity>
       </View>
    
       <View style={ styles.iconsTop }> 
         <FontAwesomeIcon icon={ faShippingFast } 
           size={40} color={'#fb8500'}
           style={styles.deliveryIcon}/>

         <FontAwesomeIcon icon={ faPeopleCarryBox } 
          color={'#fb8500'}  size={40} 
          style={styles.deliveryIcon2}/>

        <FontAwesomeIcon icon={ faUtensils } 
          size={40} color={'#fb8500'}
          style={styles.deliveryIcon3}/>
      </View>

       <View style={ styles.TopBarBox }> 
          <Text style={ styles.TopBarText }>Delivery</Text>
          <Text style={ styles.TopBarText }>Self PickUp</Text>
          <Text style={ styles.TopBarText }>Dine-In</Text>
       </View>
  
   
        <ScrollView style={{marginBottom:65,marginTop:-10}}> 
          <HorizoltalScrool/>
   
         <TouchableOpacity> 
          <Text style={ styles.exploreMenuText }> Explore Menu </Text>
        </TouchableOpacity>
  
      <View style={ styles.ExploreMenuBox }>
        <TouchableOpacity onPress={ () => navigation.navigate('Menu')}>  
          <View style={ styles.exploreMenu1 }>
            <Image
              source={require('../../Assets/Images/pizzaa1.jpg')}
              style={ styles.exploreMenuImage }
           />
         </View>
      </TouchableOpacity>
    </View>
      
        
        <TouchableOpacity onPress={ () => navigation.navigate('Starter')} > 
           <Text style={ styles.TopDealText }> Best Starters  </Text>

             <View style={ styles.ExploreMenuBox }>
              <View style={ styles.exploreMenuDeals }>
               <Image
                 source={require('../../Assets/Images/starters1.png')}
                 style={ styles.exploreDealsImage }
              />
              <Image
                 source={require('../../Assets/Images/salad.png')}
                 style={ styles.exploreDealsImage  }
              />
             <Image
               source={require('../../Assets/Images/bread5.png')}
               style={ styles.exploreDealsImage  }
             /> 
        </View>


    <View style={ styles.exploreMenuDeals }>
       <Image
        source={require('../../Assets/Images/mozzarela2.jpg')}
        style={ styles.exploreDealsImage  }
       />
      <Image
        source={require('../../Assets/Images/tenders.jpg')}
        style={ styles.exploreDealsImage  }
       />
     <Image
        source={require('../../Assets/Images/cheeseballs1.png')}
        style={ styles.exploreDealsImage  }
       />
     </View>

   </View>
 </TouchableOpacity>
    
         <HorizoltalScrool2/> 

       <View> 
        <Text style={styles.BeatqueueText}> Beat the queue! </Text>
       </View>

       <View style={ styles.BeatqueueBox }>
          <View style={styles.BeatqueueInside}> 

             <Icon name="tablet" color="red" size={25} 
              style={{paddingRight:10,marginRight:5,marginLeft:5}}/>

             <Text style={styles.BeatNumber}>Step 1  -  </Text>
             <Text style={styles.beatText}>Order From The App</Text>
          </View>
         
          <View style={styles.BeatqueueInside}> 
             <Icon name="location" color="red" size={25}
              style={{paddingRight:10,marginRight:5}}/>

             <Text style={styles.BeatNumber}>Step 2  -  </Text>
             <Text style={styles.beatText}>Select Pick Up Store</Text>
          </View>

          <View style={styles.BeatqueueInside}> 
            <Icon name="bell" color="red" size={25} 
            style={{paddingRight:10,marginRight:5,marginLeft:10}}/>
            
             <Text style={styles.BeatNumber}>Step 3  -  </Text>
             <Text style={styles.beatText}>Notified When Ready</Text>
          </View>
      </View>

       
 
  
   
        </ScrollView>
    </View>
    </SafeAreaView>
)