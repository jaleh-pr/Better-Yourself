
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView, ScrollView} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;



const DiskTest = (props) => {

    const DiskTestData = require("../Data/DiskTestEn.json");
    const DiskAnswerData = require("../Data/DiskAnswerEn.json");

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

    // const btnActive = () => {
    //     return{
    //         backgroundColor: "#ccc",
    //         borderStyle: "solid",
    //         margin:10,
    //         padding:15,
    //         borderWidth:1,
    //     };
    // };

    // const btnDeactive = () => {
    //     return{
    //         backgroundColor: "#ccc",
    //         margin:10,
    //         padding:15,
    //        disabled:"disabled",
    //        opacity: 0.5,
    //     };
    // };

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
            setMyValue(1)
        } else if (selectedValue === radioProps[1]){
            setMyValue(2)
        } else if (selectedValue === radioProps[2]){
            setMyValue(3)
        } else if (selectedValue === radioProps[3]){
            setMyValue(4)
        } else if (selectedValue === radioProps[4]){
            setMyValue(5)
        }
    }; 

    const setQuestionAnswers = (questionNum) => {
        const ques = JSON.stringify(DiskTestData[questionNum].question);
        const queSec = JSON.stringify(DiskTestData[questionNum].section);
        const op1 = JSON.stringify(DiskTestData[questionNum].options[0]);
        const op2 = JSON.stringify(DiskTestData[questionNum].options[1]);
        const op3 = JSON.stringify(DiskTestData[questionNum].options[2]);
        const op4 = JSON.stringify(DiskTestData[questionNum].options[3]);
        const op5 = JSON.stringify(DiskTestData[questionNum].options[4]);
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
            
        const analysis = JSON.stringify(DiskAnswerData[i].Description);
            SetTypeAnalysis(analysis.replace(/['"]+/g, ""));
        }
   };
};

if(pageNum === 0 ){
  return (
    <SafeAreaView>
            
            <View style={styles.secondMainScreen}>
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
            
        <View style={styles.mainScreen}>
           <View style={styles.questionCon}>
                <Text style={styles.secondHeaderText}>
                {pageNum}. {theQuestion}
                </Text>
            </View> 
            <View style={styles.optionButtonCon}>
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[0])}>
                        <Text style={styles.buttonText}>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[1])}>
                        <Text style={styles.buttonText}>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[2])}>
                        <Text style={styles.buttonText}>{radioProps[2]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[3])}>
                        <Text style={styles.buttonText}>{radioProps[3]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[4])}>
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
                    <Text style={styles.secondHeaderText}>Person Type: {personType}</Text>
                    {/* <Text>Max Num: {maxNum}</Text>
                    <Text>Second Max: {secondMaxNum}</Text> */}
                    
                         <Text style={styles.paragraphText}>Type analysis: {typeAnalysis}</Text>
                   
            </View>
        </SafeAreaView>
    )
   
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
        marginTop:35,
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
    btnActive:{
        opacity: 1,
    },
    btnDeactive:{
        opacity: 0.5,
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: 16
    },
    optionButtonCon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
    },
    optionButton:{
        width:ScrWidth * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        fontWeight:'bold',
        borderColor:'#98DAE3',
        borderRadius:10,
        borderWidth:2,
       // backgroundColor:'#98DAE3',
        marginTop:10
    },
    scrollView:{
        backgroundColor: '#F5F5F5',
    
    }
})
export default DiskTest;