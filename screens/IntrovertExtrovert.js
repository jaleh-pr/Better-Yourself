
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
    const [selectedOp, setSelectedOp] = useState(0);

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
        setSelectedOp(0);
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
            setMyScore(1);
            setSelectedOp(1)
        } else if (selectedValue === radioProps[1]){
            setMyScore(2);
            setSelectedOp(2);
        } else if (selectedValue === radioProps[2]){
            setMyScore(3);
            setSelectedOp(3);
        } else if (selectedValue === radioProps[3]){
            setMyScore(4);
            setSelectedOp(4);
        } else if (selectedValue === radioProps[4]){
            setMyScore(5);
            setSelectedOp(5);
        }
    }; 

    const setQuestionAnswers = (questionNum) => {
        const ques = JSON.stringify(IntrovertExtrovertEnData[questionNum].question);
        const op1 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[0]);
        const op2 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[1]);
        const op3 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[2]);
        const op4 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[3]);
        const op5 = JSON.stringify(IntrovertExtrovertEnData[questionNum].options[4]);
      
        setTheQuestion(ques.replace(/['"]+/g, ""));
        setOption1(op1.replace(/['"]+/g, ""));
        setOption2(op2.replace(/['"]+/g, ""));
        setOption3(op3.replace(/['"]+/g, ""));
        setOption4(op4.replace(/['"]+/g, ""));
        setOption5(op5.replace(/['"]+/g, ""));
       
        setTheScore(theScore + myScore);
       // setRealisticScore (realisticScore + theRealistic);
    } ;

    const radioProps = [option1, option2,option3,option4,option5]

const theResult = () => {
        setPageNum(101);
        if(theScore < 43 ){
            setTheContent("You are an introvert. For an introvert, it can be beneficial to prioritize self-care and set boundaries to ensure they have enough time for solitude and recharging. Engaging in activities that align with their interests and values, such as reading, writing, or creative pursuits, can be fulfilling for introverts. Building strong, meaningful relationships with a few close friends or family members can also provide a sense of connection and support. Additionally, practicing mindfulness and self-awareness can help introverts navigate social situations and honor their need for alone time. Ultimately, embracing and celebrating their introverted nature can lead to a more fulfilling and balanced life.") ;
        }else if (theScore >= 43 && theScore < 75 ){
            setTheContent("You are an ambivert. For an ambivert, who falls somewhere between introversion and extroversion, it is important to maintain a balance between social interaction and alone time. Experiment with different social settings and activities to identify what energizes you and what drains you. This self-awareness can assist you in effectively managing your social interactions. Practice setting boundaries and saying no when you require time alone. Utilize your ability to navigate both social and solitary situations to your advantage in various aspects of your life. Seek out a supportive community or network that understands and respects your ambivert nature.");
        }else if (theScore >= 75 && theScore < 101 ){
            setTheContent("You are an extrovert. For an extrovert, it is beneficial to engage in social activities and interactions to energize and recharge. Extroverts thrive in group settings, enjoy meeting new people, and are often outgoing and sociable. They may find fulfillment in networking, social events, and collaborative projects that involve working with others. It is important for extroverts to seek out opportunities for social engagement and to maintain a balance between socializing and personal time for self-care and reflection.");
        }
};


if(pageNum === 0 ){
  return (
    <SafeAreaView>   
        <View style={styles.firstMainScreen}>
            <Text style={styles.mainHeaderText}>Introvert, Extrovert or Ambivert</Text>
            <Text style={styles.secondHeaderText}>
            Please answer each question carefully and take your time to consider each question thoughtfully.
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
        <View style={styles.thirdMainScreen}>
        <Text style={styles.pageTitle}>Introvert, Extrovert or Ambivert</Text>
           <View style={styles.questionCon}>
                <Text style={styles.thirdHeaderText}>
                {pageNum}. {theQuestion}
                </Text>
            </View> 
            <View style={styles.optionButtonCon}>
                <View >
                    <TouchableOpacity 
                        style={[styles.optionButton, {backgroundColor: selectedOp==1 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[0])}>
                        <Text style={styles.buttonText}>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity 
                         style={[styles.optionButton, {backgroundColor: selectedOp==2 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[1])}>
                        <Text style={styles.buttonText}>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View >
                    <TouchableOpacity 
                        style={[styles.optionButton, {backgroundColor: selectedOp==3 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[2])}>
                        <Text style={styles.buttonText}>{radioProps[2]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity 
                         style={[styles.optionButton, {backgroundColor: selectedOp==4 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[3])}>
                        <Text style={styles.buttonText}>{radioProps[3]}</Text>  
                    </TouchableOpacity>
                </View> 
                <View>
                    <TouchableOpacity 
                         style={[styles.optionButton, {backgroundColor: selectedOp==5 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this, radioProps[4])}>
                        <Text style={styles.buttonText}>{radioProps[4]}</Text>  
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
                    <Text style={styles.secondHeaderText}>Your Introvert/ Ambivert/ Extrovert Test Result:</Text>
                   
                    <Text style={styles.thirdHeaderText}>{theContent}</Text>
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
        height:ScrHeight * 0.5,
        width:ScrWidth *0.8 ,
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
export default IntrovertExtrovert;