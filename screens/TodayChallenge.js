
import React ,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const TodayChalleng = (props) => {

  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}

  const challengesData = require("../Data/challengEnglish.json");
  const [myNumArray, setMyNumArray] = useState([]);
  const [theMessage, setTheMessage ] = useState("");
  const [myArrayLen, setMyArrayLen] = useState();

  
//let initialRndNum = Math.floor(0 + Math.random()* 4 );

const generateRandomNum = () => {
    let rndNum = Math.floor(0 + Math.random()* 7 );
    setChallengeMessage(rndNum);
    setMyNumArray(myNumArray => [...myNumArray, rndNum]);

  if (myNumArray.indexOf(rndNum) < 0 && myArrayLen <8 ){
      setChallengeMessage(rndNum);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
      
     // setMyArrayLen(myArrayLen+1);
  } else if (myNumArray.indexOf(rndNum) > 0 && myArrayLen<8 ){
     
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
  setTheMessage(chaD.replace(/['"]+/g, ""));
  
} ;


  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                Today's Challeng
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

                <View>
                   <Text>{theMessage}</Text>
                </View>
           
          
            <TouchableOpacity
                     onPress={() => onLanNumProps(0)}
                >
                    <View>
                        <Text>Back</Text> 
                    </View>
                </TouchableOpacity>
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
export default TodayChalleng;