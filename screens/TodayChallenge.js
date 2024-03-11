
import React ,{ useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChalleng = (props) => {
   const [savedChallengeNum, setSavedChallengeNum] = useState("");
  const [stageNum, setStageNum] = useState(0);
  const challengesData = require("../Data/challengEnglish.json");
  const [theSavedArray, setTheSavedArray] = useState([]);
  const [theTitle, setTheTitle ] = useState("");
  const [theSavedTitle, setTheSavedTitle ] = useState([]);
  const [theMessage, setTheMessage ] = useState("");
  const [theExample, setTheExample ] = useState("");



const save = async () => {
  
try{
    await AsyncStorage.setItem( 'SavedArray' ,JSON.stringify( theSavedArray));

   } catch(err) {
       alert(err);
   };
  
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

const saveHandler = () =>{
  setTheSavedArray(theSavedArray => [...theSavedArray, savedChallengeNum]);
  save();
 };

const startGenerator = () => {
  generateRandomNum();
  setStageNum(stageNum+1);
 // setTheSavedArray(theSavedArray => [...theSavedArray,savedChallengeNum]);
};

// const dateGenerator = () => {
//   const today = JSON.stringify(new Date().getDate());
//   setTheDate(today);
// };

const changeHandler = () => {
  const SL = theSavedArray.length;
setTheSavedArray(theSavedArray.slice(0,SL-1));
generateRandomNum();
};

const generateRandomNum = () => {
  const theSavedArrayL = theSavedArray.length;
    let rndNum = Math.floor(0 + Math.random()* 10 );
    setChallengeMessage(rndNum);
  if (theSavedArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
     // setSavedChallengeNum(rndNum);
      setTheSavedArray(theSavedArray => [...theSavedArray, rndNum]);
  } else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL < 10){
    generateRandomNum();
  }else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL >= 10){
      setTheSavedArray (theSavedArray.slice(5,10));
     generateRandomNum();
  }
 
  console.log("theSavedArray", theSavedArray);
  console.log("theSavedArrayLength", theSavedArrayL);
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
  for (let i = 0; i < AL-1; i++){
            let a = theSavedArray[i];
            const ST = JSON.stringify(challengesData[a].Title).replace(/['"]+/g, "");
            setTheSavedTitle (theSavedTitle => [...theSavedTitle, ST]);
  }
  
  setStageNum(2);
  console.log('saved Title ',theSavedTitle);
};

const backFunction = () => {
  setStageNum(1);
  setTheSavedTitle([]);
}


if (stageNum === 0){

  return (
    <SafeAreaView>
            
            <View style={styles.secondMainScreen}>
                <Text style={styles.mainHeaderText}>Your Today's Challenge</Text>
                <Text style={styles.secondHeaderText}>
                Click start to see what your challenge for today is.
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
        <Text style={styles.mainHeaderText}>Your Today's Challenge</Text>
               <ScrollView vertical > 
               
                    <Text style={styles.secondHeaderText}>{theTitle}</Text>
                   <Text style={styles.paragraphText}>{theMessage}</Text>
                   <Text style={styles.paragraphText}>{theExample}</Text>
               </ScrollView>
              
        </View>
        
        <View style={styles.buttonCon}>
               <TouchableOpacity
                     onPress={() => changeHandler()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>Change Your Challenge</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => save()}
                     style={[styles.button, styles.ChangeChallengeBtn]}
                >
                        <Text>save the challenge</Text> 
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
                        <Text>Your previous Challenges</Text> 
                </TouchableOpacity>
        </View>
        <Text>saved array:{theSavedArray}</Text>
        {/* <View>
          <Text>Current:{savedChallengeNum}</Text>
          
          <Text>Date: {theDate}</Text>
        </View> */}
    </SafeAreaView>
     );
    }else if (stageNum === 2){
      return(
      <SafeAreaView >

          <View style={styles.secondMainScreen}>  
              <ScrollView vertical > 
                
              {theSavedTitle.reverse().slice(0,5).map((SavedT,i) =>(
                  <Text key={i} style={styles.thirdHeaderTex}>{i+1}.{SavedT}</Text>
              ))}
              </ScrollView>
          </View>
          <View style={styles.buttonCon}>
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
    marginTop:-15,
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