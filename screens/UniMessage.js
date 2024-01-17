
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MainSection from '../components/MainSection';

const UniMessage = (props) => {

const UniMessageData = require("../Data/UniMessageData.json");

const [stageNum, setStageNum] = useState(0);

if(stageNum === 0){
  return (
    <View style={styles.mainScreen}>

            <MainSection myData={UniMessageData}/>
            
    </View>
  );
}else if (stageNum >= 3){
  return(
    <View style={styles.mainScreen}>

    <Text>You are done for today</Text>
    
</View>
  )
}
};

const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        paddingTop: 10,
    }
})
export default UniMessage;