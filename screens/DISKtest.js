
import React, { useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;



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
    const [theScores, setTheScores] = useState([]);
    const [personType, setPersonType] = useState("");
    const [myValue, setMyValue] = useState(0);
    const [maxNum, setMaxNum] = useState();
    const [secondMaxNum, setSecondMaxNum] = useState();

    const StartExam = () => {
        setPageNum(pageNum + 1);
        setQuestionAnswers(questionNum);
       // setQuestionNum(1);
       setPersonType("");
    };
    const NextQuestion = () => {
        let theValue = myValue;
        setPageNum(pageNum + 1);
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
        setQuestionAnswers(questionNum+1);
    };

    const getValueHandler = (selectedValue) =>{
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
   const myList = [{name:'D',score:scoreD},{name:"I",score:scoreI}, {name:"S",score:scoreS}, {name:"C",score:scoreC}];
  // const myMax = Math.max(scoreD, scoreI, scoreS, scoreC);
   myList.sort((a, b) => (a.score > b.score) ? -1 : 1);
   console.log(myList);
   if (myList[0].score >12 ){
    setMaxNum(myList[0].name);
        if(myList[1].score >12){
            setSecondMaxNum(myList[1].name);
            setPersonType([myList[0].name,myList[1].name ]);
        }else{
            setSecondMaxNum("");
            setPersonType([myList[0].name ])
        };
       
   }else{
        setMaxNum("Do the test again")
   };


}

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
  } else if (pageNum < 21){
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
            <Text>myValue = {myValue}</Text>
            <View>
                <Text>scoreD = {scoreD}</Text>
                <Text>scoreI = {scoreI}</Text>
                <Text>scoreS = {scoreS}</Text>
                <Text>scoreC = {scoreC}</Text>
               
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
  }else{
    return(
        <View>
            <Text>You have finished the test</Text>
           
           <View>
           <TouchableOpacity
                        onPress={() => resultFunction()}
                        style={styles.button}
                    >
                            <Text>See The Result</Text> 
            </TouchableOpacity> 
            <View>
                <Text>Person Type: {personType}</Text>
                <Text>Max Num: {maxNum}</Text>
                <Text>Second Max: {secondMaxNum}</Text>
            </View>
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
    },
    answerBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        marginTop:10,
        borderColor:'#55c2da',
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
    }
})
export default DiskTest;