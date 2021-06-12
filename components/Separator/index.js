import React from 'react';
import { View, ViewPropTypes,StyleSheet } from 'react-native';
import T from 'prop-types';
import colors from '../../styles/colors'


const Separator = props =>{
    return (
        <View
            style= {{...styles.root,
                ...props.withShadow && styles.shadow,
                ...props.withOpacity && styles.opacity,
                ...props.style,
            }}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        height: 1,
        backgroundColor: colors.gray,
        opacity: 0.5
    },
    shadow: {
        backgroundColor: colors.greyOpacity,
        ...Platform.select({
          ios: {
            shadowOpacity: 0.9,
            shadowRadius: 1,
            shadowOffset: {
              height: 0.5,
              width: 0,
            },
          },
          android: {
            elevation: 0.3,
          },
        }),
      },
    opacity: {
        opacity: 0.3,
      },
})
export default Separator;