import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomNavigation from '../../components/BottomNavigation'

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Map</Text>
      {/* <BottomNavigation /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})