
import {SET_FILTER_FLIGHT,SET_FLIGHT} from '../actions/flights'
const initialState = {
    filterFlights: [],
    Flights: []
  };
  

  export default (state=initialState,action) =>{
      switch(action.type){
          case SET_FILTER_FLIGHT:
              return {
                 filterFlights: action.filterFlights,
                 flights: []
              }
              case SET_FLIGHT:
                return {
                   filterFlights: [],
                   flights: action.flights
                }
      }
      return state;
  }