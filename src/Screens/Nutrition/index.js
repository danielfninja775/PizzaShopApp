import { View, Text, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontFamily,Colors } from '../../Assets/CommonStyle';
import { useNavigation } from '@react-navigation/native';

export default function Nutrition() {

  const navigation = useNavigation();

  return (
    <View style={{ flex:1,width:'90%',alignSelf:'center',paddingTop:10,paddingBottom:30}}>
          <View style={{alignSelf:'flex-end', paddingRight:10,padding:20}}>

             <TouchableOpacity onPress={()=>navigation.openDrawer()}>  
                <FontAwesome name="bars" size={30} color={'red'}/>
             </TouchableOpacity>
         </View>

      <ScrollView>  

        <View style={{paddingTop:20,marginBottom:20}}>

      <Text style={{alignSelf:'center',fontFamily:FontFamily.Montserrat,
      color:'black',paddingBottom:20,fontSize:22 ,color:'#fb8500'}}
       >Nutrition Information</Text>

     <Text style={{color:'black',fontFamily:FontFamily.Poppins}} >
       For people with moderate physical activity and average weight... 
       and if you're smart about food choices,than there can still be room 
      for the occasional treat!Balanced Meals Served Fresh at Your Table.
      Our pizzas are our pride! That's why we at Get Apped use only the freshest 
     and tastiest ingredients to give you equal slices of delight and natural goodness.</Text>

    <Text style={{alignSelf:'center',fontFamily:FontFamily.Montserrat,color:'black',
    paddingBottom:10,paddingTop:10 ,color:'#fb8500',fontSize:16}}> Nothing But the Best for you! </Text>

   <Text style={{color:'black',fontFamily:FontFamily.Poppins}}> Our Quality Assurance Team defends
   our high standards harder than any Italian football squad. To be a Get Apped supplier means
  passing a very rigorous selection process, and undergoing regular thorough checks.
   All to ensure you savor a natural, fresh and simply delicious experience every time.
  Going the Extra Mile for safety
  For your satisfaction and health, Get Apped doesn't take any shortcuts. 
  That's why we strictly follow all global and governmental safety standards 
  when moving foodstuffs from our suppliers to our restaurants.
  On-The-Spot Freshness From preparing the dough to s ingredients, 
  our highly skilled team memes man  </Text>



<Text style={{color:'black',fontFamily:FontFamily.Poppins}} > 
order couldn't be fresher than it already is.Your are what you eat. So Eat Sensibly Tasty and healthy!
Fun food can be fit food! That's why Get Apped offers you a variety of choices for a balanced meal.
 From veggies to proteins, complex carbs to the "good fats", our menu includes the nutrients you need, 
 all with the tastes you love! And when you eat just enough and exercise every now and then,
  pizzas can still be part of your healthy eating habit.</Text>

<Text style={{alignSelf:'center',fontFamily:FontFamily.Montserrat,
color:'black',paddingBottom:10,fontSize:16,paddingTop:10 ,color:'#fb8500' }} >
   Keys to a balanced meal</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >Did you know there's more to tasty fun 
in every Pizza  slice? You also enjoy a balanced meal thanks to our pizzas'
  nutrients: complex carbohydrates in the dough; calcium and proteins in its cheese,
   meat or fish toppings; and fibers and vitamins with its veggies.</Text>

<Text style={{alignSelf:'center',fontFamily:FontFamily.Montserrat,
      color:'black',paddingBottom:10,fontSize:16,paddingTop:10 ,color:'#fb8500' }} >10 Nutrition Facts </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >
  Since your health is as important to Get Apped as your satisfaction, 
  we encourage you to know more about our nutritional values so you can choose smartly and healthily.</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• A complete meal, pizza each of the 5 main food groups.</Text>


<Text style={{alignSelf:'center',fontFamily:FontFamily.Montserrat,
      color:'black',paddingBottom:10,fontSize:16 ,color:'#fb8500',paddingTop:10 }} >Nutrition Information </Text>



<Text style={{color:'black',fontFamily:FontFamily.Poppins}} > Since your health is as important to Get Apped as your satisfaction, 
we encourage you to know more about our nutritional values so you can choose smartly and healthily.</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• A complete meal, pizza contains elements of each of the 5 main food groups.</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Our expert dough masters come early in the morning to ensure that customers get the freshest dough possible.</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Our vegetable toppings offer an array of nutrients like vitamins, minerals and phytonutrients. </Text>

<Text  style={{color:'black',fontFamily:FontFamily.Poppins}}>• Our pizzas are rich in energy-boosting complex carbohydrates to fuel your body and brain throughout the day. </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Our salad bar offers a rich mix of nutritious veggies and seasonings. </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Two slices of a Super Supreme Pizza help meet your daily protein (meat, poultry or seafood) needs. </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Our cheese is a source of calcium, vitamins C and D for healthy bones. </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Our pizzas and pastas contain essential vitamins and minerals like iron and calcium. </Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• We serve only 100% pure halal beef and chicken using 100% vegetable oil.</Text>

<Text style={{color:'black',fontFamily:FontFamily.Poppins}} >• Great tasting and made for sharing! </Text>


      
      </View>
      </ScrollView>
    </View>

  )
}