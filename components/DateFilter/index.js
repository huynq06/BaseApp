import React,{useState} from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import Calendar from '../../components/Calendar/Calendar';
import s from './styles';


const DateFilter = props => {
    const [isVisibleCalendar,toggleCalendar] = useState(false);
    const [isActiveCalendar,setActiveCalendar] = useState(false);
    const onToggleCalendar = () =>{
        toggleCalendar(prev=>!prev);
      }
    const setActive = () =>{
        setActiveCalendar(true);
    }
    const onChangeCalendar = (date) => {
        if (!date.from && !date.to) return;
  
        setActive();
        props.setDateForFiltering(date.to ? date : date.from);
      }
   
    return (
        <View style={s.selectors}>
            <Calendar
            isVisible={isVisibleCalendar}
            isActiveIcon={isActiveCalendar}
            onToggleCalendar={onToggleCalendar}
            onSelectedDate={onChangeCalendar}
            initialDate={props.dateForFiltering}
            />
   </View>
    )
}
export default DateFilter;

