import React from 'react'
import T from 'prop-types'
import {StyleSheet,View,Platform,Text} from 'react-native'
import CategoryIcon from '../CategoryIcon/index'
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
const size = dimensions.iconSize + 15
const RoundIcon = props => {
    return (
        <View style= {{...styles.circle,...props.border,backgroundColor:props.backgroundColor}}>
            <Text>{props.type}</Text>
            {/* <CategoryIcon tintColor= {colors.white} {...props} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                paddingTop:2
            }
        })
    }
});
RoundIcon.propTypes = {
    backgroundColor: T.string.isRequired,
    tintColor: T.string,
    border: T.any,
  };
export default RoundIcon;