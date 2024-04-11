
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;



const PersonalityTest = (props) => {

    const PersonalityTestData = require("../Data/PersonalityTestEn.json");
    const PersonalityAnswerData = require("../Data/PersonalityAnswerEn.json");

    const [pageNum , setPageNum ] = useState(0);
    const [questionNum , setQuestionNum ] = useState(0);
    const [questionSec, setQuestionSec ] = useState("");
    const [theQuestion, setTheQuestion] = useState("");
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [option4, setOption4] = useState();
    const [option5, setOption5] = useState();
    const [scoreD, setScoreD] = useState(0);
    const [scoreI, setScoreI] = useState(0);
    const [scoreC, setScoreC] = useState(0);
    const [scoreS, setScoreS] = useState(0);
    const [personType, setPersonType] = useState("");
    const [myValue, setMyValue] = useState(0);
    const [maxNum, setMaxNum] = useState();
    const [secondMaxNum, setSecondMaxNum] = useState();
    const [typeAnalysis, SetTypeAnalysis] = useState();
    const [myArray, setMyArray] = useState([]);
    const [btnAct , setBtnAct] = useState(0);
    const [nextDisable , setNextDisable] = useState(true);

  
    const generateRandomNum = () => {
        const rndNum = Math.floor(Math.random() * 20 ) ;
        if(myArray.indexOf(rndNum) < 0 ){
            setMyArray((myArray) => [...myArray , rndNum]);
            setQuestionNum(rndNum);
            setQuestionAnswers(rndNum);   
        } else {
            generateRandomNum();
        }
    };

    const StartExam = () => {
        setPageNum(pageNum + 1);
        generateRandomNum();
       setPersonType("");
    };
    const NextQuestion = () => {
        let theValue = myValue;
        
        if(pageNum < 20){
            setPageNum(pageNum + 1);
            generateRandomNum();
            if(radioProps[5] === "D"){
                setScoreD(scoreD + theValue);
            }else if(radioProps[5] === "I"){
                setScoreI(scoreI + theValue);
            }else if(radioProps[5] === "S"){
                setScoreS(scoreS + theValue);
            }else if(radioProps[5] === "C"){
                setScoreC(scoreC + theValue);
            }
            setMyValue(0);
            setBtnAct(0);
            setNextDisable(true);
        }else{
            setPageNum(100)
        }
    
    };

    const getValueHandler = (selectedValue) =>{
        setBtnAct(1);
        
        setNextDisable(false);
        if (selectedValue === radioProps[0]){
            setMyValue(1);
        } else if (selectedValue === radioProps[1]){
            setMyValue(2);
        } else if (selectedValue === radioProps[2]){
            setMyValue(3);
        } else if (selectedValue === radioProps[3]){
            setMyValue(4);
        } else if (selectedValue === radioProps[4]){
            setMyValue(5);
        }
    }; 

    const setQuestionAnswers = (questionNum) => {
        const ques = JSON.stringify(PersonalityTestData[questionNum].question);
        const queSec = JSON.stringify(PersonalityTestData[questionNum].section);
        const op1 = JSON.stringify(PersonalityTestData[questionNum].options[0]);
        const op2 = JSON.stringify(PersonalityTestData[questionNum].options[1]);
        const op3 = JSON.stringify(PersonalityTestData[questionNum].options[2]);
        const op4 = JSON.stringify(PersonalityTestData[questionNum].options[3]);
        const op5 = JSON.stringify(PersonalityTestData[questionNum].options[4]);
        setTheQuestion(ques.replace(/['"]+/g, ""));
        setQuestionSec(queSec.replace(/['"]+/g, ""));
        setOption1(op1.replace(/['"]+/g, ""));
        setOption2(op2.replace(/['"]+/g, ""));
        setOption3(op3.replace(/['"]+/g, ""));
        setOption4(op4.replace(/['"]+/g, ""));
        setOption5(op5.replace(/['"]+/g, ""));
    } ;
    const radioProps = [option1, option2, option3, option4, option5, questionSec]

const resultFunction = () =>{
    setPageNum(101);
   const myList = [{name:'D',score:scoreD},{name:"I",score:scoreI}, {name:"S",score:scoreS}, {name:"C",score:scoreC}];
   myList.sort((a, b) => (a.score > b.score) ? -1 : 1);
   console.log(myList);
   if (myList[0].score >12 ){
    setMaxNum(myList[0].name);
        if(myList[1].score >12){
            setSecondMaxNum(myList[1].name);
            setPersonType([myList[0].name+myList[1].name ]);
            personTypeAnalysis([myList[0].name+myList[1].name ]);
        }else{
            setSecondMaxNum("");
            setPersonType([myList[0].name ]);
            personTypeAnalysis([myList[0].name ]);
        };
        
   }else{
        setMaxNum("Do the test again")
   };
};

const personTypeAnalysis = (personType) => {
  
    for (let i = 0; i < 17; i++) {
        const personTypeList = ['D', 'I', 'S', 'C', 'DI', 'ID' , 'SD', 'CD', 'DS', 'IS', 'SI', 'CI', 'DC', 'IC', 'SC', 'CS'];
        if(personType == personTypeList[i]){
            
        const analysis = JSON.stringify(PersonalityAnswerData[i].Description);
            SetTypeAnalysis(analysis.replace(/['"]+/g, ""));
        }
   };
};

if(pageNum === 0 ){
  return (
    <SafeAreaView>
            
            <View style={styles.firstMainScreen}>
                <Text style={styles.mainHeaderText}>Personality Test</Text>
                <Text style={styles.secondHeaderText} >
                Answer each question by selecting the option that best describes you.
                </Text>
            </View>
            <View style={styles.buttonCon}>
                <TouchableOpacity
                        onPress={() => StartExam()}
                        style={styles.button}
                    >
                            <Text style={styles.buttonText}>Start</Text> 
                </TouchableOpacity> 
            </View>
    </SafeAreaView>
  );
  } else if (pageNum <21){
    return(
       <SafeAreaView>
            
        <View style={styles.thirdMainScreen}>
            <Text style={styles.pageTitle}>Personality Test</Text>
            <View style={styles.questionCon}>
                <Text style={styles.thirdHeaderText}>
                {pageNum}. {theQuestion}
                </Text>
            </View> 
            <View style={styles.optionButtonCon}>
                <View >
                    <TouchableOpacity 
                        style={[styles.optionButton, {backgroundColor: myValue==1 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[0])}>
                        <Text style={styles.buttonText}>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity 
                       style={[styles.optionButton, {backgroundColor: myValue==2 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[1])}>
                        <Text style={styles.buttonText}>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity 
                        style={[styles.optionButton, {backgroundColor: myValue==3 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[2])}>
                        <Text style={styles.buttonText}>{radioProps[2]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity 
                       style={[styles.optionButton, {backgroundColor: myValue==4 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[3])}>
                        <Text style={styles.buttonText}>{radioProps[3]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity 
                       style={[styles.optionButton, {backgroundColor: myValue==5 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[4])}>
                        <Text style={styles.buttonText}>{radioProps[4]}</Text>  
                    </TouchableOpacity>
                </View> 
            </View>
            {/* <Text>myValue = {myValue}</Text>
            <View>
                <Text>scoreD = {scoreD}</Text>
                <Text>scoreI = {scoreI}</Text>
                <Text>scoreS = {scoreS}</Text>
                <Text>scoreC = {scoreC}</Text>
               
                <Text>questionNum = {questionSec}</Text>    
                <Text>{pageNum}</Text>         
           </View> */}
        </View>
        <View style={styles.buttonCon}>
                <TouchableOpacity
                        
                            disabled={nextDisable}
                            onPress={() => NextQuestion()}
                            style = {[styles.button,
                            btnAct === 1
                                ? styles.btnActive
                                : styles.btnDeactive
                                
                            ]}
                        >
                                <Text style={styles.buttonText}>Next</Text> 
                                
                </TouchableOpacity> 
        </View>
        
    </SafeAreaView>
    )
  }else if(pageNum === 100) {
    return(
        <SafeAreaView>
           <View style={styles.secondMainScreen}>
                 <Text style={styles.secondHeaderText}>You have finished the test</Text>
           <View style={styles.buttonCon}>
                <TouchableOpacity
                            onPress={() => resultFunction()}
                            style={styles.button}
                        >
                                <Text style={styles.buttonText}>See The Result</Text> 
                </TouchableOpacity>  
            </View>
           </View>
       </SafeAreaView>
    )
   
  }else if(pageNum === 101) {
    return(
        <SafeAreaView>
            <View style={styles.secondMainScreen}>
                    {/* <Text style={styles.secondHeaderText}>Person Type: {personType}</Text> */}
                    <Text style={styles.secondHeaderText}>Your Personality Type</Text>
                    <Text style={styles.paragraphText}>{typeAnalysis}</Text>
            </View>
        </SafeAreaView>
    )
   
  }
};

const styles = StyleSheet.create({

    firstMainScreen:{
        height:ScrHeight * 0.2,
        width:ScrWidth *0.8 ,
         marginTop:ScrHeight * 0.1,
      // backgroundColor:"yellow",
      },
    secondMainScreen:{
        height:ScrHeight * 0.4,
        marginTop:30,
        marginBottom:10,
        padding: 20,
      // backgroundColor:"yellow",
     },
     thirdMainScreen:{
        height:ScrHeight * 0.5,
        width:ScrWidth *0.8 ,
        marginTop:ScrHeight * 0.02,
        marginBottom: ScrHeight * 0.02,
       // backgroundColor:"yellow",
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
      textAlign:'left',
     // marginTop:5,
      //marginBottom:10,
      fontSize:ScrHeight * 0.018,
      fontWeight:'bold',
      
    },
    pageTitle:{
      //  flex:1,
        padding:ScrHeight * 0.03,  
        fontSize:ScrHeight * 0.022,
         fontWeight:'bold',
         textAlign:'center',
         color:'#2D5018',
         
    },
    paragraphText:{
        fontSize:ScrHeight * 0.018,  
        padding:ScrHeight * 0.018,  
    },
    questionCon:{
      //  height:ScrHeight * 0.09,
        marginTop:ScrHeight * 0.03,
        marginBottom:ScrHeight * 0.03,
      
    },
    buttonCon:{
        height: ScrHeight * 0.12,
        justifyContent: 'center',
        alignItems: 'center', 
       // backgroundColor:'#FBB655',
    },
    button:{
        width:ScrWidth * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding:ScrHeight * 0.02,  
        fontWeight:'bold',
        borderColor:'#FBB651',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#FBB651'
    },
    btnActive:{
        opacity: 1,
    },
    btnDeactive:{
        opacity: 0.5,
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: ScrHeight * 0.018, 
    },
    optionButtonCon:{
        height:ScrHeight * 0.3, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionButton:{
        width:ScrWidth * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        padding:ScrHeight * 0.01,
        fontWeight:'bold',
        borderColor:'#98DAE3',
        borderRadius:10,
        borderWidth:2,
       // backgroundColor:'#98DAE3',
        marginTop:ScrHeight * 0.008
    },

})
export default PersonalityTest;