import React from 'react'
import {StyleSheet,View} from 'react-native'
import T from 'prop-types';
const TabContainer = props => {
    return (
        <View style={{...styles.container,
            ...props.topOffset && { top: props.topOffset },
        ...props.selectedTabIndex === props.tabIndex? styles.show : styles.hide}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top: 0,
        bottom:0
    },
    show:{
        left: 0,
        right: 0
    },
    hide:{
        left: 90000,
        right: 90000
    }
})
TabContainer.propTypes = {
    selectedTabIndex: T.number,
    tabIndex: T.number,
    topOffset: T.number,
    children: T.element,
  };
  
export default TabContainer;