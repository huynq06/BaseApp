import React from 'react';

import { View, Text } from 'react-native';

import RoundIcon from '../../components/RoundIcon/index'
import TouchableItem from '../../components/TouchableItem/index.android'
import s from './styles';
import { dateWithTime } from '../../utils/dateHelpers';
import Separator from '../Separator';
import  colors  from '../../styles/colors';
import moment from 'moment';
const FLightItem = props => {
    return (
        <View>
          <TouchableItem onPress={props.onPress} style={s.container}>
            <View style={s.icon}>
              <RoundIcon
                type={props.entity.flightType}
                border = {s.border}
                backgroundColor = {colors.greyOpacity }
                tintColor = {colors.greyDarker}
              />
            </View>
            <View style={s.mainContentContainer}>
              <Text style={s.title}>
                  {props.entity.code + props.entity.flightNo}
              </Text>
              <Text style={s.date}>STD:{props.entity.ScheTime} | {moment(props.entity.ScheDate).format('DD.MM.YYYY')}</Text>
              <Text style={s.date}>ATD:{props.entity.landTime} | {moment(props.entity.landDate).format('DD.MM.YYYY')}</Text>
            </View>
          
          </TouchableItem>    
  
    </View>
    )
    
}

export default FLightItem;