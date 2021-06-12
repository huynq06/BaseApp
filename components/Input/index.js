import React from 'react';
import T from 'prop-types';
import { TextInput, View, ViewPropTypes,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors'
import s from './styles';
//import withToggle from '../../utils/enhancers/withToggle' 

const Input = props =>{
    const value = String(props.value);
    const isValid = true;
    const isNotvalid = !isValid && !!value;
  //  withToggle('isFocus', 'setFocus', 'onToggleFocus')
    /* const onFocus = () => {
      //  onToggleFocus(true);
        props.onFocus && props.onFocus();
    } */
    const onBlur= () => {
        onToggleFocus(false);
        props.onBlur && props.onBlur();
      }
    return (
        <View style={props.containerStyle}>
    {!!props.label && <Text style={[s.label, props.labelStyle]}>{props.label}</Text>}
    <View
      style={[
        s.root,
        props.secondContainerStyle,
        props.isFocus && props.containerStyleFocus,
        isNotvalid && props.isNotValidStyle,
        props.error && props.isNotValidStyle,
      ]}
    >
      {/* {
        !!props.icon &&
          <MaterialCommunityIcons
            color={props.isFocus ? colors.green : colors.greyDarker}
            style={[s.icon, props.leftIconStyle]}
            {...props.icon}
          />
      } */}
      {!!props.prefix && <Text style={s.prefix}>{props.prefix}</Text>}
      <TextInput
        autoFocus={true}
        autoCorrect={false}
        placeholderTextColor={props.placeholderColor || colors.greyDarker}
        underlineColorAndroid={colors.transparent}
        onSubmitEditing={props.onSave}
        //onFocus={props.onSetFocus}
      //  ref={input => input && input.focus()}
        // onBlur={onBlur}
        onKeyPress = {props.keyPress}
        {...props}
        ref={props.inputRef}
        style={[s.input, props.style]}
      />
      {
        !!props.iconRight &&
        <MaterialCommunityIcons
          color={props.isFocus ? colors.green : colors.greyDarker}
          style={[s.icon, props.rightIconStyle]}
          {...props.iconRight}
        />
      }
    </View>
    {!!props.error && <Text style={s.error}>{props.error}</Text>}
  </View>
    )
}

Input.propTypes = {
    containerStyle: ViewPropTypes.style,
    secondContainerStyle: ViewPropTypes.style,
    containerStyleFocus: ViewPropTypes.style,
    isNotValidStyle: ViewPropTypes.style,
    leftIconStyle: ViewPropTypes.style,
    rightIconStyle: ViewPropTypes.style,
    placeholderColor: T.string,
    isFocusColor: T.string,
    isFocus: T.bool,
    isNotValid: T.bool,
    icon: T.object,
    iconRight: T.object,
    inputRef: T.any,
    label: T.string,
    error: T.string,
    labelStyle: Text.propTypes.style,
    prefix: T.string,
    style: Text.propTypes.style,
    onFocus: T.func,
    onBlur: T.func,
    // value: T.string,
    value: T.oneOfType([T.string, T.number]),
  };
  
  export default Input;