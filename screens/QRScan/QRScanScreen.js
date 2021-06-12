import React, { useState, useEffect, useCallback, useReducer,useRef } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,StyleSheet,Text,ToastAndroid} from 'react-native'
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
import { getEnvVars } from "../../constants/UrlApi";
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
  } from "react-native-simple-radio-button";
  import Toast from 'react-native-toast-message'
const { apiUrl } = getEnvVars();

const PROP = [
  {
    value: "In",
    label: "Vào Dock  ",
  },
  {
    value: "Out",
    label: "Ra Dock  ",
  },
];

const QRScanScreen = props =>{
    const [titleText, setTitleText] = useState("Vị Trí : Cổng Vào T1");
    const [barcode, setBarcode] =  useState('');
    const[focus,setFocus] = useState(true);
    const inputRef = useRef();
    const acresFocus = () => {
        inputRef.current.focus();
    };
    const loadConfigs = useCallback(async () => {
        const type = await AsyncStorage.getItem("selected");
        console.log('-----------------'+type);
        if(type==1){
            setTitleText("Vị Trí : Cổng Vào T1");
        }
        else if(type==2)
        {
            setTitleText("Vị Trí : Cổng Vào T2");
        }
        else if(type==3)
        {
            setTitleText("Vị Trí : CỔNG RA");
        }
        else if(type==4)
        {
            setTitleText("Vị Trí : DOCK IMP");
        }
        else if(type==5)
        {
            setTitleText("Vị Trí : DOCK EXP");
        }
        else{
            setTitleText("Vị Trí : Cổng Vào T1");
        }
        
      }, []);
      useEffect(() => {
        const willFocusSub = props.navigation.addListener(
          'willFocus',
          loadConfigs
        );
    
        return () => {
          willFocusSub.remove();
        };
      }, [loadConfigs]);
      useEffect(() => {
        loadConfigs
      }, [loadConfigs]);
      const changeQRcode = (text) => {
        setBarcode(text);
        setTimeout(() => {
          setBarcode('');
            }, 2000);
            Toast.show({
              type:'error',
              text1: 'Hello',
              text2: 'This is some something 👋',
              visibilityTime: 10000,
              autoHide: true,
              topOffset: 60,
              bottomOffset: 80,
            })
        setTimeout(() => {
            acresFocus();
            }, 100);
      }
    return(
        <View style={styles.root}>
        <ScreenWrapper>
            <View style={styles.rowheader}>
            <Text
            style={{
                alignSelf: "center",
                alignItems: "center",
                color: "red",
            }}
            >
                {titleText}
            </Text>
      </View>
            <View>
            <Input
                        isValid
                        placeholder="SCAN BARCODE"
                         value={barcode}
                         onChangeText={(text) => changeQRcode(text)}
                        containerStyle={styles.root}
                       // onSave={onSubmit}
                        inputRef = {inputRef}
                      
                        />
          
            </View>
                 
        </ScreenWrapper>
    </View>
    );
}
const styles = StyleSheet.create({
  root:{
    flex:1
},
    form: {
        margin: 20
      },
      centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
})
export default QRScanScreen;
