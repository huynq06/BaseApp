import { prop } from 'ramda'
import React from 'react'
import {StyleSheet,View} from 'react-native'
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'

const ScreenWrapper = props => {
    return(
        <View style={{...styles.rootStyle,...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    rootStyle : {
        flex: 1,
        padding: dimensions.indent,
        backgroundColor: colors.white
    }
})

export default ScreenWrapper;