
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';


const MainSection = (props) => {

    const {myData}  = props;
    const [myNumArray, setMyNumArray] = useState([]);
    const [theMessage, setTheMessage ] = useState("Click start to see your universe message");
    const [myArrayLen, setMyArrayLen] =useState();

    

    const generateRandomNum = () => {
        let rndNum = Math.floor(0 + Math.random()* 3 );
        setMyArrayLen(myNumArray.length);
        if (myNumArray.indexOf(rndNum) < 0 && myArrayLen<3){
            setMyNumArray(myNumArray => [...myNumArray, rndNum]);
            setUniverseMessage(rndNum);
            setMyArrayLen(myArrayLen+1);
        } else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen<3){
            //setMyNumArray ([]);
            generateRandomNum(rndNum+1);
        }else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen >= 3){
            setMyNumArray ([]);
            generateRandomNum(rndNum+1);
        }
    };

    const setUniverseMessage = (selectedNumber) => {
        const ms = JSON.stringify(myData[selectedNumber].message);
        setTheMessage(ms.replace(/['"]+/g, ""));
    } ;
 

  return (
    <View style={styles.mainScreen}>        
        <Text>{theMessage}</Text>
        <Text>{myArrayLen}</Text>
        <View>
            <TouchableOpacity
                        onPress={generateRandomNum}
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
        paddingTop: 10,
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
export default MainSection;