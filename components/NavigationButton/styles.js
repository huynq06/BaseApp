import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.indent,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.red,
    fontSize: fontSizes.medium,
  },
});

export default styles;
