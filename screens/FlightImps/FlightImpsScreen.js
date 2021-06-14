import React,{useCallback, useState,useEffect} from 'react'
import {View,StyleSheet,Animated,FlatList,Text} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import Separator from '../../components/Separator/index'
import * as flightsActions from '../../store/actions/flights';
import FormInput from '../../components/FormInput/'
import CategoriesList from '../../components/CategoriesList/index'
import * as dimensions from '../../styles/dimensions'
import * as scalingUtils from '../../styles/scalingUtils'
import DateFilter from '../../components/DateFilter/index';

import Subtitle from '../../components/Subtitle/index'
import moment from 'moment';
const FlightImpsScreen = props =>{

  const [isVisibleModalFlightCode,setVisibleModalFlightCode] = useState(false);
  const [isVisibleModalFlightNo,setVisibleModalFlightNo] = useState(false);
  const [dateForFiltering,setDateForFiltering] = useState(new Date());

console.log(dateForFiltering);

  const [isSelectedFlightNo,setSelectedFlightNo] = useState(false);
  const [isSelectedCode,setSelectedCode] = useState(false);
  const [listFligtNumbers,setListFlightNumber] = useState([])

    const [flightCode,setFlightCode] = useState('');
    const [flightNo,setFlightNo] = useState('CHỌN SỐ HIỆU');
    const filterFlights = useSelector(state => state.flights.filterFlights);
    const flights = useSelector(state => state.flights.flights);

    const loadfilterFlights = useCallback(async () => {
    
      try {
        await dispatch(flightsActions.fetchFilterFlight());
      } catch (err) {
        console.log(err.message);
      }
    
    }, [dispatch]);
   
  
    const getFlightCodes = () =>{
   
         const listCode = [];
    
         for(const index in filterFlights){
            const flight = filterFlights[index];
             if(!listCode.some(c=>c.name==flight.code)){
               var name = flight.code;
               var id = index;
                listCode.push({id,name});
             }
         }
         return listCode;
     }
 
     const flightCodes = getFlightCodes();
    
      useEffect(() => {
       
        const flightsNumber = getLightsNumber();
        setListFlightNumber(flightsNumber);
   
      }, [flightCode]);
     
     const onChangeFlighCode = (index) => {
      
     var flight = flightCodes.find(c=>c.id==index);
     const code = flight.name;
     setFlightCode(code);
   
     setSelectedCode(true);
     
    
        onToggleModalFlightCode();
      
      } 
      useEffect(() => {
        dispatch(flightsActions.fetchFlights(flightCode,flightNo,moment(dateForFiltering).format('DD/MM/YYYY')));
   
      }, [dispatch,flightCode,flightNo,dateForFiltering]);

   

      useEffect(() => {
     
   
      },[dateForFiltering]);
      const onChangeFlighNumber = (index) => {
        onToggleModalFlightNo();
        var flight = listFligtNumbers.find(c=>c.id==index);
        const number = flight.name;
        setFlightNo(number);
        setSelectedFlightNo(true);
      } 
     const onToggleModalFlightNo = () =>{
        setVisibleModalFlightNo(prev => !prev);
      } 
      const onToggleCalendar = () =>{
        toggleCalendar(prev=>!prev);
      }
      const onToggleModalFlightCode = () =>{
        loadfilterFlights();
        setVisibleModalFlightCode(prev => !prev);
      }   
    const getLightsNumber = () =>{
        const listFlightNumber = [];
        if(flightCode===''){
            return listFlightNumber;
        }
        for(const index in filterFlights){
            if(filterFlights[index].code === flightCode){
              const id = index;
              const name = filterFlights[index].flightNo
                listFlightNumber.push({id,name})
            }
        }
        return listFlightNumber;
    }
   
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(flightsActions.fetchFilterFlight());
      }, [dispatch]);
    
    return (
        <View style={styles.root}>
        <ScreenWrapper>
            <View style ={styles.header} >
                
            <FormInput
                      label = "CHUYẾN BAY   "
                      style={styles.selector}
                      containerStyle={styles.selectorContainer}
                      isSelected={isSelectedCode}
                      value={flightCode}
                  
                      onPress={onToggleModalFlightCode}
            />
             <FormInput
                      label = "SỐ HIỆU            "
                      style={styles.selector}
                      containerStyle={styles.selectorContainer}
                      isSelected={isSelectedFlightNo}
                      value={flightNo}
                      // icon={categoryIcon}
                      onPress={onToggleModalFlightNo}
                    />
            {/* <DateFilter
          dateForFiltering={dateForFiltering}
          setDateForFiltering={setDateForFiltering}
        /> */}
            </View>
            <Subtitle
          style={styles.subtitle}
          withLittlePadding
          leftText="Flights"
          date={dateForFiltering}
        />
        <Separator withShadow />
            <View>
         
       
            </View>
            <Separator withShadow />   
            <FlatList
    
      data={flights}
      keyExtractor={item => item.ScheDate}
      renderItem={itemData => (
        <View>
          <Text>{itemData.item.code}</Text>
          <Text>{itemData.item.ScheDate}</Text>
        </View>
      )}
    />
       
        </ScreenWrapper>
    <CategoriesList
      isModal
      isVisible={isVisibleModalFlightCode}
      categories={flightCodes}
      onSelect={onChangeFlighCode}
      onToggleModal={onToggleModalFlightCode}
    />    
    <CategoriesList
      isModal
      isVisible={isVisibleModalFlightNo}
      categories={listFligtNumbers}
      onSelect={onChangeFlighNumber}
      onToggleModal={onToggleModalFlightNo}
    />    

    </View>
    )
}
const { indent, verticalIndent } = dimensions;
const styles = StyleSheet.create({
    root: {
        flex: 1,
      },
      header:{
          flexDirection:'row',
          justifyContent:'space-around'

      },
      selector: {
        alignItems: 'center',
        borderRadius: 4,
      },
    
     
    
      selectorContainer: {
        marginBottom: dimensions.verticalIndent,
      },
      subtitle: {
        marginHorizontal: dimensions.indent,
        paddingTop: dimensions.indent,
      },
      scrollViewContent: {
        paddingTop: Platform.OS !== 'ios' ? dimensions.headerMaxHeight : 0,
      },
      emptyList: {
        paddingTop: dimensions.indent * 1.5,
      },
      paddingBottom: {
        paddingBottom: scalingUtils.verticalScale(Platform.OS === 'ios' ? 80 : 92),
      },
})
export default FlightImpsScreen;