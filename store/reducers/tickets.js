
import {
 
  CREATE_TICKET,
 
  SET_TICKETS
} from '../actions/products';
import Ticket from '../../models/Ticket';

const initialState = {
    availableTickets: [],
   // userProducts: []
  };

export default (state=initialState,action) =>{
    switch(action.type){
        case SET_TICKETS:
            return {
                availableTickets: action.tickets
            };
            case CREATE_TICKET:
                const newTicket = new Ticket(
                  action.ticketData.id,
                  action.ticketData.synId,
                  action.ticketData.bsx,
                  action.ticketData.created,
                  action.ticketData.actionCode,
                  action.ticketData.actionValue,
                  action.ticketData.actionDate
                );
                return {
                  ...state,
                  availableTickets: state.availableTickets.concat(newTicket)
                };
    }
    return state;
}  