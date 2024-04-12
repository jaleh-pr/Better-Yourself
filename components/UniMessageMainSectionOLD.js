
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar, SafeAreaView, ScrollView, TextInput} from 'react-native';


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
    const [selectedNum, setSelectedNum] = useState();
    const [btnAct , setBtnAct] = useState(1);
    const [timePassed, setTimePassed] = useState (true);
    
    const btnActive = () => {
        return{
            display:"block"
        };
    };

    const btnDeactive = () => {
        return{
           display:"none",
        };
    };

    // const save = async () => {
    //     console.log(stageNum);
    //    setStageNum(3);
    //     try{
    //         await AsyncStorage.setItem( "TheMessage" , theMessage);
    //     // generateMessage();
        
    //     } catch(err) {
    //         alert(err);
    //     }
    // };

    // const laod = async () => {
    // try{
    //     let theMessage = await AsyncStorage.getItem("TheMessage");
    //     if(theMessage !== null){
    //     setTheMessage(theMessage);
    //     }
    // } catch (err){
    //     alert(err);
    // }
    // };


    // const remove = async () => {
    // try{
    //     await AsyncStorage.removeItem ("TheMessage");
    // } catch (err) {
    //     alert(err)
    // }finally{
    //     setTheMessage("");
    // }
    // setStageNum(stageNum+1);
    // };


    // useEffect(() => {

    //     laod();
    //     generateMessage();
    //    // setTimeout(() => save(), 10000);
    //    // setTimeout(() => setTimePassed(true), 35000);
    
    // }, []
    // );
    
    const nextGenerator = () => {
        generateMessage();
       // setTimePassed(false);  
    };



    const generateMessage = () => {
        setStageNum(2);
        let rndNum = Math.floor(0 + Math.random()* 143 );
        setBtnAct(0);
        setMyArrayLen(myNumArray.length);
        setUniverseMessage(rndNum);
        setSelectedNum(rndNum);
        setMyNumArray(myNumArray => [...myNumArray, rndNum]);

        if (myNumArray.indexOf(rndNum) < 0 && myArrayLen < 100){
            setUniverseMessage(rndNum);
            setMyArrayLen(myArrayLen+1);
        } else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen < 100){
            generateMessage();
        }else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen >= 100){
            setMyNumArray ([]);
            generateMessage();
        }

    };

   

    const setUniverseMessage = (selectedNumber) => {
        const ms = JSON.stringify(myData[selectedNumber].message);
        const mi = JSON.stringify(myData[selectedNumber].id);
        setTheMessage(ms.replace(/['"]+/g, ""));
        setTheId(mi.replace(/['"]+/g, ""));
    } ;

 
 
if (stageNum === 0){
  return (
    <SafeAreaView>
        <View style={styles.firstMainScreen}>
                 <Text style={styles.mainHeaderText}> Universe Message</Text> 
                <Text style={styles.secondHeaderText}>Close your eyes and concentrate on the question you seek the answer from the universe</Text>
        
        </View>
        <View  style={styles.buttonCon} >
       
            <TouchableOpacity
                       
                       onPress={generateMessage}
                       style={styles.button}
                      
                    >
                            <Text style={styles.buttonText}>start</Text> 
            </TouchableOpacity> 
        </View>
    </SafeAreaView>
  );
}else if (stageNum ==2 ) {
    return (
        <SafeAreaView>
            <View style={styles.mainScreen}>
                <Text style={styles.secondHeaderText}>{theTitle}</Text>  
                <ScrollView vertical style={styles.scrollView} >   
                    <Text style= {styles.paragraphText}>{theMessage}</Text>
                    {/* <Text>id: {theId}</Text>
                    <Text>num: {selectedNum}</Text>
                    <Text>stage number: {stageNum}</Text> */}
                </ScrollView>
            </View> 
            
            <View style={styles.buttonCon}>
                <TouchableOpacity
                           // onPress={() => save()}
                           onPress={generateMessage}
                           style={styles.button}
                        //    style = {[
                        //     timePassed == true
                        //       ? btnActive()
                        //       : btnDeactive()   
                        //   , styles.button]}
                        >
                                <Text style={styles.buttonText}>Get Another Message</Text> 
                </TouchableOpacity> 
              {/* <TouchableOpacity
                     onPress={() => save()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Save</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Remove</Text>  
                </TouchableOpacity>  */}
            </View>
            
        </SafeAreaView>
      );
}else if(stageNum ==3 ){
    return(
    <SafeAreaView>
       
        <Text>You have seen all your messages for today</Text>
           
     </SafeAreaView>
    );
}
};


const styles = StyleSheet.create({
    mainScreen:{
          height:ScrHeight * 0.5,
          marginTop:30,
          marginBottom:10,
          padding: 20,
      },
      firstMainScreen:{
         height:ScrHeight * 0.3,
         marginTop:30,
         marginBottom:10,
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
        padding:20,
    },
    buttonCon:{
       height: ScrHeight * 0.2,
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
    scrollView:{
        backgroundColor: '#F5F5F5',
       
      }


})
export default UniMessageMainSection;