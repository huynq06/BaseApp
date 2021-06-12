import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import ScreenWrapper from '../../components/ScreenWrapper/index'
import BigRoundIconButton from '../../components/BigRoundIconButton/index'
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import Input from '../../components/Input/index'
import fontSizes from '../../styles/fontSizes'
const CategoryEditor = props =>{
    return(
        <View style={styles.root}>
            <ScreenWrapper>
                <View>
                    <View style={styles.container}>
                        <View style={styles.mainContainer}>
                        <BigRoundIconButton
                           // onPress={togglePicker}
                          //  name={icon}
                            backgroundColor={colors.white}
                            tintColor={colors.greyDarker}
                            size={dimensions.bigIconSize}
                            />
                            <Text style={styles.label}>Choose Icon</Text>
                        </View>
                        <Input
                        isValid
                        placeholder="Category name"
                        // value={name}
                       //  onChangeText={setName}
                        containerStyle={styles.root}
                        />
                        <View></View>
                    </View>
                </View>
                <IconsPickerModal
                        icons={icons}
                        onIconPick={onChangeIcon}
                        isVisible={isPickerVisible}
                        hideModal={togglePicker}
                        selectedIconName={icon}
                        />
            </ScreenWrapper>
            
        </View>
    )
}

const { indent, verticalIndent } = dimensions;
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom: dimensions.verticalIndent
    },
    mainContainer:{
         alignItems:'center',
         marginRight: indent,
         paddingTop: fontSizes.verySmall
    },
})
export default CategoryEditor;