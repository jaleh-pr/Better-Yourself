
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const DiskTest = (props) => {

    const DiskTestData = require("../Data/DiskTestEn.json");

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
    const [myValue, setMyValue] = useState(0);

    const StartExam = () => {
        setPageNum(pageNum + 1);
        setQuestionAnswers(questionNum);
    };
    const NextQuestion = (myQuestionNum) => {
        let theValue = myValue;
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
        //setScoreD(scoreD + theValue);
        setQuestionNum(questionNum + 1);
        setQuestionAnswers(questionNum);
    };

    const getValueHandler = (selectedValue) =>{
        if (selectedValue === radioProps[4]){
            setMyValue(5)
        }else if (selectedValue === radioProps[3]){
            setMyValue(4)
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

if(pageNum === 0 ){
  return (
    <View  style={styles.mainScreen}>
            
            <View>
                <Text>DISK Test</Text>
                <Text>
                Answer each question in sections 1-4 by selecting the number that best describes you
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
  } else if (pageNum === 1){
    return(
        <View style={styles.mainScreen} >
            
        <View>
           <View>
                <Text>
                {theQuestion}
                </Text>
            </View> 
            <View>
                <TouchableOpacity>
                    <Text>{radioProps[0]}</Text>  
                </TouchableOpacity>
            </View> 
            <View>
                <TouchableOpacity>
                    <Text>{radioProps[1]}</Text>  
                </TouchableOpacity>
            </View> 
            <View>
                <TouchableOpacity>
                    <Text>{radioProps[2]}</Text>  
                </TouchableOpacity>
            </View> 
            <View>
                <TouchableOpacity onPress={getValueHandler.bind(this, radioProps[3])}>
                    <Text>{radioProps[3]}</Text>  
                </TouchableOpacity>
            </View> 
            <View>
                <TouchableOpacity onPress={getValueHandler.bind(this, radioProps[4])}>
                    <Text>{radioProps[4]}</Text>  
                </TouchableOpacity>
            </View> 
           <View>
            <Text>scoreD = {scoreD}</Text>
            <Text>scoreI = {scoreI}</Text>
            <Text>scoreS = {scoreS}</Text>
            <Text>scoreC = {scoreC}</Text>
            <Text>myValue = {myValue}</Text>
            <Text>questionNum = {questionSec}</Text>
            
           </View>
            <TouchableOpacity
                        onPress={() => NextQuestion()}
                        style={styles.button}
                    >
                            <Text>Next</Text> 
            </TouchableOpacity> 
           
        </View>
</View>
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
        borderColor:'#55c2da',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#55c2da'
    }
})
export default DiskTest;