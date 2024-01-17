
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import colors from '../constant/colors';

import MessageHistory from './MessageHistory';


const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

const MainSection = (props) => {
   
    const {myData}  = props;
    
    const [myNumArray, setMyNumArray] = useState([]);
    const [theTitle, setTheTitle] = useState("Your Today Message From Universe:")
    const [theMessage, setTheMessage ] = useState("Click start to see your universe message");
    const [myArrayLen, setMyArrayLen] = useState();
    const [stageNum, setStageNum] = useState(0);
    const [lastMessage, setLastMessage] = useState('');
    const [selectedNum, setSelectedNum] = useState();
  
    const generateMessage = () => {
        let rndNum = Math.floor(0 + Math.random()* 100 );
        setMyArrayLen(myNumArray.length);
        setUniverseMessage(rndNum);
        setStageNum(stageNum+1);
        setSelectedNum(rndNum);
       
        if (myNumArray.indexOf(rndNum) < 0 && myArrayLen < 100){
            setMyNumArray(myNumArray => [...myNumArray, rndNum]);
            setUniverseMessage(rndNum);
            setMyArrayLen(myArrayLen+1);
            
        } else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen < 100){
            generateMessage();
        }else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen >= 100){
            setMyNumArray ([]);
            generateMessage();
        }
        generatLastMessage();
    };

    const setUniverseMessage = (selectedNumber) => {
        const ms = JSON.stringify(myData[selectedNumber].message);
        setTheMessage(ms.replace(/['"]+/g, ""));
    } ;

    const generatLastMessage = () =>{
        setLastMessage(theMessage);
    }
 
if (stageNum === 0){
  return (
    <View>
        <View style={styles.mainScreen}>      
            <Text style={styles.content}>{theMessage}</Text>
            {/* <UniMessHistory/> */}
            
        </View>
        <View style={styles.buttonCon}>
            <TouchableOpacity
                        onPress={generateMessage}
                        style={styles.button}
                    >
                            <Text>START</Text> 
            </TouchableOpacity> 
        </View>
        
    </View>
  );
}else if (stageNum <=3) {
    return (
        <SafeAreaView>
            
             
            <View style={styles.mainScreen}>
               
            <ScrollView vertical > 
                <Text style={styles.title}>{theTitle}</Text>    
                <Text style={styles.content}>{theMessage}</Text>
                <Text>{myArrayLen}</Text>
                <Text>stage number: {stageNum}</Text>
                </ScrollView>
               </View> 
            
            <View style={styles.buttonCon}>
                <TouchableOpacity
                            onPress={generateMessage}
                            style={[styles.button, styles.NewMessageBtn]}
                        >
                                <Text>Get Another Message</Text> 
                </TouchableOpacity> 
            </View>
            
        </SafeAreaView>
      );
}else {
    return(
    <SafeAreaView>
         {/* <StatusBar style="auto" /> */}
         <View style={styles.historySec}>
                <MessageHistory messageNums={selectedNum}/>
            </View>
           
     </SafeAreaView>
    );
}
};


const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        margin: 30,
        marginTop:70,
        overflow: 'scroll',
       // backgroundColor:"yellow",
        height: ScrHeight* 0.2,
    },
    historySec:{
        height:ScrHeight* 0.7,
    },
    button:{
       
        justifyContent: 'center',
        alignItems: 'center',
        width: ScrWidth * 0.6,
        padding:12,
        marginBottom:25,
        borderColor:'#55c2da',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#55c2da',
        fontWeight:'bold'
    },
    buttonCon:{
        justifyContent: 'center',
        alignItems: 'center',
        height: ScrHeight* 0.2,
    
    },
    NewMessageBtn:{
    //  marginBottom: ScrHeight* 0.2,
    
    },
    content:{
        padding:15,
        fontSize:16,
        textAlign:'justify',
        overflow:'scroll',
      
      
    },
    title:{
       
        fontSize:16,
        fontWeight:'bold' 
    }
})
export default MainSection;