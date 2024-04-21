import React, {useState} from 'react'
import {FontAwesome} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Welcome from '../screens/Welcome'
import Profile from '../screens/Profile'
import Map from '../screens/Map'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const theme = {
  dark: false,
  colors: {
    primary: '#FF4E4E',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
}

export default function AppNavigator() {
  const [name, setName] = useState<string | null>(null)

  return (
      <NavigationContainer theme={theme}>
        <Tab.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}

        >

          <Tab.Screen
              name="Welcome"
              options={{
                tabBarStyle: {display: 'none'},
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="home" size={size} color={color}/>
                ),
              }}
          >
            {() => <Welcome name={name}/>}
          </Tab.Screen>

          <Tab.Screen
              name="Profile"
              options={{
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user" size={size} color={color}/>
                ),
              }}
          >
            {() => <Profile setName={setName} name={name}/>}
          </Tab.Screen>

          <Tab.Screen
              name="Map"
              options={{
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="map" size={size} color={color}/>
                ),
              }}
          >
            {() => <Map name={name}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  )
}