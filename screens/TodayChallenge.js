
import React ,{ useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChalleng = (props) => {
  const [theDate , setTheDate] = useState("");
   const [savedChallengeNum, setSavedChallengeNum] = useState("");
  // const [mySavedChallenge, setMySavedChallenge] = useState("");
  const [stageNum, setStageNum] = useState(0);
  const challengesData = require("../Data/challengEnglish.json");
  const [myNumArray, setMyNumArray] = useState([]);
  const [theSavedArray, setTheSavedArray] = useState([]);
  const [theTitle, setTheTitle ] = useState("");
  const [fiveLast, setFiveLast ] = useState([]);
  const [theSavedTitle, setTheSavedTitle ] = useState([]);
  const [theMessage, setTheMessage ] = useState("");
  const [theExample, setTheExample ] = useState("");
  const [myArrayLen, setMyArrayLen] = useState(0);

  const [savedTitle, setSavedTitle ] = useState("");




const save = async () => {
try{
    await AsyncStorage.setItem( 'SavedArray' ,JSON.stringify( theSavedArray));

   } catch(err) {
       alert(err);
   }
};

const laod = async () => {
  try{
    let theSavedArray = await AsyncStorage.getItem('SavedArray');

    if(theSavedArray !== null){
     setTheSavedArray(JSON.parse(theSavedArray));
    }
  } catch (err){
    alert(err);
  }
};

const remove = async () => {
  try{
    await AsyncStorage.removeItem ("SavedArray");
  } catch (err) {
    alert(err)
  }finally{
    setTheSavedArray("");
  }
};

useEffect(() => {
  generateRandomNum();
  laod();
}, []
);


const startGenerator = () => {
  
  setStageNum(stageNum+1);
  setTheSavedArray(theSavedArray => [...theSavedArray,savedChallengeNum]);
};


// const dateGenerator = () => {
//   const today = JSON.stringify(new Date().getDate());
//   setTheDate(today);
// };

const generateRandomNum = () => {
  const theArrayL = myNumArray.length;
    let rndNum = Math.floor(0 + Math.random()* 100 );
    setChallengeMessage(rndNum);
  if (myNumArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
      //console.log("my array",myNumArray); 
  } else if (myNumArray.indexOf(rndNum) > 0 && theArrayL < 100){
    generateRandomNum();
  }else if (myNumArray.indexOf(rndNum) > 0 && theArrayL >= 100){
      setMyNumArray ([]);
      setMyNumArray(myNumArray => [...myNumArray, rndNum]);
  }
  setMyArrayLen(myNumArray.length);
  setSavedChallengeNum(rndNum);
  //console.log("random num:",savedChallengeNum);
  console.log("theSavedArray", theSavedArray);
};

const setChallengeMessage = (selectedNumber) => {
  const chaD = JSON.stringify(challengesData[selectedNumber].Decscription);
  const chaT = JSON.stringify(challengesData[selectedNumber].Title);
  const chaE = JSON.stringify(challengesData[selectedNumber].Example);
  setTheMessage(chaD.replace(/['"]+/g, ""));
  setTheTitle(chaT.replace(/['"]+/g, ""));
  setTheExample(chaE.replace(/['"]+/g, ""));
} ;

const savedChallenges = () => {
  const AL = theSavedArray.length;
  let anArray = theSavedArray.slice(AL-5, AL);
  //setFiveLast(anArray);
  console.log('five last ',fiveLast);

  for (let i = 0; i < 5; i++){
      let a = anArray[i];
      const ST = JSON.stringify(challengesData[a].Title).replace(/['"]+/g, "");
      setTheSavedTitle (theSavedTitle => [...theSavedTitle, ST]);
  }
  setStageNum(2);
};

const backFunction = () => {
  setStageNum(1);
  setTheSavedTitle([]);
}

const removeHistory = () => {
  setTheSavedTitle([]);
  setTheSavedArray([]);
}
//const savedChallenges = () => {
  // setStageNum(2);
//  console.log("theSavedArrayLength", theSavedArray.length);
// const lastArray = theSavedArray[theSavedArray.length-2];


//  const savedT = JSON.stringify(challengesData[lastArray].Title);
//     setSavedTitle(savedT.replace(/['"]+/g, ""));

// for (let i = 0; i < theSavedArray.length-1; i++) {
//   const savedT = JSON.stringify(challengesData[0].Title);
//   setSavedTitle(savedT.replace(/['"]+/g, ""));
//   };  
//};

if (stageNum === 0){

  return (
    <SafeAreaView>
            
            <View style={styles.secondMainScreen}>
                <Text style={styles.secondHeaderText}>
                See Your Challeng For Today
                </Text>
            </View>
            <View style= {styles.buttonCon}>
              <TouchableOpacity
                      onPress={startGenerator}
                      style={styles.button}
                  >
                          <Text style={styles.buttonText}>Start</Text> 
                </TouchableOpacity> 
              </View>
    </SafeAreaView>
  );
}else if (stageNum === 1){
  return (
    <SafeAreaView >

        <View style={styles.secondMainScreen}>  
        <Text style={styles.mainHeaderText}>Your Today Challenge</Text>
               <ScrollView vertical > 
               
                    <Text style={styles.secondHeaderText}>{theTitle}</Text>
                   <Text style={styles.paragraphText}>{theMessage}</Text>
                   <Text style={styles.paragraphText}> {theExample}</Text>
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
                     onPress={() => save()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Accept the challenge</Text> 
                </TouchableOpacity>
                {/* <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Remove Your Challenge</Text> 
                </TouchableOpacity> */}
                <TouchableOpacity
                     onPress={savedChallenges}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Your previous Challenges</Text> 
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
      <SafeAreaView >

          <View style={styles.secondMainScreen}>  
              <ScrollView vertical > 
              {theSavedTitle.map((SavedT,i) =>(
                  <Text key={i} style={styles.thirdHeaderTex}>{i+1}.{SavedT}</Text>
              ))}
                {/* {fiveLast.map((SavedT,i) =>(
                  <Text key={i} style={styles.thirdHeaderTex}>{i+1}.{ SavedT}</Text>
              ))} */}
              </ScrollView>
          </View>
          <View style={styles.buttonCon}>
             {/* <TouchableOpacity
                        onPress={removeHistory}
                        style={[styles.button, styles.ChangeChallengeBtn]}
                    >
                            <Text style={styles.buttonText}>Remove history</Text> 
              </TouchableOpacity> */}
              <TouchableOpacity
                        onPress={backFunction}
                        style={[styles.button, styles.ChangeChallengeBtn]}
                    >
                            <Text style={styles.buttonText}>Back</Text> 
              </TouchableOpacity>
          </View>
     </SafeAreaView>
     );
    }else if (stageNum === 3){
      return(
      <SafeAreaView style={styles.mainSection}>
         <Text>There is no history</Text>
          <View style={styles.content}>  
          <TouchableOpacity
                     onPress={backFunction}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Back</Text> 
                </TouchableOpacity>
        </View>
        
         
     </SafeAreaView>
     );
    }
  };
const styles = StyleSheet.create({
  mainScreen:{
    height:ScrHeight * 0.6,
     // flex:1,
      // justifyContent: 'center',
      // alignItems: 'center',
      marginTop:30,
      marginBottom:30,
      padding: 20,
  },
   firstMainScreen:{
     height:ScrHeight * 0.3,
     marginTop:30,
     marginBottom:10,
     padding: 20,
   // backgroundColor:"yellow",
  },
  secondMainScreen:{
    height:ScrHeight * 0.4,
    marginTop:30,
    marginBottom:10,
    padding: 20,
  // backgroundColor:"yellow",
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
thirdHeaderTex:{
  marginTop:10,
  //marginBottom:10,
  fontSize:16,
  fontWeight:'bold',
  textAlign:'left',
},
paragraphText:{
    fontSize:15,
    textAlign:'justify',
   // textAlign:'center',
    padding:20,
},
buttonCon:{
  //  height: ScrHeight * 0.2,
    marginTop:15,
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
    backgroundColor:'#FBB651',
    marginTop:10
},
buttonText:{
    fontWeight:'bold',
    fontSize: 16
},
inputCon:{
    marginTop:25,
},
pickerSelectStyles:{
    width: ScrWidth * 0.5,
    marginTop:5,
    padding:5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor:'gray',
    borderRadius:5
},
scrollView:{
    backgroundColor: '#F5F5F5',

}
})
export default TodayChalleng;