import * as Types from "./actionTypes";



export const getCartDataRequest = (payload)=>{
    return{
        type:Types.GET_CART_REQUEST,
        payload
    }
}