import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,StyleSheet,ScrollView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector} from 'react-redux'

const ScanHomeScreen = props =>{
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userSetting');
            console.log(userData);
            if (!userData) {
                props.navigation.navigate('GateIn')
                return;
              }
            props.navigation.navigate(userData)
            
          };
      
          tryLogin();
        /* const userData =  AsyncStorage.getItem('userSetting');
        console.log('da chay vao day' + userData)
        if(!userData){
            props.navigation.navigate('GateIn')
        }
        else{
            const inputCheck = userData.toString();
             if(inputCheck==='DOCK IMP'){
                props.navigation.navigate('DockImp')
            }
            else if(inputCheck==='DOCK EXP'){
                props.navigation.navigate('DockExp')
            } 
            else{
                props.navigation.navigate('GateOut')
            }

        } */
       
         
      }, []);
    return (
       <View>
           <Text>Scan Home Screen</Text>
       </View>
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
export default ScanHomeScreen;