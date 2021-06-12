import R from 'ramda'
import uuid from 'uuid-random'; 


export const insert = (state, item) => {
    const { byId = {}, ids = [] } = state;
    const id = `${ids.length > 0 ? Math.max(...ids) + 1 : 0}`;
    return {
      byId: {
        ...byId,
        [id]: { id, ...item },
      },
      ids: [id, ...ids],
    };
  };
  export const update = (state, id, props) => {
   
    const  {byId}  = state.allCategories
    const item = byId[id];

    return item ? {
      
        [id]: { ...item, ...props },
     
    } : state;
  };
  export const insertAll = (state, items) => R.reduce(insert, state, items);
  export const insertWithUUID = (state, item) => {
    const { byId = {}, ids = [] } = state;
    const id = uuid();
  
    return {
      byId: {
        ...byId,
        [id]: { id, ...item },
      },
      ids: [id, ...ids],
    };
  };
  
  export const insertAllWithUUID = (state, items) => R.reduce(insertWithUUID, state, items);

  