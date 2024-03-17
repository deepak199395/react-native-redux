import {ADD_TO_CART} from "./contants"


export function addToCart(item){ 
   return{
    type:ADD_TO_CART,
    data:item
   }
}