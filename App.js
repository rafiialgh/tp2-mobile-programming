import * as React from 'react'
import { Text, StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {
  useFonts,
  OpenSans_800ExtraBold,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans'

import AppNavigator from './navigation/AppNavigator'

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
        <AppNavigator />
    </SafeAreaProvider>
  )
}