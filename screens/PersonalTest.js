
import React from 'react';
import {StyleSheet, Text, View,ImageBackground, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const PersonalTest = (props) => {

  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}
  return (
    <SafeAreaView >

        <View style={styles.secondMainScreen}>
           
            <Text style={styles.mainHeaderText}>Self Awareness Test</Text>
        </View>
        <View>
            <View style= {styles.buttonCon}>
                <TouchableOpacity
                            onPress={() => onLanNumProps(7)}
                            style={[styles.button, styles.redButton]}
                        >
                                <Text style= {styles.buttonText}>Personality Test</Text> 
                </TouchableOpacity> 
            </View>
            <View style= {styles.buttonCon}>
                <TouchableOpacity
                        onPress={() => onLanNumProps(8)}
                             style={[styles.button, styles.blueButton]}
                        >
                                <Text style= {styles.buttonText}>Self Esteem</Text> 
                </TouchableOpacity> 
            </View>
            <View style= {styles.buttonCon}>
                <TouchableOpacity
                            onPress={() => onLanNumProps(9)}
                             style={[ styles.button, styles.orangeButton]}
                        >
                                <Text style= {styles.buttonText}>Introvert/Extrovert</Text> 
                </TouchableOpacity> 
            </View>
        </View>
        <ImageBackground source={require('../assets/self-awareness.png')} resizeMode="contain" style={styles.bgImage}>
        
        </ImageBackground>
    </SafeAreaView>
  );
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
        height:ScrHeight * 0.2,
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
        borderRadius:10,
        marginTop:10
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: 16
    },
    blueButton:{
        backgroundColor:'#98DAE3',
      },
    pinkButton:{
        backgroundColor:'#F5AE92',
    },
    orangeButton:{
        backgroundColor:'#FBB651',
    },
    redButton:{
        backgroundColor:'#DF6149',
    },
    bgImage:{
        height:ScrHeight*0.35,
        width:ScrWidth,
       // marginLeft:ScrWidth* 0.2,
        
       }

})
export default PersonalTest;