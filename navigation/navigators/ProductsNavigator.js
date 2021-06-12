import {createStackNavigator} from 'react-navigation-stack'
import Products from '../../screens/Shop/ProductsOverViewScreen'
import ProductDetail from '../../screens/Shop/ProductDetailScreen'
import screens from '../../constants/screens';
import headerOptions from '../../utils/stackHeaderOptions';
import CartScreen from '../../screens/Shop/CartScreen'
const ProductsNavigator = createStackNavigator({
  [screens.Products]: {
    screen: Products,
    navigationOptions: headerOptions(),
  },
  [screens.PrductDetail]:{
    screen:ProductDetail,
   // navigationOptions: headerOptions(),
  },
  [screens.Cart]:{
    screen:CartScreen,
  }
});

export default ProductsNavigator;
