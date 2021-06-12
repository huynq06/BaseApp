import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,LogBox  } from 'react-native';
import AppLoading from 'expo-app-loading'
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import * as Font from 'expo-font'
import ReduxThunk from 'redux-thunk';
import AppNavigator from './navigation/AppNavigator'
import productsReducer from './store/reducers/products'
import categoriesReducer from './store/reducers/categories'
import cartsReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders'
import Toast from 'react-native-toast-message'
import filterFLight from './store/reducers/flights'
const rootReducer = combineReducers({
  products : productsReducer,
  categories: categoriesReducer,
  carts: cartsReducer,
  orders: ordersReducer,
  flights: filterFLight
});
LogBox.ignoreLogs(['Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).']);
const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  

const[isLoaded,setIsLoaded] = useState(false);
if(!isLoaded){
  return <AppLoading startAsync={fetchFonts} onFinish={()=>{setIsLoaded(true)}} onError={console.warn} />
} 
  return (
    <Provider store={store}>
        <AppNavigator />
        <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
