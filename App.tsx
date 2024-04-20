import { StyleSheet, Text, View, StatusBar } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper'

import {
  useFonts,
  OpenSans_800ExtraBold,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Welcome from './screens/Welcome'
import Profile from './screens/Profile'
import Map from './screens/Map'

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

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content' />
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            initialRouteName='Welcome'
            screenOptions={{ headerShown: false }}

          >
            <Tab.Screen
              name='Welcome'
              component={Welcome}
              options={{
                tabBarStyle: { display: 'none' },
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome
                    name='home'
                    size={30}
                    color='rgb(199, 199, 204)'
                  />
                ),
              }}
            />
            <Tab.Screen
              name='Profile'
              component={Profile}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <FontAwesome
                    name='user'
                    size={28}
                    color={focused ? '#FF4E4E' : 'rgb(199, 199, 204)'}
                  />
                ),
              }}
            />
            <Tab.Screen
              name='Map'
              component={Map}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <FontAwesome
                    name='map'
                    size={25}
                    color={focused ? '#FF4E4E' : 'rgb(199, 199, 204)'}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
  },
})
