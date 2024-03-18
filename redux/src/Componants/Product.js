import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from './Redux/actions'; 
const Product = (props) => {
    const[isAdded,setIsadded]=useState(false)
    const item=props.item
    const dispatch= useDispatch()

    const cartItems=useSelector((state)=>state.reducer)

const  handleaddtocart=(item)=>{
  dispatch(addToCart(item))
  }

const handleRemoveFromCart=(item)=>{
    dispatch(removeFromCart(item.name))
}

  useEffect(()=>{
  let result=cartItems.filter((element)=>{
    return element.name === item.name
  });
  if(result.length){
    setIsadded(true)
  }else{
    setIsadded(false)
  }
  },[cartItems])

  return (
    <View style={styles.container}>
    
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text>{item.color}</Text>
          <Image source={item.image} style={{ width: 150, height: 150 }} />
          {
            isAdded?
            <Button title='Remove to cart' onPress={()=>handleRemoveFromCart(item)}/>
           :
           <Button title='Add to cart' onPress={()=>handleaddtocart(item)}/>

          }
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