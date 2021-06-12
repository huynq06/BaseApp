import {createStackNavigator} from 'react-navigation-stack'
import SettingsScreen from '../../screens/Settings/SettingsScreen'
import CategoryEditor from '../../screens/Categories/CategoryEditorScreen'
import screens from '../../constants/screens';
 import navOptions from '../../utils/navOptions';
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
 import headerOptions from '../../utils/stackHeaderOptions';

const OrdersNavigator = createStackNavigator({
  [screens.Setting]: {
    screen: SettingsScreen,
    navigationOptions: headerOptions(),
  }
  
}, {
  ...navOptions({
    title: 'Setting',
    icon: 'inbox',
  }),
});

export default OrdersNavigator;