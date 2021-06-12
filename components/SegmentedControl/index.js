import { prop } from 'ramda';
import React from 'react';
import {
  View,
  ViewPropTypes,
  Text,
} from 'react-native';
import TabOption from './TabOption';
import s from './styles';
import  cx  from '../../styles/cx';

const SegmentedControl = props =>{
    const firstTabStyle = [{
        borderRightWidth: 0,
        borderTopLeftRadius: props.borderRadius,
        borderBottomLeftRadius: props.borderRadius,
      }];
      const lastTabStyle = [{
        borderLeftWidth: 0,
        borderTopRightRadius: props.borderRadius,
        borderBottomRightRadius: props.borderRadius,
      }];
      const handleTabPress = (index) => {
        
        props.onTabPress(index);
      }
      
    const tabs = props.values.map((item,index)=>{
        const firstTabStyleCx = cx({ [index === 0]: [{ borderRightWidth: 1 }, firstTabStyle] });
        const lastTabStyleCx =
          cx({ [index === props.values.length - 1]: [{ borderLeftWidth: 1 }, lastTabStyle] });
        return(
            <TabOption
                key={index}
                index = {index}
                text = {item}
                tabStyle={{...props.tabStyle}}
                onTabPress = {index=>handleTabPress(index)}
                firstTabStyle={firstTabStyleCx}
                lastTabStyle={lastTabStyleCx}
                isTabActive={props.multiple ? props.selectedIndices.includes(index) : props.selectedIndex === index}
            />
        )
    })
    return(
        <View style={{...s.tabsContainerStyle, ...props.tabsContainerStyle}}>
            {tabs}
        </View>
    )
}

SegmentedControl.defaultProps = {
  values: ['One', 'Two', 'Three'],
  badges: ['', '', ''],
  multiple: false,
  selectedIndex: 0,
  selectedIndices: [0],
  onTabPress: () => {},
  tabsContainerStyle: {},
  tabStyle: {},
  activeTabStyle: {},
  tabTextStyle: {},
  activeTabTextStyle: {},
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
  borderRadius: 5,
};

export default SegmentedControl;