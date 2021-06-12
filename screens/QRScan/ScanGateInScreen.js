import React, { useState, useEffect, useCallback, useReducer,useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,StyleSheet,Text} from 'react-native'
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import FormInput from '../../components/FormInput/'
import CategoriesList from '../../components/CategoriesList/index'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton'
import Input from '../../components/Input/index'
const ScanGateInScreen = props =>{
    const [barcode, setBarcode] =  useState('');
    const[focus,setFocus] = useState(true);
    const inputRef = useRef();
   
  const acresFocus = () => {
      console.log('da chay vao focus')
      inputRef.current.focus();
  };
    const onSubmit = () => {
        console.log('done')
        setBarcode('');
        setTimeout(() => {
            acresFocus();
            }, 100);
       
    }
 
   
     

    return (
        <View style={styles.root}>
        <ScreenWrapper>
            <View>
            <Input
                        isValid
                        placeholder="SCAN BARCODE"
                         value={barcode}
                         onChangeText={setBarcode}
                        containerStyle={styles.root}
                        onSave={onSubmit}
                        // onSetFocus={focus}
                        inputRef = {inputRef}
                        //keyPress={onSubmit}
                        />
          
            </View>
                 
        </ScreenWrapper>
    </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },

})
export default ScanGateInScreen;