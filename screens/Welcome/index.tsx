import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { WelcomeProps } from './types'

import Button from '../../components/Button'

export default function Welcome({ name }: WelcomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.square} />
        <View style={styles.circle} />
      </View>
      <View>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.name}>{name || '...'}</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur. Ut suspendisse pulvinar adipiscing proin laoreet et maecenas suspendisse tincidunt. Condimentum consequat quis maecenas amet.</Text>
      </View>
      <View style={styles.button}>  
        <Button title={'Continue'} buttonPressed='Profile'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingTop: 50,
    backgroundColor: 'rgb(242, 242, 242)',
    height: '100%',
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: '#2B302C',
  },
  circle: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: '#FF4E4E',
    borderRadius: 100,
    left: 40,
    top: 40,
  },
  logoContainer: {
    marginTop: 100,
    marginBottom: 30,
    height: 120,
  },
  title: {
    fontSize: 35,
    fontFamily: 'OpenSans_700Bold',
    color: '#2B302C',
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#2B302C',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#2B302C',
  },
  button: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
