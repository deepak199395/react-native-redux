import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './Redux/actions'; 

const Product = (props) => {
    const item=props.item
    const dispatch= useDispatch()

const  handleaddtocart=(item)=>{
  dispatch(addToCart(item))
  }
  return (
    <View style={styles.container}>
    
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.color}</Text>
          <Image source={item.image} style={{ width: 150, height: 150 }} />
          <Button title='Add to cart' onPress={()=>handleaddtocart(item)}/>
        </View>
  )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        borderWidth:0.5,
        padding:10
    }
})