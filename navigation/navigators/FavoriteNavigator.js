import {createStackNavigator} from 'react-navigation-stack'
import Favorite from '../../screens/Shop/ProductFavoriteScreen'
import screens from '../../constants/screens';
import headerOptions from '../../utils/stackHeaderOptions';
 
const FavoriteNavigator = createStackNavigator({
  [screens.Favorite]: {
    screen: Favorite,
    navigationOptions: headerOptions(),
  },
});

export default FavoriteNavigator;
