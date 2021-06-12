import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as orderActions from '../../store/actions/orders'
const CartScreen = props =>{
    const cartTotalAmount = useSelector(state=>state.carts.totalAmount)
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>{
         const transformedCartItems = [];
         for(const key in state.carts.items){
             transformedCartItems.push({
                productId: key,
                productTitle: state.carts.items[key].productTitle,
                productPrice: state.carts.items[key].productPrice,
                quantity: state.carts.items[key].quantity,
                sum: state.carts.items[key].sum
             })
         }
         return transformedCartItems;
    });
 
    return(
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                Total:{' '}
                 <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button
          color={Colors.accent}
          title="Order Now"
          disabled={cartItems.length === 0}
          onPress={()=>{dispatch(orderActions.addOrder(cartItems,cartTotalAmount))}}
        />
            </View>
            <FlatList data={cartItems}
                keyExtractor={item=>item.productId}
                renderItem={itemData =>(
                    <CartItem quantity={itemData.item.quantity}
                        amount={itemData.item.sum}
                        title ={itemData.item.productTitle}
                        deletable
                        onRemove={()=>{
                            dispatch(cartActions.removeFromCart(itemData.item.productId))
                        }}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        margin:20
    },
    summary:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius: 10,
        backgroundColor: 'white',
        padding:10,
        marginBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    summaryText:{
        fontFamily:'open-sans-bold',
        fontSize:18
    },
    amount:{
        color:'red'
    }
})

export default CartScreen;