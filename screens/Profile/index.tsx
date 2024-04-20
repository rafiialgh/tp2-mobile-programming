import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button'

export default function Profile() {
  const [name, setName] = React.useState('...')

  const submit = () => {
    console.log('Name:', name)
    name && alert(`Hello, ${name}!`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.content}>
          <Text style={styles.headingText}>Hello {name.length <= 0 ? '...' : name}!</Text>
          <Text style={styles.subHeadingText}>Complete your profile!</Text>
          <TextInput style={styles.input} placeholder='Name' onChangeText={event => setName(event) }/>
          <TextInput style={styles.input} placeholder='Hobby' />
          <View style={styles.button}>
            <Button title='Save' onPress={submit}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  content: {
    marginHorizontal: 35,
    marginTop: 140,
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'OpenSans_700Bold',
    color: '#2B302C',
    marginBottom: 5,
  },
  subHeadingText: {
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    color: '#2B302C',
    marginBottom: 15,
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
