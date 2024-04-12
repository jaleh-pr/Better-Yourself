
import React ,{ useState , useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions,ImageBackground, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const TodayChallenge = (props) => {
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
  setStageNum(4);
};

const removeGenerator = () => {
  Alert.alert('Are you sure that you want to delete all your challenges history?', '', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => remove()},
  ]);
}



useEffect(() => {
 // generateRandomNum();
  laod();
}, []
);

const undrestoodGenerator = () =>{
  setStageNum(2);
}

const startGenerator = () => {
  generateRandomNum();
  setStageNum(1);
  setSavedArrayL(theSavedArray.length);

};

const backToStartGenerator = () => {
  setStageNum(0);
}

// const dateGenerator = () => {
//   const today = JSON.stringify(new Date().getDate());
//   setTheDate(today);
// };

const changeHandler = () => {
 const SL = theSavedArray.length;
setTheSavedArray(theSavedArray.slice(0,SL-1)); //all the array except last one
generateRandomNum();
};

const generateRandomNum = () => {
  const theSavedArrayL = theSavedArray.length;
    let rndNum = Math.floor(0 + Math.random()* 170 );
    setChallengeMessage(rndNum);
  if (theSavedArray.indexOf(rndNum) < 0 ){
      setChallengeMessage(rndNum);
      setTheSavedArray(theSavedArray => [...theSavedArray, rndNum]);
  } else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL < 171){
    generateRandomNum();
  }else if (theSavedArray.indexOf(rndNum) > 0 && theSavedArrayL >= 171){
     setTheSavedArray (theSavedArray.slice(167,171));
     generateRandomNum();
  }
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
  for (let i = 0; i < AL; i++){
            let a = theSavedArray[i];
            const ST = JSON.stringify(challengesData[a].Title).replace(/['"]+/g, "");
            setTheSavedTitle (theSavedTitle => [...theSavedTitle, ST]);
  }

  // let i =AL ;
  // while(i>AL-5 && i>0){
  //             let a = theSavedArray[i];
  //            const ST = JSON.stringify(challengesData[a].Title).replace(/['"]+/g, "");
  //            setTheSavedTitle (theSavedTitle => [...theSavedTitle, ST]);

  // }
  setStageNum(stageNum+1);
  console.log('saved Title ',theSavedTitle);
};

const backFunction = () => {
  setStageNum(stageNum-1);
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
            <View style= {styles.mainBtnCon}>
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

}else if (stageNum === 1) {
  return(
    <SafeAreaView>
        <View style={styles.thirdMainScreen}>
            <Text style={styles.warningText}>Please remember, if you are under 16 years old or believe that any of the challenges given to you might hurt you, your family, or make things difficult for you, it's best to avoid taking part in them. It's important to prioritize your safety and well-being.</Text>
            <View style={styles.buttonCon}>
                <TouchableOpacity
                            onPress={() => undrestoodGenerator()}
                            style={styles.button}
                        >
                                <Text style={styles.buttonText}>I understood</Text> 
              </TouchableOpacity>
           </View>
        </View>
    </SafeAreaView>

  );
}else if (stageNum === 2){
  return (
    <SafeAreaView >

        <View style={styles.secondMainScreen}>  

               <ScrollView  vertical > 
                    <Text style={styles.secondHeaderText}>Your Today's Challenge</Text>
                    <TouchableOpacity
                     onPress={savedChallenges}
                     style={styles.historyBtn}
                >
                    
                    <Image
                        source={require('../assets/icons8-history-50.png')}
                        style= {{width:ScrWidth / 8, height: ScrHeight / 23, resizeMode: 'contain', }}
                    ></Image>
                </TouchableOpacity>
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
                {/* <TouchableOpacity
                     onPress={savedChallenges}
                     style={[styles.button, styles.historyBtn]}
                >
                        <Text>Your Accepted Challenges</Text> 
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                     onPress={() => remove()}
                     style={[styles.button,  styles.historyBtn]}
                >
                        <Text>Remove Your Challenge</Text> 
                </TouchableOpacity> */}
        </View>
    </SafeAreaView>
     );
    }else if (stageNum === 3){
      return(
      <SafeAreaView >

          <View style={styles.secondMainScreen}>  
              <ScrollView vertical  > 
                  <Text  style={styles.secondHeaderText}>Your 5 Recent Accepted Challenges</Text>
                
                  {itIsSaved 
                  ? theSavedTitle.reverse().slice(0,5).map((SavedT,i) =>(
                      <Text key={i} style={[styles.thirdHeaderText, styles.leftAlign]}>{i+1}.{' '+SavedT}</Text>
                  ))
                  : theSavedTitle.reverse().slice(1,6).map((SavedT,i) =>(
                      <Text key={i} style={[styles.thirdHeaderText, styles.leftAlign]}>{i+1}.{' '+SavedT}</Text>
                  ))}
              </ScrollView>
          </View>
          <View style={styles.twoButtonCon}>
                  <TouchableOpacity
                                onPress={backFunction}
                                style={styles.backButton}
                            >
                                    <Text style={styles.buttonText}>Back</Text> 
                  </TouchableOpacity>
                
                  <TouchableOpacity
                            onPress={removeGenerator}
                             style={styles.rowBtn}
                        >
                            <Image
                                source={require('../assets/icons8-delete-80.png')}
                                style= {{height: ScrHeight / 13, resizeMode: 'contain', width:ScrWidth / 9, marginBottom:10 }}
                            ></Image>
                  </TouchableOpacity>
              </View>
     </SafeAreaView>
     );
    }else if (stageNum === 4){
      return(
        <SafeAreaView >
          <View style={styles.thirdMainScreen}>
            <Text style={styles.secondHeaderText}>You have deleted all the accepted challenges history.</Text>
            {/* <View style={styles.buttonCon}>  
              <TouchableOpacity
                        onPress={() => backToStartGenerator()}
                        style={styles.button}
                    >
                            <Text style={styles.buttonText}>OK</Text> 
              </TouchableOpacity>
          </View> */}
          </View>
    </SafeAreaView>
     );
    }
  };
const styles = StyleSheet.create({

   firstMainScreen:{
    height:ScrHeight * 0.2,
    width:ScrWidth ,
    marginTop:ScrHeight * 0.1,
   // backgroundColor:"yellow",
  },
  secondMainScreen:{
    height:ScrHeight * 0.65,
    marginTop:ScrHeight * 0.02,
    padding: ScrHeight * 0.02,
  // backgroundColor:"gray",
 },
 thirdMainScreen:{
  height:ScrHeight * 0.4,
  marginTop:ScrHeight * 0.2,
  padding: ScrHeight * 0.02,
},
fourthMainScreen:{
  flex:1,
  height:ScrHeight * 0.5,
  width:ScrWidth *0.8, 
  justifyContent: 'center',
  alignItems: 'center',
  color: "black",
  paddingTop: 10,
  //backgroundColor:'yellow',
},
warningText:{
  textAlign:'justify',
  padding:ScrHeight * 0.03, 
  fontSize:ScrHeight * 0.02,
  lineHeight: ScrHeight * 0.031,
  color:'#2D5018',
  fontWeight:'bold',
},
 mainHeaderText:{
    fontSize:ScrHeight * 0.025,  
    marginTop:ScrHeight * 0.025,  
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:ScrHeight * 0.025,  
},
secondHeaderText:{
    flex:1,
    padding:ScrHeight * 0.03,  
    fontSize:ScrHeight * 0.018,
    fontWeight:'bold',
    textAlign:'center',
    color:'#2D5018'
},
thirdHeaderText:{
  textAlign:'center',
  padding:ScrHeight * 0.01, 
  fontSize:ScrHeight * 0.018,
  fontWeight:'bold',
  
},
paragraphText:{
    fontSize:ScrHeight * 0.018,  
    textAlign:'left',
    padding:ScrHeight * 0.018,  
},
leftAlign:{
  width: ScrWidth *0.8,
  textAlign:'left',
},
secBtnCon:{
  display:'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center',  
  width: ScrWidth *0.8,

},
mainBtnCon:{
  height: ScrHeight * 0.25,
  justifyContent: 'center',
  alignItems: 'center', 
},
buttonCon:{
 height: ScrHeight * 0.1,
 justifyContent: 'center',
 alignItems: 'center', 
},
twoButtonCon:{
  flexDirection: 'row',
  marginBottom:ScrHeight * 0.03,
  // backgroundColor:'#FBB651',
   width:ScrWidth * 0.7,
   marginLeft: ScrWidth * 0.1,
},
button:{
  width:ScrWidth * 0.6,
  justifyContent: 'center',
  alignItems: 'center',
  padding:ScrHeight * 0.02,  
  fontWeight:'bold',
  //borderColor:'#FBB651',
  borderRadius:10,
 // borderWidth:1,
  backgroundColor:'#FBB651'
},
backButton:{
  height: ScrHeight*0.05,
  width:ScrWidth * 0.2,
  justifyContent: 'center',
   alignItems: 'center',
  padding:ScrHeight * 0.01,  
  marginRight:ScrWidth * 0.3,
  marginTop: ScrHeight*0.01,
 // fontWeight:'bold',
  borderColor:'#FBB651',
  borderRadius:10,
  borderWidth:1,
  backgroundColor:'#FBB651'
},
acceptBtn:{
  padding:ScrWidth*0.04,
  margin:ScrWidth*0.01,
  width:ScrWidth * 0.4,
  backgroundColor:'#98DAE3',
},
changeBtn:{
  padding:ScrWidth*0.04,
  margin:ScrWidth*0.01,
  width:ScrWidth * 0.4,
  backgroundColor:'#DF6149',
},
historyBtn:{
  width:ScrWidth * 0.11,
  marginLeft:ScrWidth * 0.77,
  marginTop: -ScrHeight* 0.05,
  marginBottom: ScrHeight* 0.01,
},
buttonText:{
  fontWeight:'bold',
  fontSize: ScrHeight * 0.018,  
},
scrollView:{
  backgroundColor: '#F5F5F5',
   paddingTop:10,
   height:ScrHeight*0.6,
},
bgImage:{
  height:ScrHeight * 0.25,
  //width:ScrWidth,
  marginTop:ScrHeight * 0.01,  
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
export default TodayChallenge;