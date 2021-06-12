import React from 'react'
import {View, Text} from 'react-native'
import currencies from '../../constants/currencies'
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'
import {useDispatch,useSelector} from 'react-redux'

const Value = props => {
  const currency = useSelector(state => state.settings.currency);

  const {sign} = currency;
    // const { value, isTransfer, type } = () =>  {
    //     const val = props.type ? props.value : Number(props.value);
    //     return ({
    //       value: props.type ? val : Math.abs(val),
    //       type: props.type || ((val === 0 || props.isTransfer) ? 'other' : val > 0 ? 'income' : 'expense'),
    //     });
    //   }
    const val = props.type ? props.value : Number(props.value);
    const value = props.type ? val : Math.abs(val);
    const type = props.type || ((val === 0 || props.isTransfer) ? 'other' : val > 0 ? 'income' : 'expense');
    const text = currencies.hryvnia.sign === sign ? Math.abs(value) + sign : sign + Math.abs(value);
    const incomeText = `${props.withoutPlus ? '' : '+ '}${text}`;
  
    return (
      <View style={[styles.value, props.containerStyle]}>
          {{
            other: <Text style={[styles.text, styles.other, props.style]}>{text}</Text>,
            income: <Text style={[styles.text, styles.income, props.style]}>{incomeText}</Text>,
            expense: <Text style={[styles.text, styles.expense, props.style]}>- {text}</Text>,
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
    fontSize: fontSizes.xmedium,
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
});
export default Value;


