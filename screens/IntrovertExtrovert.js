
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

//https://psychologia.co/introvert-extrovert-ambivert-quiz/


const IntrovertExtrovert = (props) => {

    const IntrovertExtrovertEnData = require("../Data/IntrovertExtrovertEn.json");

    const [pageNum , setPageNum ] = useState(0);
    const [questionNum , setQuestionNum ] = useState(0);
    const [theQuestion, setTheQuestion] = useState("");
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [option4, setOption4] = useState();
    const [option5, setOption5] = useState();
    const [myValue, setMyValue] = useState(0);
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
        if(pageNum <20 ){
        generateRandomNum();
        setPageNum( pageNum + 1 );
        
        }else{
            setPageNum(100)
        }
    };

    const generateRandomNum = () => {
        const rndNum = Math.floor(Math.random() * 20 ) ;
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
   
        setBtnAct(1);
        setNextDisable(false);
        if (selectedValue === radioProps[0]){
            setMyScore(1)
        } else if (selectedValue === radioProps[1]){
            setMyScore(2)
        } else if (selectedValue === radioProps[2]){
            setMyScore(3)
        } else if (selectedValue === radioProps[3]){
            setMyScore(4)
        } else if (selectedValue === radioProps[4]){
            setMyScore(5)
        }
    }; 

    const setQuestionAnswers = (questionNum) => {
        const ques = JSON.stringify(IntrovertExtrovertEnData[questionNum].question);
        const op1 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[0]);
        const op2 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[1]);
        const op3 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[2]);
        const op4 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[3]);
        const op5 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[4]);
       // const ansOp = JSON.stringify(SelfEsteemTestData[questionNum].answer);
        setTheQuestion(ques.replace(/['"]+/g, ""));
        setOption1(op1.replace(/['"]+/g, ""));
        setOption2(op2.replace(/['"]+/g, ""));
        setOption3(op3.replace(/['"]+/g, ""));
        setOption4(op4.replace(/['"]+/g, ""));
        setOption5(op5.replace(/['"]+/g, ""));
       // setAnswerOp(ansOp.replace(/['"]+/g, ""));
        setTheScore(theScore + myScore);
       // setRealisticScore (realisticScore + theRealistic);
    } ;

    const radioProps = [option1, option2,option3,option4,option5]

const theResult = () => {
        if(theScore < 33 ){
            setTheContent("You are an introvert.") ;
        }else if (theScore >= 33 && theScore < 67 ){
            setTheContent("You are an ambivert.");
        }else if (theScore >= 67 && theScore < 101 ){
            setTheContent("You are an extrovert.");
        }
};


if(pageNum === 0 ){
  return (
    <View  style={styles.mainScreen}>
            
            <View>
                <Text>Introvert, Extrovert or Ambivert</Text>
                <Text>
                Please answer each question carefully.
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
  } else if (pageNum >= 1 && pageNum <21){
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
                    <TouchableOpacity style={styles.answerBtn} onPress={getValueHandler.bind(this, radioProps[0])}>
                        <Text>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.answerBtn} onPress={getValueHandler.bind(this, radioProps[1])}>
                        <Text>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.answerBtn} onPress={getValueHandler.bind(this, radioProps[2])}>
                        <Text>{radioProps[2]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.answerBtn} onPress={getValueHandler.bind(this, radioProps[3])}>
                        <Text>{radioProps[3]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.answerBtn} onPress={getValueHandler.bind(this, radioProps[4])}>
                        <Text>{radioProps[4]}</Text>  
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
            {/* <Text>realistic: {realisticScore}</Text> */}
           
        </View>
</View>
    )
  }else if ( pageNum == 100){
    return(
        <SafeAreaView>
            <View style={styles.mainScreen}>
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
        borderColor:'#FBB651',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#FBB651'
    },
    answerBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        marginTop:10,
        borderColor:'#FBB651',
        borderRadius:10,
        borderWidth:1,
        width: ScrWidth * 0.5,
    },
    answerBtnCon:{
        justifyContent: 'center',
        alignItems: 'center',
        margin:15
    },
    questionCon:{
        width:  ScrWidth * 0.8,  
        paddingLeft: ScrWidth * 0.05,  
    },
    resultCon:{
        padding:15,
        margin: 10
    }
})
export default IntrovertExtrovert;