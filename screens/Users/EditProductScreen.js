import React,{useState} from 'react'
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native'
import {useSelector} from 'react-redux'

const EditProductScreen = props =>{
    const prodId = props.navigation.getParam('prodId');
    const editedProduct = useSelector(state=>state.products.userProducts.find(prod=>prod.id===prodId))
    const [title,setTitle] = useState(editedProduct? editedProduct.title : '')  
    const [imgUrl,setImgUrl] = useState(editedProduct? editedProduct.imageUrl : '')  
    const [price,setPrice] = useState(editedProduct? editedProduct.price : '')  
    const [description,setDescription] = useState(editedProduct? editedProduct.description : '')  
    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={()=>{}} />
                </View>
                <View></View>
                <View></View>
                <View></View>
            </View>
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form:{
        margin:20
    },
    formControl:{
       width:'100%'
    },
    label:{

    },
    input:{

    }

})
export default EditProductScreen;