import React, {useState , Component} from 'react';
import { View, Keyboard,Text,TextInput,Switch } from 'react-native';
import ModalSelector from 'react-native-modal-selector'

class ModalSelectSize extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textInputValue: ''
        }
    }

    render() {
        let index = 0;
        const data = [
            { key: index++, section: true, label: 'Select Size' },
            { key: index++, label: 'Small'},
            { key: index++, label: 'Medium' },
            { key: index++, label: 'Large', accessibilityLabel: 'Select size' },
        
        ];

        return (
            <View style={{}}>

            
            
         
                <ModalSelector
                    data={data}
                    initValue="Select Size"
                    supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}
                    sectionStyle={{backgroundColor:'white',color:'black',borderRadius:15,width:200,alignSelf:'center',}}
                    cancelTextStyle={{backgroundColor:'#011c43',color:'white',borderRadius:5,width:170,alignSelf:'center',
                    height:40,padding:5,paddingTop:8}}
                    cancelContainerStyle={{backgroundColor:'#011c43',width:175,alignSelf:'center',}}
                    optionContainerStyle={{backgroundColor:'white',width:220,alignSelf:'center',color:'black'}}
                    optionTextStyle={{color:'#fb8500'}}
                   
                    >
                    
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:40,width:100,color:'white',fontWeight:'bold',
                        borderRadius:15,textAlign:'center',backgroundColor:'#fb8500',   shadowOffset: {width: -9, height: 4},  
                        shadowOpacity: 0.9,  
                        shadowRadius: 9, 
                        shadowColor: 'black',  
                        elevation: 4,}}
                        editable={false}
                        placeholder="Select Size"
                        placeholderTextColor="white"
                        value={this.state.textInputValue} />
 
                </ModalSelector>

         
            </View>
        );
    }
}
export default ModalSelectSize;