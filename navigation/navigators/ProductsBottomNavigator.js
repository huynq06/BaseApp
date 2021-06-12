import {createStackNavigator} from 'react-navigation-stack'
import Products from '../../screens/Shop/ProductsOverViewScreen'
import screens from '../../constants/screens';
import headerOptions from '../../utils/stackHeaderOptions';
 import navOptions from '../../utils/navOptions';
 import {createBottomTabNavigator} from 'react-navigation-tabs'
 import Favorite from '../../screens/Shop/ProductFavoriteScreen'
 import ProductsNavigator from './ProductsNavigator'
 import FavoriteNavigator from './FavoriteNavigator'
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const ProductsBottomNavigator = createBottomTabNavigator({
  [screens.ProductsNavigator]: {
    screen: ProductsNavigator,
  //  navigationOptions: headerOptions(),
  },
  [screens.FavoriteNavigator]:{
    screen: FavoriteNavigator,
   // navigationOptions:headerOptions(),
  }
}, {
    ...navOptions({
      title: 'Home',
      icon: 'home',
    }),
  });

export default ProductsBottomNavigator;
