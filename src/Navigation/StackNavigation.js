import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import {
    Login,
    Home,
    SignUp,
    Menu,
    Profile,
    DesertsPage,
    DrinksPage,
    PizzaPage,
    SaladsPage,
    StarterPage,
} from '../Screens'


const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Home' // Controle de rota inicial
        screenOptions={{ headerShown: false }}
    >
      
        <Stack.Screen name="Home" component={HomeNavigationTabs}/>
    </Stack.Navigator>
)

export function HomeNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                title: 'Tela Home',
                headerLeft: () => (
                    <View style={{ margin: 10 }}>
                        <Icon
                            name="bars"
                            size={25}
                            color={"#000"}
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Deserts" component={DesertsPage} />
            <Stack.Screen name="Pizzas" component={PizzaPage} />
            <Stack.Screen name="Salads" component={SaladsPage} />
            <Stack.Screen name="Starter" component={StarterPage} />
            <Stack.Screen name="Drinks" component={DrinksPage} />
        </Stack.Navigator>
    )
}

