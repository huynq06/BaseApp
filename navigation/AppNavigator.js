import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'
// import {Platform} from 'react-native'
// import {createDrawerNavigator} from 'react-navigation-drawer'
// import ProductsOverViewScreen from '../screens/Shop/ProductsOverViewScreen'
// import CategoriesScreen from '../screens/Categories/CategoriesScreen'
// import { Ionicons } from '@expo/vector-icons'
import NavigatorDrawer from './NavigatorDrawer'

// const ProductNavigator = createStackNavigator({
//     ProductsOverView : ProductsOverViewScreen
// },{
//     navigationOptions: {
//         drawerIcon : drawerConfig => (
//             <Ionicons 
//               name = {Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//               size = {23}
//               color = {drawerConfig.tintColor}
//             />
//         )
//     }
// })
// const CategoryNavigator = createStackNavigator({
//     Categories: CategoriesScreen 
// })

// const AppNavigator = createDrawerNavigator({
//     Products : ProductNavigator,
//     Category : CategoryNavigator
// })
const routes = createSwitchNavigator({
//   Startup: StartupScreen,
//   Auth: AuthNavigator,
  Main: NavigatorDrawer
})
export default createAppContainer(routes);
