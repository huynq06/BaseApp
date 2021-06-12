import screens from '../../constants/screens';
import ProductsBottomNavigator from '../navigators/ProductsBottomNavigator';
import CategoriesNavigator from '../navigators/CategoriesNavigator'
import OrdersNavigator from '../navigators/OrdersNavigator'
import AdminNavigator from '../navigators/AdminNavigator'
import ScanNavigator from '../navigators/ScanNavigator'
import SettingsNavigator from '../navigators/SettingsNavigator'
const Routes = {
  [screens.ScanRoot]:{
    screen:ScanNavigator
  }
  ,
  [screens.ProductsRoot]: {
    screen: ProductsBottomNavigator,
  },
//   [screens.AccountsRoot]: {
//     screen: AccountsNavigator,
//   },
[screens.CategoriesRoot]: {
    screen: CategoriesNavigator,
  },
  [screens.OrderRoot]:{
    screen:OrdersNavigator
  },
  [screens.AdminRoot]:{
    screen: AdminNavigator
  },
  [screens.SettingRoot]:{
    screen: SettingsNavigator
  }
//   [screens.TrendsRoot]: {
//     screen: TrendsNavigator,
//   },
//   [screens.FavouritesRoot]: {
//     screen: FavouritesNavigator,
//   },
//   [screens.SettingsRoot]: {
//     screen: SettingsNavigator,
//   },
};

export default Routes;
