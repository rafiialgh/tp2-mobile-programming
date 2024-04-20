import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityProps,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function BottomNavigation() {
  const navigation = useNavigation()

  const handlePressButton = (buttonPressed) => {
    if (buttonPressed) {
      navigation.navigate(buttonPressed as never)
    }
  }
  return (
    <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => {handlePressButton('Welcome')}}>
          <FontAwesome name='home' size={30} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handlePressButton('Profile')}}>
          <FontAwesome name='user' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {handlePressButton('Map')}}>
          <FontAwesome name='map' size={24} color='white' />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#6E6E6E',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
})