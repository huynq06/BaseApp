
import {StyleSheet} from 'react-native'

import colors from '../../../../styles/colors'
import * as dimensions from '../../../../styles/dimensions'
import fontSizes from '../../../../styles/fontSizes'
import fontWeights from '../../../../styles/fontWeights'


const styles = StyleSheet.create({

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey,
    height: 62,
  },
  icon: {
    marginLeft: dimensions.indent,
    marginRight: dimensions.indent,
    alignItems: 'center',
  },
  inactiveIcon: {
    opacity: 0.62,
  },
  activeIcon: {
    borderLeftWidth: 5,
    borderLeftColor: colors.green,
  },
  label: {
    fontSize: fontSizes.small,
    color: colors.greyVeryDarker,
    fontWeight: fontWeights.normal,
  },

});

export default styles;
