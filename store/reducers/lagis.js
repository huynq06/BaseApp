
import {SET_LAGI,SEARCH_LAGI} from '../actions/lagis'
const initialState = {
    lagis: [],
  };
  

  export default (state=initialState,action) =>{
      switch(action.type){
          case SET_LAGI:
              return {
                lagis: action.lagis,  
              }
          case SEARCH_LAGI:
            let searchLagi = [...state.lagis];
            if(action.textInput===''){
              searchLagi = searchLagi;
            }
            else{
              searchLagi = searchLagi.filter(
                item => item.mawb.includes(action.textInput)
              )
            }    
      }
      return state;
  }