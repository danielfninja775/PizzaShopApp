
import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


const items = [
  // this is the parent or 'item'

  {
    name: 'Meat',
    id: 0,
    
    // these are the children or 'sub items'
    children: [
   
      {
        name: 'Peperoni',
        id: 1,
      },
      {
        name: 'Sausage',
        id: 2,
      },
      {
        name: 'Hamburguer',
        id: 3,
      },
      {
        name: 'Chicken',
        id: 4,
      },
 
    ],
  },
  {
    name: 'Veggies',
    id: 5,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Brocolli',
        id: 6,
      },
      {
        name: 'Corn',
        id: 7,
      },
      {
        name: 'Eggplant',
        id: 8,
      },
      {
        name: 'Black Olives',
        id: 10,
      },
      {
        name: 'Onions',
        id: 11,
      },
      {
        name: 'Peppers',
        id: 12,
      },
    ],
  },
  
    {
      name: 'Cheese',
      id: 13,
      // these are the children or 'sub items'
      children: [
     
        {
          name: 'Extra Cheese',
          id: 14,
        },
        {
          name: 'Feta Cheese',
          id: 15,
        },
        {
          name: 'Blue Cheese',
          id: 16,
        },
        {
          name: 'Parmesan',
          id: 17,
        },
   
      ],
    },
  

];

export default class MultiSelectToppings extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <View style={{width:'90%',marginLeft:20}}>
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="children"
          selectText="Extra Toppings..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
      
        />
      </View>
    );
  }
}