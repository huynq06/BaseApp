import React from 'react';

import { View, Text } from 'react-native';


import TouchableItem from '../../components/TouchableItem/index.android'
import s from './styles';
import { dateWithTime } from '../../utils/dateHelpers';



const FLightItem = props => {
    return (
        <View>
          <TouchableItem onPress={props.onPress} style={s.container}>
           
            <View style={s.mainContentContainer}>
          
              <Text style={s.accountName}>
              {props.entity.code}
              </Text>
              <Text style={s.date}>{dateWithTime(props.entity.ScheDate)}</Text>
            </View>
          
          </TouchableItem>    
  
    </View>
    )
    
}

export default FLightItem;