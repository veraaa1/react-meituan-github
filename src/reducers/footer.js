import { GET_CART, ADD_CART,DEL_CART,BLANK_CART } from '../constants/footer';
export const footer = (state = {product:[],num:{}}, action) => {
    switch (action.type) {
        case GET_CART:
            return action.cart
        case ADD_CART:return action.cart
        case DEL_CART:return action.cart
        case BLANK_CART:return action.cart
        default:
            return state
    }
}