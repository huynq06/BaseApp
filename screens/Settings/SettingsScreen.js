import React, { useState, useEffect, useCallback, useReducer } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,StyleSheet,Text,TextInput,Button,Alert,} from 'react-native'
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import FormInput from '../../components/FormInput/'
import CategoriesList from '../../components/CategoriesList/index'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton'
import { getEnvVars } from "../../constants/UrlApi";
const { apiUrl } = getEnvVars();
const SettingsScreen = props =>{
    const [isVisibleModal,setVisibleModal] = useState(false);
    const [isSelectedCategory,setSelectedCategory] = useState(false);
    const [category,setCategory] = useState('CHỌN VỊ TRÍ');
    const [type, setType] =  useState(1);
    const [selectedValue, setSelectedValue] = useState("");
    const [APILink, setAPILink] = useState("");
    const [firstLoad, setfirstLoad] = useState(true);
    const categoryIcon = {
        name: 'home-plus',
        color: colors.darkGrey
      }
      const _storeDataSelected = async (value) => {
        try {
          await AsyncStorage.setItem("selected", value);
        } catch (error) {
          await AsyncStorage.setItem("selected", 1);
        }
      };
      const _retrieveDataSelected = async () => {
        try {
          await AsyncStorage.getItem("selected").then((value) => {
            if (value !== null) {
              setCategory(value);
            } else {
              setCategory("CHỌN VỊ TRÍ");
            }
          });
        } catch (error) {
          setSelectedValue("CHỌN VỊ TRÍ");
        }
      };
      const _storeDataApi = async (value) => {
        try {
          await AsyncStorage.setItem("url", value);
        } catch (error) {
          await AsyncStorage.setItem("url", apiUrl);
        }
      };
      const _retrieveDataApi = async () => {
        try {
          await AsyncStorage.getItem("url").then((value) => {
            if (value !== null) {
              setAPILink(value);
            } else {
              setAPILink(apiUrl);
            }
          });
        } catch (error) {
          setAPILink(apiUrl);
        }
      };
    const onToggleModal = () =>{
        setVisibleModal(prev => !prev);
      }
      const ResetConfig = () => {
        setAPILink(apiUrl);
        _storeDataSelected(1);
        _storeDataApi(APILink);
        global.configAPI = APILink;
        global.configddl = "GATEIN_T1";
        setSelectedValue("");
      };
      const ConfigOK = () => {
        _storeDataSelected(type);
        _storeDataApi(APILink);
        console.log(type);
        console.log(APILink);
        global.configddl = selectedValue;
        global.configAPI = APILink;
        Alert.alert(
          //title
          "",
          //body
          "Cấu hình đã được lưu",
          [
            {
              text: "OK,Continue",
              onPress: () => console.log("Yes Pressed"),
            },
            // {
            //   text: "No",
            //   onPress: () => console.log("No Pressed"),
            //   style: "cancel",
            // },
          ],
          { cancelable: false }
          //clicking out side of alert will not cancel
        );
      };
    
      const onChangeCategory = (category) => {
        let catName ='';
        onToggleModal();
        if(category==='1'){
          catName = 'CỔNG VÀO T1'
        }
        else if(category==='2'){
          catName = 'CỔNG VÀO T2'
        }
        else if(category==='3'){
            catName = 'CỔNG RA'
          }
          else if(category==='4'){
            catName = 'DOCK IMP'
          }
        else {
          catName = 'DOCK EXP'
        }
     
        setType(category);
        setCategory(catName);
       setSelectedCategory(true);
      }
      const submitHandler = useCallback(async () => {
       AsyncStorage.setItem('userSetting',category)
       props.navigation.navigate(category)
      }, [category]);
      useEffect(() => {
        if (firstLoad) {
          _retrieveDataApi();
          _retrieveDataSelected();
          setfirstLoad(false);
        }
      }, []);
    return (
        <View style={styles.root}>
        <ScreenWrapper>
            <View>
                
            <FormInput
                      label = "VỊ TRÍ"
                      style={styles.selector}
                      containerStyle={styles.selectorContainer}
                      isSelected={isSelectedCategory}
                      value={category}
                      icon={categoryIcon}
                      onPress={onToggleModal}
                    />
            </View>
            <View style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 10 }}>
               <Text style={{ color: "#085394" }}>API Link</Text>
           </View> 
           <View
        style={{
          width: "100%",
          paddingLeft: 20,
        }}
      >
        <TextInput
          onChangeText={setAPILink}
          value={APILink}
          defaultValue={APILink}
          style={[styles.input, { paddingLeft: 10 }]}
        />
      </View>
      <View style={styles.row}>
        <View style={{ width: "50%" }}>
          <View style={{ alignItems: "center", width: "100%" }}>
            <View style={{ width: "70%" }}>
              <Button title="OK" onPress={ConfigOK} />
            </View>
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <View style={{ alignItems: "center", width: "100%" }}>
            <View style={{ width: "70%" }}>
              <Button title="Reset" color='red' onPress={ResetConfig} />
            </View>
          </View>
        </View>
      </View>
        </ScreenWrapper>
        <CategoriesList
      isModal
      isVisible={isVisibleModal}
      categories={[  {id:'1', name: 'CỔNG VÀO T1', icon: 'tag' },
      {id:'2', name: 'CỔNG VÀO T2', icon: 'tag' },
      {id:'3', name: 'CỔNG RA', icon: 'box' }, 
      {id:'4', name: 'DOCK IMP', icon: 'key' },
       {id:'5', name: 'DOCK EXP', icon: 'note' },]}
      onSelect={onChangeCategory}
      onToggleModal={onToggleModal}
    />

    </View>
    )
}
SettingsScreen["navigationOptions"] = navData => {
    const submitFn = navData.navigation.getParam('submit');
    return {
      headerTitle: 'Settings',
      headerRight: ()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={submitFn}
          />
        </HeaderButtons>
      )
    }
  };

const { indent, verticalIndent } = dimensions;
const styles = StyleSheet.create({
    root: {
        flex: 1,
      },
      selectTextStyle: {
        fontSize: fontSizes.medium,
      },
      selector: {
        alignItems: 'center',
        borderRadius: 4,
      },
    
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: verticalIndent,
      },
    
      label: {
        paddingTop: verticalIndent / 2,
        fontSize: fontSizes.verySmall - 1,
        color: colors.greyDarker,
      },
      selectorContainer: {
        marginBottom: dimensions.verticalIndent,
      },
    
      secondContainer: {
        alignItems: 'center',
        marginRight: indent,
        paddingTop: fontSizes.verySmall,
      },
      input: {
        height: 40,
        borderWidth: 1,
        width: "90%",
      },
      row: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        padding: 20,
      },

})
export default SettingsScreen;