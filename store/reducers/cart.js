import {ADD_TO_CART,REMOVE_FROM_CART} from '../actions/cart' 
import {DELETE_PRODUCT} from '../actions/products'
import CartItem from '../../models/cart-item'
import {ADD_ORDER} from '../actions/orders'
const initialState = {
    items: {},
    totalAmount: 0
}

export default (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updatedOrNewCartItem;
            if(state.items[addedProduct.id]){
                updatedOrNewCartItem = new CartItem(state.items[addedProduct.id].quantity + 1,
                    prodPrice,prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                    )
            }
            else{
                updatedOrNewCartItem = new CartItem(1,prodPrice,prodTitle,prodPrice)
            }
            return{
                ...state,
                items:{...state.items,[addedProduct.id]:updatedOrNewCartItem},
                totalAmount: state.totalAmount + prodPrice
            }
        case REMOVE_FROM_CART:
            const product = state.items[action.prodId];
            let updatedCartItems;
            if(product.quantity > 1){
                //reduce 1
                const updatedCartItem = new CartItem(product.quantity - 1,
                    product.productPrice,
                    product.productTitle,
                    product.sum - product.productPrice);
                updatedCartItems = {...state.items,[action.prodId]:updatedCartItem}    
            }else{
                updatedCartItems = {...state.items}
                delete updatedCartItems[action.prodId];
                //delete product
            }
        return {
            ...state,
            items:updatedCartItems,
            totalAmount: state.totalAmount - product.productPrice
        }
        case ADD_ORDER:
            return initialState;
        case  DELETE_PRODUCT:
            if(!state.items[action.pid]){
                return state
            }   
            const updatedItems = {...state.items}
            const itemTotal = updatedItems[action.pid].sum;
            delete updatedItems[action.pid];
            return{
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - itemTotal
            }
        
    }
    return state;
}