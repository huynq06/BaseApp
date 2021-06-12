import React,{useState} from 'react';
import T from 'prop-types';
import { View, ViewPropTypes,Text,Button,Platform,TouchableHighlight,Modal,StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../styles/colors'
import * as dimensions from '../../styles/dimensions'
import CalendarPicker from 'react-native-calendar-picker';
import s from './styles';
import moment from 'moment';
import { months } from 'moment';
const renderIcon = (icon, isSelected) => (
    <MaterialCommunityIcons
      {...icon}
      style={[s.icon, isSelected && { color: colors.green }]}
    />
  );
const CustomDatePicker = (props) => {
    const {textStyle,defaultDate} = props;
    const [date,setDate] = useState(moment(defaultDate))
    const [show,setShow] = useState(false);
    const  icon = {
        name: 'calendar',
        size: dimensions.iconSize,
      }
    const onChange = (e,selectedDate) =>{
        setDate(moment(selectedDate))
    }
    const onCancelPress = ()=>{
        setDate(moment(defaultDate))
        setShow(false);
    }
    const onAndroidChange = (e,selectedDate) =>{
        setShow(false);
        if(selectedDate){
            setDate(moment(selectedDate));
            props.onDateChange(selectedDate);
        }
    }
    const onDonePress = ()=>{
        props.onDateChange(date);
        setShow(false);
    }
    const renderDatePicker = () =>{
        return(
            <DateTimePicker

            timeZoneOffsetInMinutes={0}
            value={new Date(date)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2099, 12, 31)}
            mode='date'
            onChange={Platform.OS==='ios?'? onChange : onAndroidChange}
            
        />
        )
    }
  return (
    <TouchableHighlight 
        activeOpacity={0}
        onPress={()=>setShow(true)}
    >
        <View>
            <Text style={textStyle}>{date.format('DD-MM-YYYY')}</Text>
            {Platform.OS==='android' && show && renderDatePicker()}
        {Platform.OS==='ios' &&(
            <Modal 
            transparent={true}
             animationType='slide'
             visible={show}
             supportedOrientations={['portrait']}
             onRequestClose={()=>setShow(false)}
             >
             <View style={{flex:1}}>
                 <TouchableHighlight
                     style={{
                         flex:1,
                         alignItems:'flex-end',
                         flexDirection:'row'
                     }}
                     activeOpacity={1}
                     visible={show}
                     onPress={()=>setShow(false)}
                 
                 >
                 <TouchableHighlight
                     underlayColor={'#FFFFFF'}
                     style={{
                         flex:1,
                         borderTopColor:'#E9E9E9',
                         borderTopWidth:1
                     }}
                     onPress={()=>console.log('date picker clicked')}
                 >
                     <View style={{
                         backgroundColor:'#FFFFFF',
                         height:256,
                         overflow:'hidden'
                     }}>
                         <View style={{marginTop:20}}>
                            
                            {renderDatePicker()}
                            
 
                         </View>
                         <TouchableHighlight
                             underlayColor={'transparent'}
                             onPress={onCancelPress}
                             style={[styles.btnText,styles.btnCancel]}
                         >
                             <Text>
                                 Cancel
                             </Text>
                         </TouchableHighlight>
                         <TouchableHighlight
                             underlayColor={'transparent'}
                             onPress={onDonePress}
                             style={[styles.btnText,styles.OK]}
                         >
                             <Text>
                                 OK
                             </Text>
                         </TouchableHighlight>
                     </View>
                 </TouchableHighlight>
 
                 </TouchableHighlight>
             </View>
         </Modal>
        )}
           
            {renderIcon(icon, true)}
          
    </View>   
    </TouchableHighlight>
  );
};

CustomDatePicker.defaultProps = {
    textStyle:{},
    defaultDate: moment(),
    onDateChange: ()=>{}
  };
const styles = StyleSheet.create({
    btnText:{
        position:'absolute',
        top:0,
        height:42,
        paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btnCancel:{
        left:0
    },
    OK:{
        right:0
    }
})
export default CustomDatePicker;
