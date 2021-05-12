import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons'
import PostScreen from '../Screen/PostScreen'

import HomeNavigator from '../navigation/HomeNavigation'
import AccountScreen from '../Screen/AccountScreen'
import NotificationScreen from '../Screen/NotificationScreen'



const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeBackgroundColor: 'rgba(0, 255, 64,0.2)',
                inactiveBackgroundColor: 'rgba(0, 255, 64,0.2)',
                inactiveTintColor: 'rgba(90, 90, 90,0.9)',
                labelStyle: {
                    fontSize: 14.5,
                    fontWeight: 'bold'
                },
                style: {
                    position:'absolute'
                }
            }
            }
        >
        <Tab.Screen
            name="Home"
            component={HomeNavigator}
           options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size+5}
                        color={color}
                    />
               )
            }}
        />
        <Tab.Screen
            name="Ask"
            component={PostScreen}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <FontAwesome
                        name="question-circle"
                        size={size+18}
                        color={color} 
                        style={{marginBottom:13,backgroundColor:'white',paddingLeft:7,paddingRight:5,borderRadius:50,borderWidth:1,paddingTop:2.5,borderColor:`${color}`}}
                        />
                ),
            }
            }
            />
             <Tab.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="bell-circle"
                        size={size+5}
                        color={color} />
                )
            }}
        />
            <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="account"
                        size={size+5}
                        color={color}
                    />
                )
            }}
        />
            </Tab.Navigator>
    )
}

export default AppNavigator

