import React from 'react'
import {View, Text} from 'react-native'
import currencies from '../../constants/currencies'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'
import {useDispatch,useSelector} from 'react-redux'

const LagiStatus = props => {


  
    const type = props.type;
  
    return (
      <View style={[styles.value, props.containerStyle]}>
          {{
            0: <Text style={[styles.text, styles.other, props.style]}>CHƯA NHẬN ĐỦ HÀNG</Text>,
            1: <Text style={[styles.text, styles.income, props.style]}>ĐÃ NHẬN ĐỦ HÀNG</Text>,
            2: <Text style={[styles.text, styles.pxk, props.style]}>ĐÃ CÓ PXK</Text>,
            3: <Text style={[styles.text, styles.expense, props.style]}>ĐÃ TRẢ HÀNG</Text>,
          }[type]}
          {props.children}
        </View>
      );
}


const styles = StyleSheet.create({
  value: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: dimensions.indent,
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.verySmall,
    fontWeight: fontWeights.extraBold,
  },
  income: {
    color: colors.green,
  },
  expense: {
    color: colors.red,
  },
  other: {
    color: colors.darkGrey,
  },
  pxk: {
    color: colors.yellow,
  }
});
export default LagiStatus;


