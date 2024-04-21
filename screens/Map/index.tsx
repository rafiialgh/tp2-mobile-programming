import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import { MapProps } from './types'

const { height } = Dimensions.get('window')
const ASPECT_RATIO = Dimensions.get('window').width / height
const LATITUDE_DELTA = 0.030
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default function Map({ name }: MapProps) {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Map View</Text>
          <Text style={styles.headerSubText}>{name || '...'}</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: -6.2025258,
                longitude: 106.7809132,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
          ></MapView>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 20,
    color: '#2B302C',
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 16,
    color: '#2B302C',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 750
  },
})
