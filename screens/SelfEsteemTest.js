
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const SelfEsteemTest = (props) => {

    const SelfEsteemTestData = require("../Data/SelfEsteemTestEn.json");

    const [pageNum , setPageNum ] = useState(0);
    const [questionNum , setQuestionNum ] = useState(0);
    const [theQuestion, setTheQuestion] = useState("");
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [answerOp, setAnswerOp] = useState();
    const [myScore, setMyScore] = useState(0);
    const [realisticScore, setRealisticScore] = useState(0);
    const [theRealistic, setTheRealistic] = useState(0);
    const [theScore, setTheScore] = useState(0);
    const [selectedValue, setSelectedValue] = useState();
    const [theContent, setTheContent] = useState("");
    const [myArray, setMyArray] = useState([]);
    const [btnAct , setBtnAct] = useState(0);
    const [nextDisable , setNextDisable] = useState(true);
    // const [count , setCount] = useState(0);
    // const [numberHolder, setNumberHolder] =useState();

    const btnActive = () => {
        return{
            backgroundColor: "#ccc",
            borderStyle: "solid",
            margin:10,
            padding:15,
            borderWidth:1,
        };
    };

    const btnDeactive = () => {
        return{
            backgroundColor: "#ccc",
           // borderStyle: "solid",
            margin:10,
            padding:15,
          //  borderWidth:1,
           // display: 'none',
           disabled:"disabled",
           opacity: 0.5,
        };
    };

    const StartExam = () => {
        setPageNum( pageNum + 1 );
        generateRandomNum();
    };
    const NextQuestion = () => {
        setBtnAct(0);
        setNextDisable(true);
        if(pageNum <58 ){
        generateRandomNum();
        setPageNum( pageNum + 1 );
        
        }else{
            setPageNum(100)
        }
    };

    const generateRandomNum = () => {
        const rndNum = Math.floor(Math.random() * 58 ) ;
        if(myArray.indexOf(rndNum) < 0 ){
           // setCount(count+1);
           setPageNum(pageNum+1);
            setMyArray((myArray) => [...myArray , rndNum]);
          //  setQuestionNum(questionNum);
          setQuestionNum(rndNum);
            setQuestionAnswers(rndNum);   
          //  NextQuestion(rndNum);

        } else {
            generateRandomNum();
        }
    };

    const getValueHandler = (selectedValue) =>{
   
       // if (selectedValue === radioProps[2]){
        if( questionNum == 0 || questionNum == 5 ||questionNum == 12 || questionNum == 19 ||questionNum == 26 || questionNum == 33 || questionNum == 40 || questionNum == 47 ) {
            if (selectedValue === radioProps[2]){
            setTheRealistic(1);
        }
        }else{
            setTheRealistic(0);
            if (selectedValue === radioProps[2]){
                setMyScore(1);
            }else{
                setMyScore(0);
            }
           // setMyScore(0);
        };
        setBtnAct(1);
        setNextDisable(false);
     
    }; 

    const setQuestionAnswers = (questionNum) => {
        const ques = JSON.stringify(SelfEsteemTestData[questionNum].question);
        const op1 = JSON.stringify(SelfEsteemTestData[questionNum].options[0]);
        const op2 = JSON.stringify(SelfEsteemTestData[questionNum].options[1]);
        const ansOp = JSON.stringify(SelfEsteemTestData[questionNum].answer);
        setTheQuestion(ques.replace(/['"]+/g, ""));
        setOption1(op1.replace(/['"]+/g, ""));
        setOption2(op2.replace(/['"]+/g, ""));
        setAnswerOp(ansOp.replace(/['"]+/g, ""));
        setTheScore(theScore + myScore);
        setRealisticScore (realisticScore + theRealistic);
    } ;

    const radioProps = [option1, option2, answerOp]

const theResult = () =>{
    if(realisticScore > 4){
        setTheContent("Please retake the test and provide accurate answers to the questions.") 
    }else{
        if(theScore < 32 ){
            setTheContent("Significantly below average") ;
        }else if (theScore >= 32 && theScore < 36 ){
            setTheContent(" Somewhat below average");
        }else if (theScore >= 36 && theScore < 40 ){
            setTheContent("Average");
        }else if (theScore >= 40 && theScore < 44 ){
            setTheContent(" somewhat above average");
        }else if (theScore >= 44 && theScore < 47 ){
            setTheContent("somewhat above average");
        }else{
            setTheContent("Please re do the test");
        }
    }
};


if(pageNum === 0 ){
  return (
    <View  style={styles.mainScreen}>
            
            <View>
                <Text>Self Esteem Test</Text>
                <Text>
                Answer each question carefully
                </Text>

                <TouchableOpacity
                        onPress={() => StartExam()}
                        style={styles.button}
                    >
                            <Text>Start</Text> 
            </TouchableOpacity> 
            </View>
    </View>
  );
  } else if (pageNum >= 1 && pageNum <59){
    return(
        <View style={styles.mainScreen} >
            
        <View>
           <View style={styles.questionCon}>
                <Text style={styles.questionText}>
                {theQuestion}
                </Text>
            </View> 
            <View style={styles.answerBtnCon}>
                <View >
                    <TouchableOpacity 
                        onPress={getValueHandler.bind(this,radioProps[0])}>
                        <Text>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                 </View> 
                <View>
                    <TouchableOpacity 
                        onPress={getValueHandler.bind(this,radioProps[1])}>
                        <Text>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
            </View>
           {/* <Text>{myScore}</Text>
           <Text>{theScore}</Text> */}
           <Text>{pageNum}</Text>
            <TouchableOpacity
                        disabled={nextDisable}
                        onPress={() => NextQuestion()}
                       // style={styles.button}
                        style = {
                          btnAct === 1
                            ? btnActive()
                            : btnDeactive()
                            
                        }
                    >
                            <Text>Next</Text> 
            </TouchableOpacity> 
            <Text>score:{theScore}</Text>
            <Text>realistic: {realisticScore}</Text>
           
        </View>
</View>
    )
  }else if ( pageNum == 100){
    return(
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={() => theResult()}>
                    <Text>See the result</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resultCon}>
                <Text>{theContent}</Text>
            </View>
            <Text>realistic value: {realisticScore}</Text>
        </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
    mainScreen:{
          height:ScrHeight * 0.6,
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
export default SelfEsteemTest;