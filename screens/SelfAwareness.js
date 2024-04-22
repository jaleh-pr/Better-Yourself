
import React from 'react';
import {StyleSheet, Text, View,ImageBackground, TouchableOpacity,TextInput, SafeAreaView, ScrollView, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const SelfAwareness = (props) => {

  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}
  return (
    <SafeAreaView >

        <View style={styles.firstMainScreen}>
            <View style= {styles.centeredSection}>
                <ImageBackground source={require('../assets/bg-Test-app.png')} resizeMode="contain" style={styles.bgImage}>
                
                </ImageBackground>
            </View>
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
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    
  
    mainScreen:{
        height:ScrHeight * 0.2,
        width:ScrWidth ,
        marginTop:ScrHeight * 0.1,
       // backgroundColor:"yellow",
      },
      firstMainScreen:{
        height:ScrHeight * 0.45,
        width:ScrWidth ,
        marginTop:ScrHeight * 0.03,
       //backgroundColor:"yellow",
      },
      mainHeaderText:{
        fontSize:ScrHeight * 0.025,  
        marginTop:ScrHeight * 0.025,  
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:ScrHeight * 0.025,  
    },
    buttonCon:{
        height: ScrHeight * 0.09,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    button:{
        width:ScrWidth * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding:ScrHeight * 0.02,  
        fontWeight:'bold',
        borderRadius:10,
        backgroundColor:'#FBB651'
    },
    buttonText:{
        fontWeight:'bold',
        fontSize: ScrHeight * 0.018,  
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
        width:ScrHeight * 0.35,
        height:ScrHeight * 0.35,
        //backgroundColor: '#F5F5F5',
      },
      centeredSection:{
        display:'flex',
        //alignContent:'center',
        alignItems:'center'
      },

})
export default SelfAwareness;