import React from 'react';
import {
  View,
  ViewPropTypes,
  TouchableOpacity,
  Text,
} from 'react-native';
import s from './styles';
import  cx  from '../../styles/cx';

const TabOption = props =>{
    return(
        <TouchableOpacity 
        style={[
            s.tabStyle,
            props.tabStyle,
            cx({ [props.isTabActive]: [s.activeTabStyle] }),
            props.firstTabStyle,
            props.lastTabStyle,
          ]}
          onPress={()=>props.onTabPress(props.index)}
        >
            <View style={s.row}>
                <Text style={[s.tabTextStyle,props.tabTextStyle,
                    cx({ [props.isTabActive]: [s.activeTabTextStyle, props.activeTabTextStyle] }),
                ]}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabOption;