import PRODUCTS from '../../data/dummy-data';
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  SET_PRODUCTS,
  SEARCH_PRODUCT
} from '../actions/products';
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod=>prod.ownerId==='u1')
  };
  

  export default (state=initialState,action) =>{
      switch(action.type){
        case SET_PRODUCTS:
          return {
            availableProducts: action.products,
            userProducts: action.products.filter(prod => prod.ownerId === 'u1')
          };
          case DELETE_PRODUCT:
              
              return {
                  ...state,
                userProducts: state.userProducts.filter(prod=>prod.id !== action.pid),
                availableProducts: state.availableProducts.filter(prod=>prod.id !== action.pid)
              }
      }
      return state;
  }