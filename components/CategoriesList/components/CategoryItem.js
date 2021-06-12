import React from 'react'
import T from 'prop-types'
import {View,Text,StyleSheet} from 'react-native'
import RoundIcon from '../../RoundIcon/index'
import TouchableItem from '../../TouchableItem/index.android'
import colors from '../../../styles/colors'
import * as dimensions from '../../../styles/dimensions'
import fontSizes from '../../../styles/fontSizes'
import * as scalingUtils from '../../../styles/scalingUtils'

const CategoryItem = props => {
    return (
        <TouchableItem style={styles.container}
            onPress={()=>props.onSelect(props.item)}
        >
            <View style={styles.icon}>
                <RoundIcon
                    name = {props.item.icon}
                    border = {styles.border}
                    backgroundColor = {colors.white}
                    tintColor = {colors.greyDarker}
                />
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </TouchableItem>
    )
}

const styles = StyleSheet.create({
    container: {
        height: scalingUtils.verticalScale(62),
        backgroundColor: colors.white,
        flexDirection:'row'
    },
    icon:{
        padding:dimensions.indent,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    border: {
        borderWidth: 1,
        borderColor: colors.greyDarker,
      },
    mainContainer:{
        justifyContent:'center'
    },
    title:{
        color:colors.greyVeryDarker,
        fontSize:fontSizes.small
    }
})

export default CategoryItem;