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
import FLightItem from '../../components/FlightItem'
import Subtitle from '../../components/Subtitle/index'
import moment from 'moment';
const FlightImpsScreen = props =>{
  const [isVisibleModalFlightCode,setVisibleModalFlightCode] = useState(false);
  const [isVisibleModalFlightNo,setVisibleModalFlightNo] = useState(false);
  const [isSelectedCode,setSelectedCode] = useState(false);
  const [isSelectedFlightNo,setSelectedFlightNo] = useState(false);
  const [listFligtNumbers,setListFlightNumber] = useState([])
  const [flightCode,setFlightCode] = useState('');
  const [flightNo,setFlightNo] = useState('');
  const [dateForFiltering,setDateForFiltering] = useState(new Date());
  const flights = useSelector(state => state.flights.flights);
  const filterFlights = useSelector(state => state.flights.filterFlights);
  const filterFlightsCode = useSelector(state => {
    const listCode = [];
    for(const index in state.flights.filterFlights){
     
       const flight = state.flights.filterFlights[index];
        if(!listCode.some(c=>c.name==flight.code)){
          var name = flight.code;
          var id = index;
           listCode.push({id,name});
        }
    }
    return listCode;
  });

  const dispatch = useDispatch();
  const onToggleModalFlightCode = () =>{
    
    loadfilterFlights().then(() => {
    });
    setVisibleModalFlightCode(prev => !prev);
  }   
  const onToggleModalFlightNo = () =>{
    setVisibleModalFlightNo(prev => !prev);
  } 
 

  const loadFlightsNumber = useCallback(async (code) => {
    const listFlightNumber = [];
    for(const index in filterFlights){
    
      if(filterFlights[index].code === code){
        const id = index;
        const name = filterFlights[index].flightNo
          listFlightNumber.push({id,name})
      }
  }
  setListFlightNumber(listFlightNumber);
  }, [filterFlights]);
  const loadfilterFlights = useCallback(async () => {
    try {
      await dispatch(flightsActions.fetchFilterFlight());
    } catch (err) {
      
    }
  
  }, [dispatch]);
  const loadFlights = useCallback(async (code,number,date) => {
    try {
      await dispatch(flightsActions.fetchFlights(code,number,date));
    } catch (err) {
      
    }
  
  }, [dispatch]);
  const onChangeFlighCode = (index) => {
    var flight = filterFlightsCode.find(c=>c.id==index);
    const code = flight.name;
    setFlightCode(code);
    setSelectedCode(true);
    setFlightNo('');
    onToggleModalFlightCode();
    loadFlightsNumber(code);
    setTimeout(() => {
      loadFlights(code,'',moment(dateForFiltering).format('DD/MM/YYYY'))
        }, 100);
  
     } 
     const onChangeFlighNumber = (index) => {
      onToggleModalFlightNo();
      var flight = listFligtNumbers.find(c=>c.id==index);
      const number = flight.name;
      setFlightNo(number);
      setSelectedFlightNo(true);
      loadFlights(flightCode,number,moment(dateForFiltering).format('DD/MM/YYYY'))
    }    
    const selectItemHandler = (id, title) => {
    
      props.navigation.navigate('FlightDetail', {
        flightID: id,
        flightTitle: title
      });
    };
  useEffect(() => {
 
    loadFlights(flightCode,flightNo,moment(dateForFiltering).format('DD/MM/YYYY'))
  }, [flightCode,flightNo,dateForFiltering]);

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
                       <DateFilter
          dateForFiltering={dateForFiltering}
          setDateForFiltering={setDateForFiltering}
        />
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
    keyExtractor={item => item.id}
    renderItem={itemData => (
      <FLightItem
      id={itemData.item.id}
      entity = {itemData.item}
      onPress={() => {selectItemHandler(itemData.item.id, itemData.item.code+itemData.item.flightNo)}}
    
    />
    )}
    ItemSeparatorComponent={Separator}
  />
       
        </ScreenWrapper>
        <CategoriesList
      isModal
      isVisible={isVisibleModalFlightCode}
      categories={filterFlightsCode}
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