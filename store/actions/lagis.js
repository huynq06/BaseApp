import Lagi from '../../models/Lagi'
export const SET_LAGI = 'SET_LAGI'
export const SEARCH_LAGI = 'SEARCH_LAGI'

export const searchLagi = text => {
    return { type: SEARCH_LAGI, textInput: text };
  };
export const fetchLagi = (id,textfilter) =>{
   
    return async dispatch =>{
        try {
         
            const response = await fetch(`http://tracuu.alsc.com.vn/api/FlightDetailApi/${id}`,
            {
                method: "GET",
                headers: {Accept: "application/json", "Content-Type": "application/json"},
            }
            );
            const resData = await response.json();  
            const loadedLagis = [];
            resData.forEach((item, index) => {
                if(item.Mawb.includes(textfilter))
                {
                
                    return loadedLagis.push(
                        new Lagi(
                            item.Lagi_Identity,
                            item.Mawb,
                            item.Hawb,
                            item.Pieces_Received,
                            item.Pieces_Expected,
                            item.Weight,
                            item.Weight_Expected,
                            item.Status_Goods,
                            item.LAGI_TSO,
                            item.Shipper,
                            item.Consignee,
                            item.Remark
    
                        )
                    );
                }
                
              });
            dispatch({
                type: SET_LAGI,
                lagis: loadedLagis
            });
        }
        catch(err){}
    }
}