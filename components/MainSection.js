
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';


const MainSection = (props) => {
    const ScrHeight = Dimensions.get('window').height;
    const ScrWidth = Dimensions.get('window').width;
    const {myData}  = props;
    const [myNumArray, setMyNumArray] = useState([]);
    const [theTitle, setTheTitle] = useState("Your Today Message From Universe:")
    const [theMessage, setTheMessage ] = useState("Click start to see your universe message");
    const [myArrayLen, setMyArrayLen] = useState();
    const [stageNum, setStageNum] = useState(0);

    

    const generateMessage = () => {
        let rndNum = Math.floor(0 + Math.random()* 10 );
        setMyArrayLen(myNumArray.length);
        setUniverseMessage(rndNum);
        if (myNumArray.indexOf(rndNum) < 0 && myArrayLen < 10){
            setMyNumArray(myNumArray => [...myNumArray, rndNum]);
            setUniverseMessage(rndNum);
            setMyArrayLen(myArrayLen+1);
        } else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen < 10){
            generateMessage();
        }else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen >= 10){
            setMyNumArray ([]);
            generateMessage();
        }
    };

    const setUniverseMessage = (selectedNumber) => {
        const ms = JSON.stringify(myData[selectedNumber].message);
        setTheMessage(ms.replace(/['"]+/g, ""));
    } ;
 

  return (
    <View>
        <View style={styles.mainScreen}>    
            <Text>{theTitle}</Text>    
            <Text style={styles.content}>{theMessage}</Text>
            <Text>{myArrayLen}</Text>
            
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
};


const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        margin: 30,
        overflow: 'scroll',
       // backgroundColor:"yellow"
    },
    button:{
       
        justifyContent: 'center',
        alignItems: 'center',
    
        width:200,
        padding:12,
        marginBottom:25,
        borderColor:'#55c2da',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#55c2da'
    },
    buttonCon:{
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    content:{
        padding:15,
        fontSize:16,
        textAlign:'justify'
      
      
    }
})
export default MainSection;