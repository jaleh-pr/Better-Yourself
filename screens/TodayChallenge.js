
import React ,{ useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChalleng = (props) => {
  const [theDate , setTheDate] = useState("");
   const [savedChallengeNum, setSavedChallengeNum] = useState();
  // const [mySavedChallenge, setMySavedChallenge] = useState("");
  const [stageNum, setStageNum] = useState(0);
  const challengesData = require("../Data/challengEnglish.json");
  const [myNumArray, setMyNumArray] = useState([]);
  const [theSavedArray, setTheSavedArray] = useState([]);
  const [theTitle, setTheTitle ] = useState("");
  const [theMessage, setTheMessage ] = useState("");
  const [theExample, setTheExample ] = useState("");
  const [myArrayLen, setMyArrayLen] = useState(0);


// const save = async () => {
//   try{
//     await AsyncStorage.setItem( "MyName" , name);

//    } catch(err) {
//        alert(err);
//    }
// };

// const laod = async () => {
//   try{
//     let name = await AsyncStorage.getItem("MyName");

//     if(name !== null){
//       setName(name);
//     }
//   } catch (err){
//     alert(err);
//   }
// };

// const remove = async () => {
//   try{
//     await AsyncStorage.removeItem ("MyName");
//   } catch (err) {
//     alert(err)
//   }finally{
//     setName("");
//   }
// };

// useEffect(() => {
//   laod();
// }, []
// );

const save = async () => {
  
  try{
    await AsyncStorage.setItem( '@MySuperStore:key' ,JSON.stringify( theSavedArray));

   } catch(err) {
       alert(err);
   }
};

const laod = async () => {
  try{
    let theSavedArray = await AsyncStorage.getItem('@MySuperStore:key');

    if(theSavedArray !== null){
     setTheSavedArray(JSON.parse(theSavedArray));
     console.log(JSON.parse(theSavedArray));
    }
  } catch (err){
    alert(err);
  }
};

const remove = async () => {
  try{
    await AsyncStorage.removeItem ("@MySuperStore:key");
  } catch (err) {
    alert(err)
  }finally{
    setTheSavedArray("");
  }
};

useEffect(() => {
  
  laod();
 // save();
}, []
);

const startGenerator = () => {
  setStageNum(stageNum+1);
  generateRandomNum();
  dateGenerator();
 
}
const dateGenerator = () => {
  const today = JSON.stringify(new Date().getDate());
  setTheDate(today);
};

const generateRandomNum = () => {
  const theArrayL = myNumArray.length;
    let rndNum = Math.floor(0 + Math.random()* 7 );
    setChallengeMessage(rndNum);
    setSavedChallengeNum(rndNum);
  if (myNumArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
      
      console.log("my array",myNumArray); 
  } else if (myNumArray.indexOf(rndNum) > 0 && theArrayL < 7){
    generateRandomNum();
  }else if (myNumArray.indexOf(rndNum) > 0 && theArrayL >= 7){

      setMyNumArray ([]);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
  }
  setMyArrayLen(myNumArray.length);
  
  console.log("random num:",savedChallengeNum);
  console.log("length:",theArrayL)
};

const setChallengeMessage = (selectedNumber) => {
  const chaD = JSON.stringify(challengesData[selectedNumber].Decscription);
  const chaT = JSON.stringify(challengesData[selectedNumber].Title);
  const chaE = JSON.stringify(challengesData[selectedNumber].Example);
  setTheMessage(chaD.replace(/['"]+/g, ""));
  setTheTitle(chaT.replace(/['"]+/g, ""));
  setTheExample(chaE.replace(/['"]+/g, ""));
} ;

const saveGenerator = () => {
  setTheSavedArray(theSavedArray => [...theSavedArray,savedChallengeNum]);
  save(); 
};

const savedChallenges = () => {

 setMyArrayLen(theSavedArray.length);
const lastArray = theSavedArray[myArrayLen];
setStageNum(2);
setChallengeMessage(lastArray);
};


if (stageNum === 0){

  return (
    <View style={styles.mainSection}>
            
            <View>
                <Text>
                See Your Challeng For Today
                </Text>
            </View>
            <TouchableOpacity
                     onPress={() => startGenerator()}
                     style={styles.button}
                >
                    <View>
                        <Text>Start</Text> 
                        
                    </View>
                </TouchableOpacity> 
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
                <TouchableOpacity
                     onPress={saveGenerator}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Save Your Challenge</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Remove Your Challenge</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={savedChallenges}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>See Your pervious Challenges</Text> 
                </TouchableOpacity>
        </View>
        <View>
          <Text>Current:{savedChallengeNum}</Text>
          <Text>saved array:{theSavedArray}</Text>
          <Text>Date: {theDate}</Text>
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
      marginTop:5,
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