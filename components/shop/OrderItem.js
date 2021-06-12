import React,{useState} from 'react'
import { Button } from 'react-native'
import {View,Text,StyleSheet} from 'react-native'
import Cart from '../UI/Card'
import CartItem from './CartItem'
const OrderItem = props =>{
    const [showDetail,setShowDetail] = useState(false);
    return(
        <Cart style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{props.totalAmount}</Text>
                <Text>{props.date}</Text>
            </View>
          
                <Button 
                title={showDetail? 'Hide Details' : 'Show Details'} 
                onPress={()=>{setShowDetail(prev=>!prev)}} 
                />
            {showDetail && (
                <View style={styles.detail} >
                    {props.items.map(cartItem=>(
                          <CartItem 
                          key={cartItem.productId}
                          quantity={cartItem.quantity}
                          amount={cartItem.sum}
                          title={cartItem.productTitle}
                          /> 
                    )
                      
                    )}
                </View>
            )}    
           
        </Cart>
    )
}

const styles = StyleSheet.create({
    orderItem:{
        margin:20,
        padding:20,
        alignItems:'center'
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        marginBottom:15
    },
    totalAmount:{
        fontFamily:'open-sans-bold',
        fontSize:16
    },
    detail:{
        width:'100%'
    }
})

export default OrderItem;