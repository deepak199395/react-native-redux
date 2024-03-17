import {ADD_TO_CART} from "./Contants"


export function addtocart(item){ 
   return{
    type:ADD_TO_CART,
    date:item
   }
}