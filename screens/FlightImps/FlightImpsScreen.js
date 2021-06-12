import React,{useCallback, useState,useEffect} from 'react'
import {View,StyleSheet,Animated,FlatList} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import Separator from '../../components/Separator/index'
import * as flightsActions from '../../store/actions/flights';
import FormInput from '../../components/FormInput/'
import CategoriesList from '../../components/CategoriesList/index'
import * as dimensions from '../../styles/dimensions'
import * as scalingUtils from '../../styles/scalingUtils'
import DateFilter from '../../components/DateFilter/index';
import TransactionItem from '../../components/TransactionItem/index'
import Subtitle from '../../components/Subtitle/index'
import moment from 'moment';
import EmptyList from '../../components/EmptyList/index'
const FlightImpsScreen = props =>{
  const[isScrollEnabled,setScrollEnabled] = useState(true)
  const [isVisibleModalFlightCode,setVisibleModalFlightCode] = useState(false);
  const [isVisibleModalFlightNo,setVisibleModalFlightNo] = useState(false);
  const [dateForFiltering,setDateForFiltering] = useState(new Date());
  const HEADER_MAX_HEIGHT = dimensions.headerMaxHeight;
  const HEADER_MIN_HEIGHT = dimensions.headerMinHeight;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const _renderItem = ({item}) => {
    return (
     <TransactionItem
       id={item.id}
       entity={item}
      // onDelete={() => onDelete(param)}
    //   onAddToFavourite={() => onAddToFavourite(param)}
     //  onDeleteFromFavourites={() => onDeleteFromFavourites(param)}
       isFavourite={item.isFavourite}
    //   onPress={() => onGoToDetail(param)}
       onAllowScroll={onAllowScroll}
     />
   );
}
const  onAllowScroll = isScrollEnabled =>{
  setScrollEnabled(isScrollEnabled)
}
  const [date, setDate] = useState(new Date())
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [isSelectedFlightNo,setSelectedFlightNo] = useState(false);
  const [isSelectedCode,setSelectedCode] = useState(false);
  const [listFligtNumbers,setListFlightNumber] = useState([])
  const[scrollY,setScrollY] = useState(new Animated.Value(Platform.OS === 'ios' ? -dimensions.headerMaxHeight : 0))
  const [isVisibleCalendar,toggleCalendar] = useState(false)
    // const categoryIcon = {
    //     name: 'home-plus',
    //     color: colors.darkGrey
    //   }
    const [flightCode,setFlightCode] = useState('');
    const [flightNo,setFlightNo] = useState('CHỌN SỐ HIỆU');
    const filterFlights = useSelector(state => state.flights.filterFlights);
    const flights = useSelector(state => state.flights.flights);
    console.log(flights);
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
   
      }, [dispatch,flightNo,dateForFiltering]);
      useEffect(() => {
        console.log(dateForFiltering)
   
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
                      // icon={categoryIcon}
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
            <AnimatedFlatList
         onScroll={Animated.event(
           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
           { useNativeDriver: true },
         )}
        scrollEventThrottle={1}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={7}
        contentInset={{ top: HEADER_MAX_HEIGHT }}
        contentOffset={{ y: -HEADER_MAX_HEIGHT }}
        scrollEnabled={isScrollEnabled}
       data={flights}
       renderItem={_renderItem}
    //  ref={setListRef}
        contentContainerStyle={styles.scrollViewContent}
       keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<EmptyList containerStyle={styles.emptyList} />}
        ListFooterComponent={
          1 === 1 ? <View style={styles.paddingBottom}><Separator /></View> : null
        }
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