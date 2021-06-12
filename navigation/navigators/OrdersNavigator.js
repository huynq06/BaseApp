import {createStackNavigator} from 'react-navigation-stack'
import OrdersScreen from '../../screens/Orders/OrdersScreen'
import CategoryEditor from '../../screens/Categories/CategoryEditorScreen'
import screens from '../../constants/screens';
 import navOptions from '../../utils/navOptions';
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
 import headerOptions from '../../utils/stackHeaderOptions';

const OrdersNavigator = createStackNavigator({
  [screens.Order]: {
    screen: OrdersScreen,
    navigationOptions: headerOptions(),
  }
  
}, {
  ...navOptions({
    title: 'orders',
    icon: 'inbox',
  }),
});

export default OrdersNavigator;