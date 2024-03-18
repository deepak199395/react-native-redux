import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"
const Header = () => {

  const cortData=useSelector((state)=>state.reducer)
  const[cartItem,setCartItem]=useState(0)
  
 // const navigation = useNavigation()

//  const handlecart=()=>{
//   navigation.navigate('CartScreen')
//  }

  useEffect(()=>{
 setCartItem(cortData.length)
  },[cortData])
 return (
    <View style={styles.container}>
    <Text>Gangi</Text>
    <TouchableOpacity >
    <Text style={styles.txt}>{cartItem}</Text>
   </TouchableOpacity>
    </View>
  )
}
export default Header
const styles = StyleSheet.create({
    txt:{
        textAlign:"right",
        padding:15,
        backgroundColor:'orange',
        width:50,
        left:300,
        borderWidth:1,
        borderColor:"white",
        borderRadius:10
    },
    container:{
      margin:5,
      flexDirection:"row"
    }
})