import {createStackNavigator} from 'react-navigation-stack'
import ScanDockExpScreen from '../../screens/QRScan/ScanDockExpScreen'
import ScanDockImpScreen from '../../screens/QRScan/ScanDockImpScreen'
import ScanGateInScreen from '../../screens/QRScan/ScanGateInScreen'
import ScanGateOutScreen from '../../screens/QRScan/ScanGateOutScreen'
import SettingsScreen from '../../screens/Settings/SettingsScreen'
import QRScanScreen from '../../screens/QRScan/QRScanScreen'
import FlightImpsScreen from '../../screens/FlightImps/FlightImpsScreen'
import CategoryEditor from '../../screens/Categories/CategoryEditorScreen'
import screens from '../../constants/screens';
 import navOptions from '../../utils/navOptions';
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
 import headerOptions from '../../utils/stackHeaderOptions';

const ScanNavigator = createStackNavigator({
    [screens.ScanHome]: {
        screen: FlightImpsScreen,
        navigationOptions: headerOptions(),
      },
  [screens.GateIn]: {
    screen: ScanGateInScreen,
    navigationOptions: headerOptions(),
  },
  [screens.GateOut]: {
    screen: ScanGateOutScreen,
    navigationOptions: headerOptions(),
  },
  [screens.DockImp]: {
    screen: ScanDockImpScreen,
    navigationOptions: headerOptions(),
  },
  [screens.DockExp]: {
    screen: ScanDockExpScreen,
    navigationOptions: headerOptions(),
  },
  [screens.Setting]: {
    screen: SettingsScreen,
    navigationOptions: headerOptions(),
  },
  
}, {
  ...navOptions({
    title: 'orders',
    icon: 'inbox',
  }),
});

export default ScanNavigator;