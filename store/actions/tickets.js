import Ticket from '../../models/Ticket'

export const CREATE_TICKET = 'CREATE_TICKET';
export const SET_TICKETS = 'SET_TICKETS';


export const fetchTickets = () => {
    return async (dispatch, getState) => {
      try {
        const response = await fetch(
          'https://rn-complete-guide.firebaseio.com/products.json'
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const resData = await response.json();
        const loadedTickets = [];
  
        for (const key in resData) {
            loadedTickets.push(
            new Ticket(
              key,
              resData[key].TicketUID,
              resData[key].BienSoXe,
              resData[key].TicketCreatedAt,
              resData[key].ActionCode,
              resData[key].ActionValue,
              resData[key].ActionDateTime
            )
          );
        }
  
        dispatch({
          type: SET_TICKETS,
          tickets: loadedTickets,
         // userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
        });
      } catch (err) {
        // send to custom analytics server
        throw err;
      }
    };
  };

  export const createTicket = (synid, actionCode, actionValue) => {
    return async (dispatch, getState) => {
      // any async code you want!
      const response = await fetch(
        `https://rn-complete-guide.firebaseio.com/products.json?auth=${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            synid,
            actionCode,
            actionValue
          })
        }
      );
  
      const resData = await response.json();
  
      dispatch({
        type: CREATE_TICKET,
        ticketData: {
          id: resData.ID,
           synId : resData[key].TicketUID,
           bsx: resData[key].BienSoXe,
           created: resData[key].TicketCreatedAt,
            actionCode: resData[key].ActionCode,
            actionValue: resData[key].ActionValue,
            actionDate: resData[key].ActionDateTime
        }
      });
    };
  };
  