import React from 'react';
import T from 'prop-types';
import { Platform, StyleSheet, View } from 'react-native';
import CategoryIcon from '../CategoryIcon/index';
import TouchableItem from '../TouchableItem/index.android';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'



const styles = StyleSheet.create({
    circle: {
      borderRadius: (dimensions.bigIconSize + 15) / 2,
      ...Platform.select({
        ios: {
          paddingTop: 4,
          paddingLeft: 1,
        },
      }),
      alignItems: 'center',
      justifyContent: 'center',
      width: dimensions.bigIconSize + 15,
      height: dimensions.bigIconSize + 15,
      borderWidth: 2,
      borderColor: colors.greyDarker,
    },
    touchableContent: {
      height: dimensions.bigIconSize,
      width: dimensions.bigIconSize,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  const BigRoundIconButton = props => (
    <View style={props.containerStyle}>
      <View style={{...styles.circle, ...props.backgroundColor , ...props.border}}>
        <TouchableItem borderless onPress={props.onPress} style={styles.touchableContent} >
          <CategoryIcon tintColor={colors.white} {...props} />
        </TouchableItem>    
      </View>
    </View>
  );
  
  BigRoundIconButton.propTypes = {
    backgroundColor: T.string,
    tintColor: T.string,
    border: T.any,
    containerStyle: T.any,
    onPress: T.func,
  };
  
  export default BigRoundIconButton;