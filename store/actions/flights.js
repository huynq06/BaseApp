import Flight from '../../models/Flight'

export const  SET_FILTER_FLIGHT = 'SET_FILTER_FLIGHT'
export const SET_FLIGHT = 'SET_FLIGHT'

export const fetchFilterFlight = () =>{
    return async dispatch =>{
        try {
            console.log('da chay vao fetchFilterFlight')
            const response = await fetch('http://tracuu.alsc.com.vn/api/FlightImpApi/GetAllFlight',
            {
                method: "GET",
                headers: {Accept: "application/json", "Content-Type": "application/json"},
            }
            );
            const resData = await response.json();  
            const loadedFilterFlights = [];
            resData.Flights.forEach((item, index) => {
                return loadedFilterFlights.push(
                    new Flight(
                        item.Code,
                        item.FlightNo
                    )
                );
              });
            dispatch({
                type: SET_FILTER_FLIGHT,
                filterFlights: loadedFilterFlights
            });
        }
        catch(err){}
    }
}

export const fetchFlights = (code,number,date) =>{
    return async dispatch =>{
        try {
            console.log('da chay vao fetch flights')
            console.log(code + number + date);
            const response = await fetch('http://tracuu.alsc.com.vn///api/FlightImpApi?page=1&pageSize=20&code=' + code + '&flightNo='+number+'&fda='+date+'&tda='+ date,
            {
                method: "GET",
                headers: {Accept: "application/json", "Content-Type": "application/json"},
            }
            );
            const resData = await response.json();  
            const loadedFilterFlights = [];
            resData.Flights.forEach((item, index) => {
                return loadedFilterFlights.push(
                    new Flight(
                        item.Code,
                        item.FlightNo,
                        item.ScheDate,
                        item.ScheTime,
                        item.LandDate,
                        item.LandTime,
                        item.FlightType
                    )
                );
              });
            dispatch({
                type: SET_FLIGHT,
                flights: loadedFilterFlights
            });
        }
        catch(err){}
    }
}

