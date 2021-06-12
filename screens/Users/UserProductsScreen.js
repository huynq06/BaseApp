import { prop } from 'ramda'
import React from 'react'
import {View,Button,FlatList,StyleSheet} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import Colors from '../../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton'
import   * as productAction from '../../store/actions/products'
const UserProductsScreen = props =>{
    const products = useSelector(state=>state.products.userProducts)
  const dispatch = useDispatch();
  const editProductHandler = id =>{
      props.navigation.navigate('EditProduct',{prodID:id})
  }
    return(
        <FlatList
            data= {products}
            keyExtractor={item=>item.id}
            renderItem={itemData => (
                <ProductItem
                    image = {itemData.item.imageUrl}
                    title = {itemData.item.title}
                    price = {itemData.item.price}
                    onSelect = {()=>{}}
                >
                    <Button 
                        title="Edit"
                        color = {Colors.primary}
                        onPress = {()=>{editProductHandler(itemData.item.id)}}
                        />
                     <Button 
                        title="Delete"
                        color = {Colors.primary}
                        onPress={()=>{dispatch(productAction.deleteProduct(itemData.item.id))}}
                     />   
                </ProductItem>
            )}
        />
    )
}

UserProductsScreen["navigationOptions"] = navData => {
    return {
      headerTitle: 'Your Products',
      headerRight: ()=>(
        <HeaderButtons 
        HeaderButtonComponent={HeaderButton} 
        >
          <Item title="Add"    
          iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'} 
          onPress={()=>{navData.navigation.navigate('EditProduct')}}
          />
         
          </HeaderButtons>
      )
    }
  };

export default UserProductsScreen;