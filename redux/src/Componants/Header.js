import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.txt}>0</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    txt:{
        textAlign:"right",
        padding:5,
        backgroundColor:'orange'
    }
})