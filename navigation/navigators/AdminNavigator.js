import {createStackNavigator} from 'react-navigation-stack'
import UserProductsScreen from '../../screens/Users/UserProductsScreen'
import EditProductScreen from '../../screens/Users/EditProductScreen'
import screens from '../../constants/screens';
 import navOptions from '../../utils/navOptions';
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
 import headerOptions from '../../utils/stackHeaderOptions';

const AdminNavigator = createStackNavigator({
  [screens.UserProduct]: {
    screen: UserProductsScreen,
    navigationOptions: headerOptions(),
  },
  [screens.EditProduct]:{
    screen : EditProductScreen
  }
  
}, {
  ...navOptions({
    title: 'Admin',
    icon: 'star',
  }),
});

export default AdminNavigator;