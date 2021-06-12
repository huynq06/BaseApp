import {createStackNavigator} from 'react-navigation-stack'
import Categories from '../../screens/Categories/CategoriesScreen'
import CategoryEditor from '../../screens/Categories/CategoryEditorScreen'
import screens from '../../constants/screens';
 import navOptions from '../../utils/navOptions';
// import AccountsRoutes from '../routes/AccountsRoutes';
// import CategoriesRoutes from '../routes/CategoriesRoutes';
 import headerOptions from '../../utils/stackHeaderOptions';

const CategoriesNavigator = createStackNavigator({
  [screens.Categories]: {
    screen: Categories,
    navigationOptions: headerOptions(),
  },
  [screens.CategoryEditor]:{
    screen: CategoryEditor,
  }
  
}, {
  ...navOptions({
    title: 'Categories',
    icon: 'inbox',
  }),
});

export default CategoriesNavigator;
