import React from 'react';
import  NavigationButton  from '../components/NavigationButton/index';
import screens from '../constants/screens';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
const headerOptions = defaultOptions => ({ navigation }) => {
  const isInitRoute = navigation.state.key === 'Init';

 /*  return  {
    headerLeft: ()=>(<NavigationButton
      iconName="bars"
      onPress={() => navigation.toggleDrawer()}
    />)
   ,
  }  */
  return  {
    headerLeft: ()=>(  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>)
   ,
  } 
};

export default headerOptions;
