
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
    const [moreInfo, setMoreInfo] = useState("");
    const [myArray, setMyArray] = useState([]);
    const [btnAct , setBtnAct] = useState(0);
    const [nextDisable , setNextDisable] = useState(true);
    const [selectedBtn, setSelectedBtn] = useState(0);
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
        if(pageNum <58 ){
        generateRandomNum();
        setPageNum( pageNum + 1 );
        setSelectedBtn(0);
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
        highlightSelectedValue(selectedValue);
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
        };
        setBtnAct(1);
        setNextDisable(false);
     
    }; 

    const highlightSelectedValue = (selectedValue) => {
        if (selectedValue === radioProps[0]){
              setSelectedOp(1);
            } else{
               setSelectedOp(2); 
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
        setRealisticScore (realisticScore + theRealistic);
    } ;

    const radioProps = [option1, option2, answerOp]

    const theResult = () =>{
        setPageNum(101)
        if(realisticScore > 4){
            setTheContent("Please retake the test and provide accurate answers to the questions.") 
        }else{
            if(theScore < 32 ){
                setTheContent("Your self-esteem is significantly below average.") ;
                setMoreInfo("Practice self-care and self-compassion: Treat yourself with kindness and understanding, just as you would treat a friend in need. Set realistic goals and celebrate small achievements: Break down larger goals into smaller, manageable tasks and acknowledge your progress along the way. Challenge negative self-talk: Replace self-critical thoughts with positive affirmations and focus on your strengths and accomplishments. Surround yourself with supportive and positive people: Build a network of friends and family who uplift and encourage you. Seek professional help if needed: Consider talking to a therapist or counselor who can provide guidance and support in improving your self-esteem");
            }else if (theScore >= 32 && theScore < 36 ){
                setTheContent("Your self-esteem is somewhat below average.");
                setMoreInfo("Remind yourself of your strengths, accomplishments, and positive qualities regularly. Pursue hobbies and interests that make you feel good about yourself and boost your self-esteem.Identify and challenge negative self-talk by replacing it with more positive and realistic thoughts. Prioritize your physical and mental well-being by engaging in activities that promote self-love and self-compassion. ");
            }else if (theScore >= 36 && theScore < 40 ){
                setTheContent("You have average self-esteem.");
                setMoreInfo("Maintain healthy habits that promote your physical and mental well-being, such as exercise, proper nutrition, and sufficient rest. Set challenging but achievable goals. Focus on the positive aspects of your life and express gratitude for the things you have, fostering a sense of contentment and self-worth. Explore new experiences, learn new skills, and challenge yourself to continue growing and evolving.");
            }else if (theScore >= 40 && theScore < 44 ){
                setTheContent("Good job! Your self-esteem is somewhat above average");
                setMoreInfo("Keep believing in yourself and your abilities . you're doing great!");
            }else if (theScore >= 44 && theScore < 47 ){
                setTheContent("Congratulations! You have a very high self-esteem.");
                setMoreInfo("Your self-esteem is impressive. Keep shining and uplifting others around you.");
            }else{
                setTheContent("Please redo the test and strive to be realistic.");
            }
        }
    };

    const backGenerator = () => {
        setPageNum(0);
      
    };


if(pageNum === 0 ){
  return (
    <SafeAreaView>
            
        <View style={styles.firstMainScreen}>
            <Text style={styles.mainHeaderText}>Self Esteem Test</Text>
            <Text style={styles.secondHeaderText} >
                    Answer each question carefully
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
  } else if (pageNum >= 1 && pageNum <59){
    return(
        <SafeAreaView>
            
        <View style={styles.thirdMainScreen}>
            <Text style={styles.pageTitle}>Self Esteem Test</Text>
           <View style={styles.questionCon}>
                <Text style={styles.thirdHeaderText}>
                {pageNum}. {theQuestion}
                </Text>
            </View> 
            <View style={styles.optionButtonCon}>
                <View >
                    <TouchableOpacity 
                    style={[styles.optionButton, {backgroundColor: selectedOp==1 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this,radioProps[0])}>
                        <Text style={styles.buttonText}>{radioProps[0]}</Text>  
                    </TouchableOpacity>
                 </View> 
                <View>
                    <TouchableOpacity 
                    style={[styles.optionButton, {backgroundColor: selectedOp==2 ? "#98DAE3" : "white"}]}
                        onPress={getValueHandler.bind(this,radioProps[1])} >
                        <Text style={styles.buttonText}>{radioProps[1]}</Text>  
                    </TouchableOpacity>
                </View> 
            </View>
            </View>
            <Text>{myScore}</Text>
           <Text>{theScore}</Text> 
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
                {/* <Text>score:{theScore}</Text>
                <Text>realistic: {realisticScore}</Text> */}
            </View>
        
</SafeAreaView>
    )
  }else if ( pageNum == 100){
    return(
        <SafeAreaView>
                 <View style={styles.secondMainScreen}>
                    <Text style={styles.secondHeaderText}>Well done! You have finished the test.</Text>
                 </View>
                 <View style={styles.buttonCon}>
                    <TouchableOpacity onPress={() => theResult()}  style={styles.button}>
                        <Text style={styles.buttonText}>See the result</Text>
                    </TouchableOpacity>
                 </View>
         
        </SafeAreaView>
    )
  } else if(pageNum === 101) {
    return(

        <SafeAreaView>
             <View style={styles.thirdMainScreen}>
                    <Text style={styles.secondHeaderText}>Your Self Esteen Test Result:</Text>
                    <Text style={styles.resultText}>{theContent}</Text>
                    <Text style={styles.paragraphText}>{moreInfo}</Text>
            </View>
            {/* <View style={styles.buttonCon}>
                <TouchableOpacity
                           onPress={backGenerator}
                           style={styles.backButton}
                    >
                                <Text style={styles.buttonText}>Back</Text> 
                </TouchableOpacity> 
            </View> */}
            {/* <Text>realistic value: {realisticScore}</Text> */}
        </SafeAreaView>
    );
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
    resultText:{
        padding:ScrHeight * 0.03,  
        fontSize:ScrHeight * 0.018,
         fontWeight:'bold',
         textAlign:'center',
    },
    pageTitle:{
        padding:ScrHeight * 0.03,  
        fontSize:ScrHeight * 0.022,
         fontWeight:'bold',
         textAlign:'center',
         color:'#2D5018',
         
    },
    paragraphText:{
        fontSize:ScrHeight * 0.018,  
        padding:ScrHeight * 0.018, 
       // marginBottom: ScrHeight * 0.18, 
    },
    buttonCon:{
        height: ScrHeight * 0.1,
        justifyContent: 'center',
        alignItems: 'center', 
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
          backButton:{
            width:ScrWidth * 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            padding:ScrHeight * 0.01,  
            marginRight:ScrWidth * 0.7,
            fontWeight:'bold',
            borderColor:'#FBB651',
            borderRadius:10,
            borderWidth:1,
            backgroundColor:'#FBB651'
          },
      
})
export default SelfEsteemTest;