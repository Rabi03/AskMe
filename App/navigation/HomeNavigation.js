import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../Screen/HomeScreen'
import ListDetailsScreen from '../Screen/ListDetailsScreen'

const stack=createStackNavigator()

export default function HomeNavigator() {
    return (
        <stack.Navigator mode="model">
            <stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
            />
            <stack.Screen 
                name="ListDetails"
                component={ListDetailsScreen}
                options={{headerTransparent: true,headerTitle:false,headerLeftContainerStyle:{backgroundColor:'white',width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:20,margin:10,opacity:0.8}}}
            />
       </stack.Navigator>
    )
}

