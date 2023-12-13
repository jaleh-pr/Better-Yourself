
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

//import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import NumberPlease from 'react-native-number-please';


const ZodiacYearData = (props) => {

const ZodiacYearDataData = require("../Data/ZodiacYearData.json");
const [content , setContent ] = useState("");

  const [number, onChangeNumber] = useState(1);
  const [birthdayDate, setBirthdayDate] = useState('Birthday Date');
  const [monthValue, setMonthValue] = useState(1);
  const [ZoNum, setZoNum] = useState(0);
  const [theMessage, setTheMessage] = useState('Thanks');


  const ZoM = JSON.stringify(ZodiacYearDataData[ZoNum].message);

  const checkBirthdayHandler = () =>{
    if(monthValue == 3 && birthdayDate > 5 ) {
        setZoNum(1)
    }else if( monthValue == 4 && birthdayDate <= 5 ){
        setZoNum(2)
    }else{
        setZoNum(3)
    }
  }


  return (

    <View style={styles.mainScreen}>
            
          <Text style={styles.header}> Your Month Zodiac</Text> 
          <Text  > Enter your Date Of Birth</Text>
          {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
             {selectedDate ? new Date(myDate).toLocaleDateString('en-US') : 'No date selected'}
            </Text>
           <Text>
            {showPicker && (
            <DateTimePicker
                date = {selectedDate}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                value={date} 
                onChange={(event, value) => handleConfirm(value)}
            />
            )}
           </Text> */}
           {/* <View>
             <TextInput
                style={styles.input}
               // onChangeText={handleChange}
                onChangeText={(value) => setBirthdayDate(value)}
                value={number}
                placeholder="Enter Date"
                keyboardType="numeric"
            />
            </View> */}
           <View style={styles.input}>
                <Text>Your month of birth:</Text>
                <RNPickerSelect
                    placeholder={{
                            label: 'Select the month',
                            value: null,
                            color: 'red',
                        }}
                    onValueChange={(value) => setMonthValue(value)}
                    items={[
                        { label: "January", value: "1" },
                        { label: "February", value: "2" },
                        { label: "March", value: "3" },
                        { label: "April", value: "4" },
                        { label: "May", value: "5" },
                        { label: "June", value: "6" },
                        { label: "July", value: "7" },
                        { label: "August", value: "8" },
                        { label: "September", value: "9" },
                        { label: "October", value: "10" },
                        { label: "November", value: "11" },
                        { label: "December", value: "12" },
                    ]}
             />
             </View>
             <View style={styles.input}>
                <Text>Your date of birth:</Text>
                <RNPickerSelect
                    placeholder={{
                            label: 'Select the date',
                            value: null,
                            color: 'red',
                        }}
                    onValueChange={(value) => setBirthdayDate(value)}
                    items={[
                        { label: "1", value: "1" },
                        { label: "2", value: "2" },
                        { label: "3", value: "3" },
                        { label: "4", value: "4" },
                        { label: "5", value: "5" },
                        { label: "6", value: "6" },
                        { label: "7", value: "7" },
                        { label: "8", value: "8" },
                        { label: "9", value: "9" },
                        { label: "10", value: "10" },
                        { label: "11", value: "11" },
                        { label: "12", value: "12" },
                        { label: "13", value: "13" },
                        { label: "14", value: "14" },
                        { label: "15", value: "15" },
                        { label: "16", value: "16" },
                        { label: "17", value: "17" },
                        { label: "18", value: "18" },
                        { label: "19", value: "19" },
                        { label: "20", value: "20" },
                        { label: "21", value: "21" },
                        { label: "22", value: "22" },
                        { label: "23", value: "23" },
                        { label: "24", value: "24" },
                        { label: "25", value: "25" },
                        { label: "26", value: "26" },
                        { label: "27", value: "27" },
                        { label: "28", value: "28" },
                        { label: "29", value: "29" },
                        { label: "30", value: "30" },
                        { label: "31", value: "31" },
                        
                    ]}
                />
         </View>
         <View style={styles.center}>
         <TouchableOpacity
                        onPress={() => checkBirthdayHandler()}
                        style={styles.button}
                    >
                            <Text>Confirm</Text> 
            </TouchableOpacity> 
            <Text>{ZoM}</Text>
         </View>
         
    </View>
  );
};

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        paddingTop: 3,
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
  },
  input: {
    marginTop:10 
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    color: "black",
    paddingTop: 3,
  }
})
export default ZodiacYearData;