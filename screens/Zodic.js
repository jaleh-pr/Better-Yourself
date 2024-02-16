
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const Zodic = (props) => {
  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}

  return (
    <SafeAreaView >       
      <View style={styles.mainScreen}>
          <Text style={styles.mainHeaderText}>
              Zodic
          </Text>
          <Text style={styles.secondHeaderText}>
              Explore the characteristics and birthdates associated with each zodiac sign
          </Text>
      </View>
      <View style={styles.buttonCon}>
          <TouchableOpacity
                onPress={() => onLanNumProps(11)}
                style={styles.button}
          > 
                  <Text style={styles.buttonText}>Start</Text> 
              
          </TouchableOpacity>
      </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainScreen:{
      height:ScrHeight * 0.3,
       // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop:30,
        padding: 20,
    },
    mainHeaderText:{
      marginTop:25,
     textAlign:'center',
      fontWeight:'bold',
      fontSize:24,
  },
  secondHeaderText:{
      marginTop:15,
      fontWeight:'bold',
      textAlign:'center',
  },
  buttonCon:{
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
    borderColor:'#FBB651',
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#FBB651'
},
buttonText:{
  fontWeight:'bold',
  fontSize: 16
}

})
export default Zodic;