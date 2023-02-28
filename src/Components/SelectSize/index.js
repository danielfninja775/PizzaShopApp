import React, {useState , Component} from 'react';
import { View, Keyboard,Text } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const items = [{
    id: '92iijs7yta',
    name: ' Small'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Medium'
  }, {
    id: '16hbajsabsd',
    name: 'Large'
  }, 
];

export default class SelectSize extends Component {

    state = {
      selectedItems : []
    };
  
    
    onSelectedItemsChange = selectedItems => {
      this.setState({ selectedItems });
    };
  
    render() {
      const { selectedItems } = this.state;
  
      return (


        <View style={{}}>
          <MultiSelect
          
            items={items}
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Choose Size"
            searchInputPlaceholderText="Choose size"
            onChangeInput={ (text)=> console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#011c43"
            selectedItemTextColor="red"
            selectedItemIconColor="#CCC"
            itemTextColor="black"
            displayKey="name"
            searchInputStyle={{ color: '#fb8500' }}
            submitButtonColor="#fb8500"
            submitButtonText="Submit"
            textInputProps={{ editable: false }}
            
          />
      </View>
           
     
      );
    }
  }