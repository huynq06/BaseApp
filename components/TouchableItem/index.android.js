import T from 'prop-types';
import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';

const noop = () => {};

const Button = props => {
  if (Platform.Version < 21) {
    return (
      <TouchableOpacity
        onLongPress={noop}
        onLayout={noop}
        onPress={noop}
        style={props.style}
        {...props}
      >
        {props.children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback
      onLongPress={noop}
      onLayout={noop}
      onPress={noop}
      {...props}
      background={props.backgroundType
        ? TouchableNativeFeedback[props.backgroundType]()
        : TouchableNativeFeedback.Ripple(props.rippleColor, false)}
    >
      {props.style ? (
        <View style={props.style}>
          {props.children}
        </View>
      ) : (
        props.children
      )}
    </TouchableNativeFeedback>
  );
};

Button.defaultProps = {
  onPress: noop,
  onLongPress: noop,
  onLayout: noop,
  rippleColor: '#d5d3d5',
};

Button.propTypes = {
  onPress: T.func,
  children: T.any,
  style: T.any,
  onLongPress: T.func,
  onLayout: T.func,
  rippleColor: T.string,
  backgroundType: T.string,
  borderless: T.bool,
};

export default Button;
