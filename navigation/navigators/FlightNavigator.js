import {createStackNavigator} from 'react-navigation-stack'
import Flights from '../../screens/FlightImps/FlightImpsScreen'
import FlightDetail from '../../screens/FlightImps/FLightDetailImpScreen'
import screens from '../../constants/screens';
import headerOptions from '../../utils/stackHeaderOptions';
import navOptions from '../../utils/navOptions';
const ProductsNavigator = createStackNavigator({
  [screens.FLights]: {
    screen: Flights,
    navigationOptions: headerOptions(),
  },
  [screens.FlightDetail]:{
    screen:FlightDetail,
  }
}, {
    ...navOptions({
      title: 'Flight',
      icon: 'star',
    }),
  });

export default ProductsNavigator;
