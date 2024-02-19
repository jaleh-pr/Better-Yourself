
import React, { useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';

import UniMessageMainSection from '../components/UniMessageMainSection';
//source={require('../assets/icons8-mail-50.png')}


const UniMessage = (props) => {

const UniMessageData = require("../Data/UniMessageData.json");
const [stage, setStage] = useState(0);


if(stage === 0){
  return (
   // <ImageBackground source={require('../assets/flowers.jpg')}>
    <View style={styles.mainScreen}>
      
            <UniMessageMainSection myData={UniMessageData} changeStage = {stage => setStage(stage)}/>
    
    </View>
   // </ImageBackground>
  );
}else if (stage === 5){
  return(
    <View style={styles.FinishScreen}>

      <Text>You are done for today</Text>
    
</View>
  );
};
}

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        paddingTop: 10,
        
    },
    FinishScreen:{
      backgroundColor:'pink',
    }
})
export default UniMessage;