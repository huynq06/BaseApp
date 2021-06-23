import React,{useCallback, useState,useEffect} from 'react'
import {View,StyleSheet,Animated,FlatList,Text,ActivityIndicator} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import * as lagisAction from '../../store/actions/lagis'
import LagiStatus from '../../components/LagiStatus'
import LagiItem from '../../components/LagiItem'
import Separator from '../../components/Separator/index'
import {SearchBar} from 'react-native-elements'
import colors from '../../styles/colors'
import { ColorPropType } from 'react-native'
const FLightDetailImpScreen = props =>{
    const [searchText,setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [error, setError] = useState();

    const flightID = props.navigation.getParam('flightID')

  
    const lagis = useSelector(state=>state.lagis.lagis)
    const dispatch = useDispatch()
    const loadFlightDetail = useCallback(async (id,text) => {
      setError(null);
        try {
          await dispatch(lagisAction.fetchLagi(id,text));
        } catch (err) {
        }
      
      }, [dispatch])
   
      useEffect(() => {
     
        setIsLoading(true);
        loadFlightDetail(flightID,searchText).then(()=>{
          setIsLoading(false);
        });
       
       
      }, [dispatch,loadFlightDetail]);
     
      const onChangeTextHandle = (text) =>{
        loadFlightDetail(flightID,text);
        setSearchText(text);
       /*  if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource
          // Update FilteredDataSource
          const newData = lagis.filter(
            function (item) {
              const itemData = item.mawb
                ? item.mawb.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearchText(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(lagis);
          setSearchText(text);
        } */
       
        
      }  
      if (isLoading) {
        return (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={colors.blue} />
          </View>
        );
      }  
    return (
       <View style={styles.root}>
             <SearchBar        
              inputStyle={{backgroundColor: '#fff', borderColor:'#fff'}}
              containerStyle={{backgroundColor: 'white', borderColor:'#fff'}}

              placeholder={'Type Here'}
                value={searchText} 
           
      lightTheme        
      round         
      onChangeText={text => onChangeTextHandle(text)}
      autoCorrect={false}             
    />  
           <FlatList
                data={lagis}
                keyExtractor={item=>item.id}
                renderItem={itemData=>(
                    <LagiItem
                    id={itemData.item.id}
                    entity = {itemData.item}
                    onPress={() => {}}
                  
                  />
                )}
                ItemSeparatorComponent={Separator}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    form:{
        margin:20
    },
    formControl:{
       width:'100%'
    },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
,
    label:{

    },
    input:{

    }

})
FLightDetailImpScreen["navigationOptions"] = navData => {
    return {
        headerTitle: navData.navigation.getParam('flightTitle'),
    }

}
export default FLightDetailImpScreen;