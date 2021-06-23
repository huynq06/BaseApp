import React from 'react';

import { View, Text } from 'react-native';

import RoundIcon from '../../components/RoundIcon/index'
import TouchableItem from '../../components/TouchableItem/index.android'
import s from './styles';
import { dateWithTime } from '../../utils/dateHelpers';
import Separator from '../Separator';
import  colors  from '../../styles/colors';
import moment from 'moment';
import LagiStatus from '../LagiStatus';
const LagiItem = props => {
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
                  {props.entity.mawb+'/' + props.entity.hawb}
              </Text>
              <Text style={s.date}>PIECES:{props.entity.piecesReceived} | {props.entity.piecesExpected}</Text>
              <Text style={s.date}>WEIGHT:{props.entity.weightReceived} | {props.entity.weightExpected}</Text>
            </View>
            <LagiStatus type ={props.entity.statusGoods} text={props.entity.statusGoods} />
          </TouchableItem>    
  
    </View>
    )
    
}

export default LagiItem;