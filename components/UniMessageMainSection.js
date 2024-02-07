
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar, SafeAreaView, ScrollView, TextInput} from 'react-native';
import colors from '../constant/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MessageHistory from './MessageHistory';


const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

const UniMessageMainSection = (props) => {
   
    const {myData}  = props;
    
    const [myNumArray, setMyNumArray] = useState([]);
    const [theTitle, setTheTitle] = useState("Your Today Message From Universe:")
    const [theMessage, setTheMessage ] = useState("");
    const [theId, setTheId ] = useState();
    const [myArrayLen, setMyArrayLen] = useState();
    const [stageNum, setStageNum] = useState(0);
    const [lastMessage, setLastMessage] = useState('');
    const [selectedNum, setSelectedNum] = useState();
    const [btnAct , setBtnAct] = useState(1);
    const [timePassed, setTimePassed] = useState (true);
    
    const [dispalyMode, setDispalyMode] = useState('block');
    const [name , setName] = useState("");

    const btnActive = () => {
        return{

             marginTop:30,
            justifyContent: 'center',
            alignItems: 'center',
            height: ScrHeight* 0.2,
            display:"block"
        };
    };

    const btnDeactive = () => {
        return{
            marginTop:30,
            justifyContent: 'center',
            alignItems: 'center',
            height: ScrHeight* 0.2,
           display:"none",
        };
    };

    const save = async () => {
        console.log(theMessage);
        setStageNum(1);
      
    try{
        await AsyncStorage.setItem( "TheMessage" , theMessage);

    } catch(err) {
        alert(err);
    }
   
    };

    const laod = async () => {
    try{
        let theMessage = await AsyncStorage.getItem("TheMessage");

        if(theMessage !== null){
        setTheMessage(theMessage);
        }
    } catch (err){
        alert(err);
    }
    };

    const remove = async () => {
    try{
        await AsyncStorage.removeItem ("TheMessage");
    } catch (err) {
        alert(err)
    }finally{
        setTheMessage("");
    }
    };

    useEffect(() => {
       
    laod();
    generateMessage();
    }, []
    );
    
    const startGenerator =()=>{
        setStageNum(1);
        setTimePassed(false);
        setTimeout(() => setTimePassed(true), 25000);
    }
    const generateMessage = () => {
        let rndNum = Math.floor(0 + Math.random()* 100 );
        setBtnAct(0);
        setMyArrayLen(myNumArray.length);
        setUniverseMessage(rndNum);
       // setStageNum(stageNum+1);
        setSelectedNum(rndNum);
        setMyNumArray(myNumArray => [...myNumArray, rndNum]);
        if (myNumArray.indexOf(rndNum) < 0 && myArrayLen < 100){
          //  setMyNumArray(myNumArray => [...myNumArray, rndNum]);
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
        const mi = JSON.stringify(myData[selectedNumber].id);
        setTheMessage(ms.replace(/['"]+/g, ""));
        setTheId(mi.replace(/['"]+/g, ""));
    } ;

    const generatLastMessage = () =>{
        setLastMessage(theMessage);
    }
 
if (stageNum === 0){
  return (
    <View style={styles.mainScreen}>
        <View >      
            <Text style={styles.content}>Close your eyes and concentrate on the question you seek the answer from the universe</Text>
        </View>
        <View   style = {
                            timePassed === true
                              ? btnActive()
                              : btnDeactive()
                              
                          } >
            <TouchableOpacity
                       
                       onPress={() => save()}
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
            
             
            <View style={styles.mainSection}>
               
            <ScrollView vertical > 
                <Text style={styles.title}>{theTitle}</Text>    
                <Text style={styles.content}>{theMessage}</Text>
                <Text>id: {theId}</Text>
                <Text>num: {selectedNum}</Text>
                <Text>stage number: {stageNum}</Text>
             </ScrollView>
            </View> 
            
            <View style={styles.buttonCon}>
                <TouchableOpacity
                           // onPress={() => save()}
                           onPress={generateMessage}
                            style={[styles.button, styles.NewMessageBtn]}
                        >
                                <Text>Get Another Message</Text> 
                </TouchableOpacity> 
              {/* <TouchableOpacity
                     onPress={() => save()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Save</Text> 
                </TouchableOpacity> */}
                <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Remove</Text>  
                </TouchableOpacity> 
            </View>
            
        </SafeAreaView>
      );
}else {
    return(
    <SafeAreaView>
       
         {/* <View style={styles.historySec}>
                <Text>{myNumArray}</Text>
                <Text style={styles.content}>{theMessage}</Text>
                <MessageHistory messageNums={selectedNum}/>
        </View> */}
        <View>

            <TouchableOpacity
                            onPress={() => props.changeStage(5)}
                            style={[styles.button, styles.NewMessageBtn]}
                        >
                                <Text>Save Your messages</Text> 
                </TouchableOpacity> 
        </View>
           
     </SafeAreaView>
    );
}
};


const styles = StyleSheet.create({
    mainSection:{
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
        height:ScrHeight* 0.5,
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
    startButtonCon:{
        justifyContent: 'center',
        alignItems: 'center',
        height: ScrHeight* 0.2,
        display:'block',
    },
    buttonCon:{
        justifyContent: 'center',
        alignItems: 'center',
        height: ScrHeight* 0.3,
    
    },
    input:{
        borderWidth:1,
        borderColor:"black",
        alignSelf:"stretch",
      //  margin:32,
       // height:64,
        width:200,
      //  paddingHorizontal:16,
        fontSize:18
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
export default UniMessageMainSection;