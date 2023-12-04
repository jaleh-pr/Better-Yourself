
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";

const ZodiacMonth = (props) => {

    // const [myDate , setMyDate ] = useState (new Date().getDate());
    // const [myMonth , setMyMonth] = useState (new Date().getMonth() + 1);
    // const [myYear , setMyYear]  = useState (new Date().getFullYear());

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [myDate, setMyDate] = useState();
    const [showPicker, setShowPicker] = useState(true);


const hideDatePicker = () => {
  setDatePickerVisible(false);
};

const handleConfirm = (date) => {
  setSelectedDate(date);
  //let todaysDate = new Date();
  //let [month, day, year] = todaysDate.toLocaleDateString().split("/")
  //console.log('Year: ', year);
  console.log(selectedDate);
  setMyDate(selectedDate)
 
};


  return (

    <View style={styles.mainScreen}>
            
          <Text style={styles.header}> Your Month Zodiac</Text> 
          <Text  > Enter your Date Of Birth</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
             {selectedDate ? new Date(myDate).toLocaleDateString('en-US') : 'No date selected'}
            </Text>
           
            <Text>
            {showPicker && (
            <DateTimePicker
                date = {selectedDate}
               // isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                //value={new Date()}
                value={date} 
                //onChange={handleConfirm}
                onChange={(event, value) => handleConfirm(value)}
            />
            )}
           
           </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        paddingTop: 10,
    },
    header:{
        marginBottom:10,
        fontSize:20
       
    },
    button:{
      justifyContent: 'center',
      alignItems: 'center',
      padding:12,
      marginTop:35,
      borderColor:'#55c2da',
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'#55c2da'
  }
})
export default ZodiacMonth;