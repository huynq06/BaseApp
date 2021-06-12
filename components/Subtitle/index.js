import React from 'react';
import { StyleSheet, View, ViewPropTypes,Text } from 'react-native';
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'
import {formatDateForSubtitle} from '../../utils/dateHelpers'


const Subtitle = props => {
   return(
    <View style={{...styles.textContainer,...props.style}}>
         <Text style={styles.leftText}>{props.leftText}</Text>
         {props.date ?
      <View style={styles.rightContainer}>
        <Text style={[styles.rightText, styles.date]}>{formatDateForSubtitle(props.date)}</Text>
      </View>
      :
      null
    }
    </View>
   )
}
const styles = StyleSheet.create({
   leftText: fontSizes.small,
   textContainer:{
      paddingBottom: dimensions.halfIndent,
      flexDirection: 'row',
      justifyContent:'space-between'
   }
})
export default Subtitle;