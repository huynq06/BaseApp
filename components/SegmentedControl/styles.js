import { StyleSheet } from 'react-native';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import fontSizes from '../../styles/fontSizes'
import fontWeights from '../../styles/fontWeights'


const styles = StyleSheet.create({
    tabsContainerStyle:{
        backgroundColor: colors.transparent,
        flexDirection:'row',
    },
    row:{
        flexDirection:'row'
    },
    tabStyle:{
        paddingVertical: dimensions.verticalIndent / 2,
        justifyContent:'center',
        alignItems:'center',
        borderColor: colors.green,
        backgroundColor: colors.white,
        borderWidth:1,
        flex:1
    },
    tabTextStyle: {
        color: colors.green,
        fontSize: fontSizes.medium,
      },
      activeTabStyle: {
        backgroundColor: colors.green,
        borderColor: colors.green,
      },  
      activeTabTextStyle: {
        color: colors.white,
      },
})

export default styles;