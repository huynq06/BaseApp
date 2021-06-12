import { StyleSheet } from 'react-native';
import * as dimensions from '../../styles/dimensions'
import * as scalingUtils from '../../styles/scalingUtils'
import fontSizes from '../../styles/fontSizes'
import colors from '../../styles/colors'
import fontWeights from '../../styles/fontWeights'

const { indent, verticalIndent } = dimensions;

export default StyleSheet.create({
  calendarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalIndent,
    paddingHorizontal: indent,
    marginTop: verticalIndent,
    marginBottom: verticalIndent / 2,
    alignItems: 'center',
  },

  cancelButtonText: {
    color: colors.red,
  },

  doneButtonText: {
    color: colors.green,
  },

  textStyle: {
    fontSize: fontSizes.small,
  },

  container: {
    backgroundColor: 'white',
    paddingVertical: verticalIndent,
  },

  modal: {
    marginHorizontal: scalingUtils.moderateScale(5),
  },

});
