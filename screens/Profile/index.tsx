import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ProfileProps } from './types'

import Button from '../../components/Button'

export default function Profile({ setName, name }: ProfileProps) {
  const [names, setNames] = React.useState<string>('')
  const [hobby, setHobby] = React.useState<string>('')

  const handleSubmit = () => {
    console.log('Name:', names)
    console.log('Hobby:', hobby)

    if (names.trim().length > 0 && hobby.trim().length > 0) {
      alert(`Hello, ${names.trim()}! Your hobby is ${hobby.trim()}.`)
      setName(names.trim())
    } else {
      alert('Name and hobby cannot be empty!')
    }

    setNames('')
    setHobby('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.content}>
          <Text style={styles.headingText}>Hello,</Text>
          <Text style={styles.name}>{name == null || name.length <= 0 ? '...' : name}</Text>
          <Text style={styles.subHeadingText}>{name == null || name.length <= 0 ? 'Complete your profile!' : 'Have a good day!'}</Text>
          <TextInput style={styles.input} placeholder='Name' value={names} onChangeText={event => setNames(event)}/>
          <TextInput style={styles.input} placeholder='Hobby' value={hobby} onChangeText={event => setHobby(event)}/>
          <View style={styles.button}>
            <Button title='Save' onPress={handleSubmit}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 140,
    marginHorizontal: 35,
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'OpenSans_700Bold',
    color: '#2B302C',
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#2B302C',
    marginBottom: 5,
  },
  subHeadingText: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#2B302C',
  },
  input: {
    width: 'auto',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 10,
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})
