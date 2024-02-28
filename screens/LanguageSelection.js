
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const LanguageSelection = (props) => {

    const onLanNumProps = (MyLanguage) =>{
        props.onLanguageName(MyLanguage);
        props.onScreenNum(1);
    }

  return (
    <SafeAreaView >
            
            <View style={styles.firstMainScreen}>
                <Text style={styles.secondHeaderText}>
                    Please select your preferred language
                </Text>
            </View>
            <View style={styles.buttonCon}>
                <TouchableOpacity
                     onPress={() => onLanNumProps("English")}
                     style={styles.greenButton}
                >
                        <Text style={styles.buttonText}>English</Text> 
                </TouchableOpacity>
        
                {/* <TouchableOpacity 
                    onPress={() => onLanNumProps("Farsi")}
                    style={styles.button}
                >
                    <View>
                        <Text>فارسی</Text> 
                   </View>
                </TouchableOpacity> */}
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainScreen:{
        height:ScrHeight * 0.5,
        marginTop:30,
        marginBottom:10,
        padding: 20,
    },
    firstMainScreen:{
       height:ScrHeight * 0.3,
       marginTop:30,
       marginBottom:10,
       padding: 20,
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
  paragraphText:{
      fontSize:15,
      textAlign:'justify',
      padding:20,
  },
  buttonCon:{
     height: ScrHeight * 0.2,
       justifyContent: 'center',
       alignItems: 'center', 
     },
  greenButton:{
      width:ScrWidth * 0.6,
      color:'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      padding:20,
      fontWeight:'bold',
      borderColor:'#2D5018',
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'#2D5018'
  },
  buttonText:{
    fontWeight:'bold',
    fontSize: 16,
    color:'white',
  },
})
export default LanguageSelection;