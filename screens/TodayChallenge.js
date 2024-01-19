
import React ,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChalleng = (props) => {

  const [stageNum, setStageNum] = useState(0);
  const challengesData = require("../Data/challengEnglish.json");
  const [myNumArray, setMyNumArray] = useState([]);
  const [theTitle, setTheTitle ] = useState("");
  const [theMessage, setTheMessage ] = useState("");
  const [theExample, setTheExample ] = useState("");
  const [myArrayLen, setMyArrayLen] = useState();


//let initialRndNum = Math.floor(0 + Math.random()* 4 );

const generateRandomNum = () => {
    let rndNum = Math.floor(0 + Math.random()* 7 );
    setChallengeMessage(rndNum);
    setMyNumArray(myNumArray => [...myNumArray, rndNum]);
    setStageNum(stageNum+1);
  if (myNumArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
      
     // setMyArrayLen(myArrayLen+1);
  } else if (myNumArray.indexOf(rndNum) > 0  ){
     
         setChallengeMessage(rndNum+1);
        setMyNumArray(myNumArray => [...myNumArray, rndNum+1]);

  }else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen >= 8){

      setMyNumArray ([]);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
  }
  setMyArrayLen(myNumArray.length);
  console.log(myNumArray);
  console.log(rndNum);
};

const setChallengeMessage = (selectedNumber) => {
  const chaD = JSON.stringify(challengesData[selectedNumber].Decscription);
  const chaT = JSON.stringify(challengesData[selectedNumber].Title);
  const chaE = JSON.stringify(challengesData[selectedNumber].Example);
  setTheMessage(chaD.replace(/['"]+/g, ""));
  setTheTitle(chaT.replace(/['"]+/g, ""));
  setTheExample(chaE.replace(/['"]+/g, ""))
} ;

if (stageNum === 0){

  return (
    <View style={styles.mainSection}>
            
            <View>
                <Text>
                See Your Challeng For Today
                </Text>
            </View>
            <TouchableOpacity
                     onPress={() => generateRandomNum()}
                     style={styles.button}
                >
                    <View>
                        <Text>Start</Text> 
                        
                    </View>
                </TouchableOpacity>

                {/* <View>
                  <Text>{theTitle}</Text>
                   <Text>{theMessage}</Text>
                   <Text>Example: {theExample}</Text>
                </View>
                 */}
          
        
    </View>
  );
}else if (stageNum === 1){
  return (
    <SafeAreaView style={styles.mainSection}>

        <View style={styles.content}>  
               
               <ScrollView vertical > 
                    <Text style={styles.title}>{theTitle}</Text>
                   <Text style={styles.Dec}>{theMessage}</Text>
                   <Text style={styles.Example}>Examples: {theExample}</Text>
               </ScrollView>
        </View>
        <View style={styles.buttonCon}>
               <TouchableOpacity
                     onPress={() => generateRandomNum()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Change Your Challenge</Text> 
                </TouchableOpacity>
        </View>
    </SafeAreaView>
     );
    }else if (stageNum === 2){
      return(
      <SafeAreaView style={styles.mainSection}>

          <View style={styles.content}>  
                
          <ScrollView vertical > 
                    <Text style={styles.title}>{theTitle}</Text>
                   <Text style={styles.Dec}> {theMessage}</Text>
                   <Text style={styles.Example}>Examples: {theExample}</Text>
               </ScrollView>
          </View>
          <View style={styles.buttonCon}>
              <TouchableOpacity
                        //  onPress={() => generateRandomNum()}
                          style={styles.button}
                      >
                          
                              <Text>Save your challenge</Text> 
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
content:{
  padding:15,
  fontSize:16,
  textAlign:'justify',
  overflow:'scroll',


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
  buttonCon:{
    justifyContent: 'center',
    alignItems: 'center',
    height: ScrHeight* 0.2,

  },
  ChangeChallengeBtn:{

  },
  title:{   
    fontSize:16,
    fontWeight:'bold' ,
    marginBottom:10
},
Dec:{
  fontSize:14,
  marginBottom:10
}
})
export default TodayChalleng;