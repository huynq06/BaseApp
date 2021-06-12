import React from 'react'
import {View,Text,FlatList} from 'react-native'
import {useSelector} from 'react-redux'
import OrderItem from '../../components/shop/OrderItem'

const OrdersScreen = props =>{
    const orders = useSelector(state=>state.orders.orders);
    return(
        <FlatList 
            data={orders}
            keyExtractor={item=>item.id}
            renderItem={
                itemData => (
                <OrderItem 
                items ={itemData.item.items}
                totalAmount={itemData.item.totalAmount} 
                date={itemData.item.readableDate} />
                )}
        />
    )
}

export default OrdersScreen;