import { StyleSheet } from 'react-native';
import * as dimensions from '../../styles/dimensions'
import * as scalingUtils from '../../styles/scalingUtils'
import fontSizes from '../../styles/fontSizes'
import colors from '../../styles/colors'
import fontWeights from '../../styles/fontWeights'


export default StyleSheet.create({
    container: {
      height: scalingUtils.verticalScale(65),
      backgroundColor: colors.white,
      flexDirection: 'row',
    },
    mainContentContainer: {
      flex: 13,
      justifyContent: 'space-around',
      paddingVertical: dimensions.halfIndent / 2,
    },
  border: {
    borderWidth: 1,
    borderColor: colors.greyDarker,
  }
  ,
    icon: {
      padding: dimensions.indent,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    title: {
      color: colors.green,
      fontSize: fontSizes.small,
      fontWeight: fontWeights.extraBold,
    },
  
    accountName: {
      color: colors.greyDarker,
      fontSize: fontSizes.verySmall,
    },
  
    date: {
      color: colors.greyDarker,
      fontSize: fontSizes.small,
      fontWeight: fontWeights.extraBold,
    },
  
    buttonIcon: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    percentText: {
      color: colors.greyVeryDarker,
      fontSize: fontSizes.medium,
    },
  
  });