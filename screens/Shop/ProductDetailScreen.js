import { product } from 'ramda'
import React from 'react'
import { Button } from 'react-native'
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native'
import {useSelector} from 'react-redux'
import colors from '../../constants/Colors'

const ProductDetailScreen = props =>{
    const productId = props.navigation.getParam('productId')
    const productSelected = useSelector(state=>state.products.availableProducts.find(product=>product.id===productId))
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri:productSelected.imageUrl}} />
            <View style={styles.ation} >
                <Button color={colors.primary} title="ADD TO CART" />
            </View>
            <Text style={styles.price}>${productSelected.price}</Text>
            <Text style={styles.description}>{productSelected.description}</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    ation:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10
    },
    price:{
       textAlign:'center',
       fontSize:20,
       color: '#888',
       marginVertical:10,
       fontFamily: 'open-sans-bold'
    },
    description:{
        textAlign:'center',
        marginHorizontal:10,
        fontSize:14,
        fontFamily: 'open-sans'
    }
})
ProductDetailScreen["navigationOptions"] = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle'),
    }

}
export default ProductDetailScreen;