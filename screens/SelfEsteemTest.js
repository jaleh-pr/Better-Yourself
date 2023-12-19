
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const SelfEsteemTest = (props) => {

    const SelfEsteemTestData = require("../Data/SelfEsteemTestEn.json");

    const [pageNum , setPageNum ] = useState(0);
    const [questionNum , setQuestionNum ] = useState(0);
    const [theQuestion, setTheQuestion] = useState("");
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [answerOp, setAnswerOp] = useState();
    const [myScore, setMyScore] = useState(0);
    const [theScore, setTheScore] = useState(0);
    const [selectedValue, setSelectedValue] = useState();
    const [theContent, setTheContent] = useState("");

    const StartExam = () => {
        setPageNum(pageNum + 1);
        setQuestionAnswers(questionNum);
    };
    const NextQuestion = (myQuestionNum) => {
        setQuestionNum(questionNum + 1);
        setQuestionAnswers(questionNum+1);
        setPageNum(pageNum+1);
    };

    const getValueHandler = (selectedValue) =>{
        if (selectedValue === radioProps[2]){
            setMyScore(1)
        }else{
            setMyScore(0)
        }
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
    } ;
    const radioProps = [option1, option2, answerOp]

const theResult = () =>{
    if(theScore < 32 ){
        setTheContent("Significantly below average") ;
    }else if (theScore >= 32 && theScore < 36 ){
        setTheContent(" Somewhat below average");
    }else if (theScore >= 36 && theScore < 40 ){
        setTheContent("Average");
    }else if (theScore >=40 && theScore < 44 ){
        setTheContent(" somewhat above average");
    }else if (theScore >=44 && theScore < 47 ){
        setTheContent("somewhat above average");
    }else{
        setTheContent("Please re do the test");
    }
}

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
  } else if (pageNum >= 1 && pageNum <58){
    return(
        <View style={styles.mainScreen} >
            
        <View>
           <View>
                <Text>
                {theQuestion}
                </Text>
            </View> 
            <View>
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
            
           <Text>{myScore}</Text>
           <Text>{theScore}</Text>
           <Text>{pageNum}</Text>
            <TouchableOpacity
                        onPress={() => NextQuestion()}
                        style={styles.button}
                    >
                            <Text>Next</Text> 
            </TouchableOpacity> 
           
        </View>
</View>
    )
  }else if ( pageNum >=58){
    return(
        <View>
            <TouchableOpacity onPress={() => theResult()}>
                <Text>See the result</Text>
                <Text>{theContent}</Text>
            </TouchableOpacity>
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
export default SelfEsteemTest;