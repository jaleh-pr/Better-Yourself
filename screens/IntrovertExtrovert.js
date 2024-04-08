
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
        setPageNum(101);
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
    <SafeAreaView>   
        <View style={styles.secondMainScreen}>
            <Text style={styles.mainHeaderText}>Introvert, Extrovert or Ambivert</Text>
            <Text style={styles.secondHeaderText}>
                    Please answer each question carefully.
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
  } else if (pageNum >= 1 && pageNum <21){
    return(
    <SafeAreaView>
        <View style={styles.mainScreen}>
        <Text style={styles.secondHeaderText}>Introvert, Extrovert or Ambivert</Text>
           <View style={styles.questionCon}>
                <Text style={styles.thirdHeaderText}>
                {pageNum}. {theQuestion}
                </Text>
            </View> 
            <View style={styles.optionButtonCon}>
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[0])}>
                        <Text>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[1])}>
                        <Text>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[2])}>
                        <Text>{radioProps[2]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[3])}>
                        <Text>{radioProps[3]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity style={styles.optionButton} onPress={getValueHandler.bind(this, radioProps[4])}>
                        <Text>{radioProps[4]}</Text>  
                    </TouchableOpacity>
                </View> 
            </View>
           {/* <Text>{myScore}</Text>
           <Text>{theScore}</Text> */}

            <View style={styles.buttonCon}>
                    <TouchableOpacity
                                disabled={nextDisable}
                                onPress={() => NextQuestion()}
                            // style={styles.button}
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
  }else if ( pageNum == 100){
    return(
        <SafeAreaView>
             <View style={styles.secondMainScreen}>
                    <Text style={styles.secondHeaderText}>You have finished the test</Text>
                 </View>
                 <View style={styles.buttonCon}>
                    <TouchableOpacity onPress={() => theResult()}  style={styles.button}>
                        <Text style={styles.buttonText}>See the result</Text>
                    </TouchableOpacity>
                 </View>
         
        </SafeAreaView>
    )
}else if ( pageNum == 101){
    return(
        <SafeAreaView>
            <View style={styles.secondMainScreen}>
                    <Text style={styles.secondHeaderText}>Your Introvert/Extrovert Test Result:</Text>
                    <Text style={styles.paragraphText}>{theContent}</Text>
            </View>
           
        </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
    mainScreen:{
        height:ScrHeight * 0.7,
        width:ScrWidth * 0.9,
         // flex:1,
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop:20,
          marginBottom:20,
          padding: 20,
       //   backgroundColor:'#FBB655',
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
        fontSize:20,
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
    buttonCon:{
      //  height: ScrHeight * 0.2,
      marginTop:30,
      justifyContent: 'center',
      alignItems: 'center', 
     // backgroundColor:'#FBB655',
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
        marginTop:0
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
    questionCon:{
        flex:1,
        flexDirection:'row'
    },
    optionButtonCon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:0,
    },
    optionButton:{
        width:ScrWidth * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        fontWeight:'bold',
        borderColor:'#98DAE3',
        borderRadius:10,
        borderWidth:2,
       // backgroundColor:'#98DAE3',
        marginTop:7
    },
    scrollView:{
        backgroundColor: '#F5F5F5',
    
    }
})
export default IntrovertExtrovert;