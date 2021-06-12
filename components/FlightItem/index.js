import React from 'react';
import T from 'prop-types';
import { View, Text } from 'react-native';

import NavIcon from '../../components/NavIcon/index'
import RoundIcon from '../../components/RoundIcon/RoundIcon'
import Value from '../../components/Value/Value'
import TouchableItem from '../../components/TouchableItem/index.android'
import s from './styles';
import { dateWithTime } from '../../utils/dateHelpers';
import  colors  from '../../styles/colors';
import {useDispatch,useSelector} from 'react-redux'
import R from 'ramda';


const FLightItem = props => {
    return (
        <View></View>
    )
}