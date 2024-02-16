
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native';

import RNPickerSelect from "react-native-picker-select";

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const ZodiacMonth = (props) => {


const ZodiacMonthData = require("../Data/ZodiacMonth.json");

  const [birthdayDate, setBirthdayDate] = useState('Birthday Date');
  const [monthValue, setMonthValue] = useState(1);
  const [ZoNum, setZoNum] = useState(12);
  const [theTitle, setTheTitle] = useState('Title');
  const [theMessage, setTheMessage] = useState('The Message');
  const [pageNum, setPageNum] = useState(0)

  const setContent = (ZoNum) => {
  const ZoMT = JSON.stringify(ZodiacMonthData[ZoNum].title);
  const ZoM1 = JSON.stringify(ZodiacMonthData[ZoNum].message1);
  const ZoM2 = JSON.stringify(ZodiacMonthData[ZoNum].message2);
  const ZoM3 = JSON.stringify(ZodiacMonthData[ZoNum].message3);
  const ZoM4 = JSON.stringify(ZodiacMonthData[ZoNum].message4);
  setTheTitle(ZoMT.replace(/['"]+/g, ""));
  setTheMessage(ZoM1.replace(/['"]+/g, "")+"\n"+ ZoM2.replace(/['"]+/g, "")+"\n"+ ZoM3.replace(/['"]+/g, "")+"\n"+ZoM4.replace(/['"]+/g, ""));
  }

  const checkBirthdayHandler = () =>{
    if((monthValue == 3 && birthdayDate > 20 )||( monthValue == 4 && birthdayDate <= 19 )){
        setZoNum(0);
        setContent(0);
    }else if(( monthValue == 4 && birthdayDate > 19 )||( monthValue == 5 && birthdayDate <= 20 )){
        setZoNum(1);
        setContent(1);
    }else if(( monthValue == 5 && birthdayDate > 20 )||( monthValue == 6 && birthdayDate <= 20 )){
        setZoNum(2);
        setContent(2);
    }else if(( monthValue == 6 && birthdayDate > 20 )||( monthValue == 7 && birthdayDate <= 22 )){
        setZoNum(3);
        setContent(3);
    }else if(( monthValue == 7 && birthdayDate > 22 )||( monthValue == 8 && birthdayDate <= 22 )){
        setZoNum(4);
        setContent(4);
    }else if(( monthValue == 8 && birthdayDate > 22 )||( monthValue == 9 && birthdayDate <= 22 )){
        setZoNum(5);
        setContent(5);
    }else if(( monthValue == 9 && birthdayDate > 22 )||( monthValue == 10 && birthdayDate <= 22 )){
        setZoNum(6);
        setContent(6); 
    }else if(( monthValue == 10 && birthdayDate > 22 )||( monthValue == 11 && birthdayDate <= 21 )){
        setZoNum(7);
        setContent(7);
    }else if(( monthValue == 11 && birthdayDate > 21 )||( monthValue == 12 && birthdayDate <= 21 )){
        setZoNum(8);
        setContent(8);
    }else if(( monthValue == 12 && birthdayDate > 21 )||( monthValue == 1 && birthdayDate <= 19 )){
        setZoNum(9);
        setContent(9);
    }else if(( monthValue == 1 && birthdayDate > 19 )||( monthValue == 2 && birthdayDate <= 18 )){
        setZoNum(10);
        setContent(10);
    }else if(( monthValue == 2 && birthdayDate > 18 )||( monthValue == 3 && birthdayDate <= 20 )){
        setZoNum(11)
        setContent(11);
    }else{
        setZoNum(12)
        setContent(12);

    }
    setPageNum(1)
  };

  const backHandler = () =>{
    setPageNum(0);
  }

  if(pageNum === 0 ){
  return (
<SafeAreaView>
    <View style={styles.mainScreen}>
            
          <Text style={styles.mainHeaderText}> Zodiac</Text> 
          <Text style={styles.secondHeaderText}> Enter Your Date Of Birth</Text>
         
            <View style={styles.inputCon}>
                <Text>Your month of birth:</Text>
                <View style={styles.pickerSelectStyles}>
                    <RNPickerSelect
                        
                        placeholder={{
                                label: 'Select the month',
                                value: null,
                                color: 'red',
                                borderColor:'black',
                                borderWidth:1,
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
            </View>
            <View style={styles.inputCon}>
                <Text>Your date of birth:</Text>
                <View style={styles.pickerSelectStyles}>
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
             </View>
    </View>
    <View style={styles.buttonCon}>
        <TouchableOpacity
                    onPress={() => checkBirthdayHandler()}
                    style={styles.button}
                >
                        <Text style={styles.buttonText}>Confirm</Text> 
        </TouchableOpacity> 
    </View>
</SafeAreaView>
  )
} else if ( pageNum === 1 ){
    return(

        <SafeAreaView>
            
                <View style= {styles.mainScreen}> 
                     <Text style={styles.mainHeaderText}> Zodiac</Text> 
                    <Text style= {styles.secondHeaderText}>{theTitle}</Text>
                    <ScrollView vertical style={styles.scrollView}>
                         <Text style= {styles.paragraphText}>{theMessage}</Text>
                    </ScrollView>
                </View>
           
            <View style={styles.buttonCon}>
                <TouchableOpacity
                            onPress={backHandler}
                            style={styles.button}
                        >
                                <Text style={styles.buttonText}>Back</Text> 
                </TouchableOpacity> 
          </View>
        </SafeAreaView>
  )
};
}

const styles = StyleSheet.create({
    mainScreen:{
        height:ScrHeight * 0.6,
         // flex:1,
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop:30,
          marginBottom:30,
          padding: 20,
      },
      mainHeaderText:{
        marginTop:25,
       textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
    },
    secondHeaderText:{
        marginTop:25,
        marginBottom:10,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
    paragraphText:{
        fontSize:15,
        textAlign:'justify',
       // textAlign:'center',
        padding:20,
    },
    buttonCon:{
     marginTop:15,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    button:{
      width:ScrWidth * 0.6,
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
      fontWeight:'bold',
      borderColor:'#FBB651',
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'#FBB651'
  },
  buttonText:{
    fontWeight:'bold',
    fontSize: 16
  },
  inputCon:{
    marginTop:25,
  },
  pickerSelectStyles:{
    width: ScrWidth * 0.5,
    marginTop:5,
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor:'gray',
    borderRadius:5
  }
})
export default ZodiacMonth;