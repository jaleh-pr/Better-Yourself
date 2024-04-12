import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';


const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const WarningE = (props) => {

const onLanNumProps = (MyLanguage) => {
    props.onLanguageName(MyLanguage);
    props.onScreenNum(2);
}
  return (
    <SafeAreaView >
            
            <View style={styles.firstMainScreen}>
                <Text style={styles.secondHeaderText}>
                Please remember, if you think that any of the challenges given to you might hurt you, your family, or make things difficult for you, it's best to avoid taking part in them. It's important to prioritize your safety and well-being. </Text>
            </View>
            <View style={styles.buttonCon}>
                <TouchableOpacity
                     onPress={() => onLanNumProps("English")}
                     style={styles.greenButton}
                >
                   
                        <Text style={styles.buttonText}>OK</Text> 
                   
                </TouchableOpacity>
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
       marginTop:60,
       marginBottom:10,
       padding: 40,
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
export default WarningE;