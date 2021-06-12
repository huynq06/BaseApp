import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton'
import ProductItem from '../../components/shop/ProductItem'
import Colors from '../../constants/Colors';
import * as cartAction from '../../store/actions/cart'
import R, { type } from 'ramda';
export const categoriesTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === categoriesTypes.expense;

export const isIncome = type => type === categoriesTypes.income;

const ProductsOverViewScreen = props => {
  const incomeCategories = [
    { name: 'Salary', icon: 'cash' },
    { name: 'Savings', icon: 'coin' },
    { name: 'Deposits', icon: 'castle' },
  ];
  
  const expenseCategories = [
    { name: 'Bills', icon: 'tag' },
    { name: 'Car', icon: 'car' },
    { name: 'Communications', icon: 'phone' },
    { name: 'Eating Out', icon: 'silverware' },
    { name: 'Entertainment', icon: 'phone' },
    { name: 'Food', icon: 'food' },
    { name: 'Gifts', icon: 'gift' },
    { name: 'Health', icon: 'heart-pulse' },
    { name: 'Home', icon: 'home-variant' },
    { name: 'Pets', icon: 'cat' },
    { name: 'Sport', icon: 'dumbbell' },
    { name: 'Taxi', icon: 'taxi' },
  ];
 // const withType = type => category => ({ ...category, type });
 const withType = (type) => {
   return (category) =>{
     return {...category,type}
   }
   
 }
  const allWithType = type => R.map(withType(type));

const defaultCategories = [
  ...allWithType(categoriesTypes.income)(incomeCategories),
  ...allWithType(categoriesTypes.expense)(expenseCategories),
];


  const dispatch = useDispatch();
    const products = useSelector(state => state.products.availableProducts);
    const selectItemHandler = (id, title) => {
          props.navigation.navigate('ProductDetai',{productId:id,productTitle:title})
      };
    return(
        <FlatList
            data= {products}
            keyExtractor={item=>item.id}
            renderItem={itemData => (
                <ProductItem
                    image = {itemData.item.imageUrl}
                    title = {itemData.item.title}
                    price = {itemData.item.price}
                    onSelect = {()=>selectItemHandler(itemData.item.id,itemData.item.title)}
                >
                    <Button 
                        title="View Details"
                        color = {Colors.primary}
                        onPress = {()=>{selectItemHandler(itemData.item.id,itemData.item.title)}}
                        />
                     <Button 
                        title="To Cart"
                        color = {Colors.primary}
                        onPress={()=>dispatch(cartAction.addToCart(itemData.item))}
                     />   
                </ProductItem>
            )}
        />
    )
}
ProductsOverViewScreen["navigationOptions"] = navData => {
    return {
      headerTitle: 'All Products',
      headerRight: ()=>(
        <HeaderButtons 
        HeaderButtonComponent={HeaderButton} 
        >
          <Item title="Cart"    
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} 
          onPress={()=>{navData.navigation.navigate('Cart')}}
          />
         
          </HeaderButtons>
      )
    }
  };
export default ProductsOverViewScreen;