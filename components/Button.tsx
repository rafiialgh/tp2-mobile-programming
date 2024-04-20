import React from "react"
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { useNavigation } from '@react-navigation/native'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  buttonPressed?: string
}

const Button: React.FC<ButtonProps> = ({ title, buttonPressed, ...props }) => {

  const navigation = useNavigation()

  const handleButtonPress = () => {
    if (buttonPressed) {
      navigation.navigate(buttonPressed as never)
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF4E4E',
    width: 'auto',
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
  }
})

export default Button