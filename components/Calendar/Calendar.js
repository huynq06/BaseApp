import React,{useState} from 'react';
import {Text,View} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal';
import TouchableItem from '../TouchableItem/index.android';
import NavIcon from '../NavIcon/index';
import s from './styles';
import colors from '../../styles/colors'

const Calendar = props => {
    const[startDate,setStartDate] = useState(null);
    const[endDate,setEndDate] = useState(null);

    const onSelectDate =  (date, type) => {
        if (type === 'END_DATE') {
         setEndDate(date);
        } else {
         setStartDate(date);
          setEndDate(null);
        }
      }
    const  onDonePress = () => {
        props.onToggleCalendar();
  
        props.onSelectedDate({
          from: startDate.startOf('day'),
          to: endDate ? endDate.endOf('day') : null,
        });
      }
    return (
        <View>
    <View style={s.calendarIcon}>
      <TouchableItem
        onPress={props.onToggleCalendar}
      >
        <NavIcon
          name="calendar"
          tintColor={props.isActiveIcon ? colors.green : colors.greyDarker}
        />
      </TouchableItem>
    </View>

    <Modal
      style={s.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={props.isVisible}
      transparent={false}
      onBackdropPress={props.onToggleCalendar}
    >
      <View style={s.container}>
        <CalendarPicker
          startFromMonday
          allowRangeSelection
          maxDate={new Date()}
          selectedDayColor={colors.green}
          selectedDayTextColor={colors.white}
          onDateChange={onSelectDate}
          textStyle={s.textStyle}
        />
        <View style={s.buttonsContainer}>
          <TouchableItem
            borderless
            onPress={props.onToggleCalendar}
          >
            <Text style={[s.textStyle, s.cancelButtonText]}>Cancel</Text>
          </TouchableItem>
          <TouchableItem
            borderless
            onPress={onDonePress}
          >
            <Text style={[s.textStyle, s.doneButtonText]}>Done</Text>
          </TouchableItem>
        </View>
      </View>
    </Modal>
  </View>
    )
}
export default Calendar;
