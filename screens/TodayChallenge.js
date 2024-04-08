
import React ,{ useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChalleng = (props) => {
  // const [savedChallengeNum, setSavedChallengeNum] = useState("");
  const [stageNum, setStageNum] = useState(0);
  const challengesData = require("../Data/challengEnglish.json");
  const [theSavedArray, setTheSavedArray] = useState([]);
  const [theTitle, setTheTitle ] = useState("");
  const [theSavedTitle, setTheSavedTitle ] = useState([]);
  const [theMessage, setTheMessage ] = useState("");
  const [theExample, setTheExample ] = useState("");
  const [btnAct , setBtnAct] = useState(1);
  const [changeBtnDisable , setChangeBtnDisable] = useState(false);
  const [savedArrayL, setSavedArrayL] = useState();
  const [itIsSaved, setItIsSaved] = useState(false);

  const ChangeBtn = () => {
    setChangeBtnDisable(true)
  }

const save = async () => {
  
try{
    await AsyncStorage.setItem( 'SavedArray' ,JSON.stringify(theSavedArray));

   } catch(err) {
       alert(err);
   };
   ChangeBtn();
   setBtnAct(0);
   setItIsSaved(true);
   //setSavedArrayL(savedArrayL+1);
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
    setTheSavedArray([]);
  }
};


useEffect(() => {
 // generateRandomNum();
  laod();
}, []
);


const startGenerator = () => {
  generateRandomNum();
  setStageNum(stageNum+1);
  setSavedArrayL(theSavedArray.length);
 // setTheSavedArray(theSavedArray => [...theSavedArray,savedChallengeNum]);
};

// const dateGenerator = () => {
//   const today = JSON.stringify(new Date().getDate());
//   setTheDate(today);
// };

const changeHandler = () => {
 const SL = theSavedArray.length;
setTheSavedArray(theSavedArray.slice(0,SL-1)); //all the array except last one
//setTheSavedArray(theSavedArray.slice(0,savedArrayL-1));
generateRandomNum();
};

const generateRandomNum = () => {
  const theSavedArrayL = theSavedArray.length;
    let rndNum = Math.floor(0 + Math.random()* 15 );
    setChallengeMessage(rndNum);
  if (theSavedArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
     // setSavedChallengeNum(rndNum);
      setTheSavedArray(theSavedArray => [...theSavedArray, rndNum]);
  } else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL < 10){
    generateRandomNum();
  }else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL >= 10){
     // setTheSavedArray (theSavedArray.slice(5,10));
     setTheSavedArray (theSavedArray.slice(4,10));
     generateRandomNum();
  }
 
  // console.log("theSavedArray", theSavedArray);
  // console.log("theSavedArrayLength", theSavedArrayL);
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
  // if(AL < 10){
  for (let i = 0; i < AL; i++){
            let a = theSavedArray[i];
            const ST = JSON.stringify(challengesData[a].Title).replace(/['"]+/g, "");
            setTheSavedTitle (theSavedTitle => [...theSavedTitle, ST]);
  }
// }else{
//   setTheSavedArray(theSavedTitle.reverse().slice(0,7));
// }
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

            <View style={styles.firstMainScreen}>
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
              <ImageBackground source={require('../assets/challenge.png')} resizeMode="cover" style={styles.bgImage}>
          
              </ImageBackground>
    </SafeAreaView>
  );
}else if (stageNum === 1){
  return (
    <SafeAreaView >

        <View style={styles.secondMainScreen}>  
              
               <ScrollView  vertical > 
                    <Text style={styles.secondHeaderText}>Your Today's Challenge</Text>
                    <View style={styles.scrollView}>
                        <Text style={styles.thirdHeaderText}>{theTitle}</Text>
                        <Text style={styles.paragraphText}>{theMessage}</Text>
                        <Text style={styles.paragraphText}>{theExample}</Text>
                   </View>
               </ScrollView>
              
        </View>
        
        <View style={styles.buttonCon}>
             <View style={styles.secBtnCon}>
                  <TouchableOpacity
                        disabled={changeBtnDisable}
                        onPress={() => changeHandler()}
                        style={[styles.button, styles.changeBtn, btnAct === 1
                          ? styles.btnActive
                          : styles.btnDeactive]}
                    >
                            <Text style={styles.buttonText}>Change It</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => save()}
                        style={[styles.button, styles.acceptBtn]}
                    >
                            <Text style={styles.buttonText}>Accept It</Text> 
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                     onPress={savedChallenges}
                     style={[styles.button, styles.historyBtn]}
                >
                        <Text>Your Accepted Challenges</Text> 
                </TouchableOpacity>
                {/* <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button,  styles.historyBtn]}
                >
                        <Text>Remove Your Challenge</Text> 
                </TouchableOpacity> */}
        </View>
        {/* <Text style={ styles.marginTop}>saved array:{theSavedArray}</Text>
        <Text>array l:{theSavedArray.length}</Text> */}
 
    </SafeAreaView>
     );
    }else if (stageNum === 2){
      return(
      <SafeAreaView >

          <View style={styles.secondMainScreen}>  
              <Text>Your 7 recent challenges</Text>
              <ScrollView vertical > 
              {itIsSaved 
              ? theSavedTitle.reverse().slice(0,6).map((SavedT,i) =>(
                  <Text key={i} style={styles.thirdHeaderText}>{i+1}.{SavedT}</Text>
              ))
              : theSavedTitle.reverse().slice(1,7).map((SavedT,i) =>(
                  <Text key={i} style={styles.thirdHeaderText}>{i+1}.{SavedT}</Text>
              ))}
              </ScrollView>
          </View>
          <View style={styles.buttonCon}>
              <TouchableOpacity
                        onPress={backFunction}
                        style={[styles.backButton]}
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
                     style={[styles.button]}
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
    height:ScrHeight * 0.5,
    marginTop:30,
    marginBottom:10,
    padding: 20,
  // backgroundColor:"gray",
 },
 mainHeaderText:{
  fontSize:22,
  marginTop:25,
  textAlign:'center',
  fontWeight:'bold',
  marginBottom:20
},
secondHeaderText:{
 // height: ScrHeight * 0.2,
  flex:1,
   marginTop:5,
   marginBottom:25,
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center',
  color:'#2D5018'
},
thirdHeaderText:{
  textAlign:'center',
  //marginTop:5,
  //marginBottom:10,
  fontSize:16,
  fontWeight:'bold',
  
},
paragraphText:{
    fontSize:15,
    textAlign:'justify',
   // textAlign:'center',
    padding:20,
},
secBtnCon:{
  display:'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center',  
  width: ScrWidth *0.8,
  marginTop: 10,

},
buttonCon:{
 // height: ScrHeight * 0.2,
  justifyContent: 'center',
  alignItems: 'center', 
},
button:{
    width:ScrWidth * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    fontWeight:'bold',
   // borderColor:'#FBB651',
    borderRadius:10,
   // borderWidth:1,
    backgroundColor:'#FBB651',
    marginTop:10
},
backButton:{
  width:ScrWidth * 0.2,
  justifyContent: 'center',
  alignItems: 'center',
  padding:10,
  marginRight:ScrWidth * 0.7,
  fontWeight:'bold',
  borderColor:'#FBB651',
  borderRadius:10,
  borderWidth:1,
  backgroundColor:'#FBB651'
},
acceptBtn:{
  padding:10,
  margin:ScrWidth*0.01,
  width:ScrWidth * 0.4,
  backgroundColor:'#98DAE3',
},
changeBtn:{
  padding:10,
  margin:ScrWidth*0.01,
  width:ScrWidth * 0.4,
  backgroundColor:'#DF6149',
},
historyBtn:{
  borderColor:'#FBB651',
  borderWidth:1,
  padding:0
 // marginBottom:30,
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
   paddingTop:10,
   
},
bgImage:{
  height:ScrHeight*0.25,
  width:ScrWidth,
},
btnActive:{
  opacity: 1,
},
btnDeactive:{
  opacity: 0.5,
  disabled:true
},
marginTop:{
  marginTop:50,
}
})
export default TodayChalleng;