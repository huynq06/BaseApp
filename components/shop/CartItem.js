import React from 'react'
import {View,Text,Platform,StyleSheet,TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 


const CartItem = props =>{
    return (
        <View style={styles.container}>
            <View style={styles.data}>
            <Text style={styles.quantity}>{props.quantity} </Text>
            <Text style={styles.mainText}>{props.title}</Text>
            </View>
            <View style={styles.data}>
            <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
            {props.deletable && (
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Ionicons 
                          name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                          size={23}
                          color="red"
                    />
                </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    data:{
        flexDirection:'row',
        alignItems:'center'
    },
    quantity:{
        fontFamily:'open-sans',
        fontSize:16,
        color:'#888'
    },
    mainText: {
      fontFamily: 'open-sans-bold',
      fontSize: 16
    },
    deleteButton:{
        marginLeft:20
    }
})

export default CartItem;