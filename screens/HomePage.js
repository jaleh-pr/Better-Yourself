
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

const HomePage = (props) => {
    const onLanNumProps = (MyScreenNum,theSectionName) => {
        //The theSectionName is used to show which section is active in footer 
        props.onLanguageName("English");
        props.onScreenNum(MyScreenNum);
        props.onSectionName(theSectionName);
    }

  return (
    <SafeAreaView >
            
            <View style={styles.mainScreen}>
                <View style= {styles.secBtnCon}>
                    <View style= {styles.btnCon}>
                        <TouchableOpacity
                            onPress={() => onLanNumProps(3,11)}
                            style={[styles.blueButton, styles.button]}
                        >  
                            <View>
                                <Image
                                    source={require('../assets/icons8-mail-50.png')}
                                    style= {styles.iconStyle}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textCon}>
                            <Text style= {styles.buttonText}>Universe</Text>
                            <Text style= {styles.buttonText}>Message</Text> 
                        </View>
                    </View>
                    <View style= {styles.btnCon}>
                        <TouchableOpacity
                            onPress={() => onLanNumProps(4,12)}
                            style={[styles.pinkButton,styles.button]}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icons8-challenge-50.png')}
                                    style= {styles.iconStyle}
                                ></Image>
                                
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textCon}>
                            <Text style= {styles.buttonText}>Today's</Text> 
                            <Text style= {styles.buttonText}>Challenge</Text> 
                        </View>
                    </View>
                </View>
                <View style= {styles.secBtnCon}>
                    <View style= {styles.btnCon}>
                        <TouchableOpacity
                            onPress={() => onLanNumProps(5,13)}
                            style={[styles.orangeButton,styles.button]}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icons8-test-48.png')}
                                    style= {styles.iconStyle}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textCon}>
                            <Text style= {styles.buttonText}>Self</Text>
                            <Text style= {styles.buttonText}>Awareness</Text>
                            <Text style= {styles.buttonText}>Test</Text>
                        </View>
                    </View>
                    <View style= {styles.btnCon}>
                        <TouchableOpacity
                            onPress={() => onLanNumProps(6,14)}
                            style={[styles.redButton,styles.button]}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icons8-astrology-book-64.png')}
                                    style= {styles.iconStyle}
                                ></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textCon}>
                            <Text style= {styles.buttonText}>Zodiac</Text> 
                        </View>
                    </View>
                </View>
            </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
    mainScreen:{
        justifyContent: 'center',
        alignItems: 'center',
        height:ScrHeight * 0.7,
        marginTop:30,
        marginBottom:10,
        padding: 20,
        //backgroundColor:'blue'
    },
  textCon:{
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontWeight:'bold',
    fontSize: 14,  
  },
  btnCon:{
    height:ScrHeight*0.22,
    padding:10,
  },
  secBtnCon:{
    display:'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',  
    width: ScrWidth *0.8,
    marginTop: 20,

  },
  button:{
    height: ScrHeight * 0.12,
    width:ScrHeight * 0.12,
    borderRadius:10,
     display:'flex',
    alignItems:'center',
    justifyContent:'center',
   // shadowRadius: 50,
   // shadowColor: 'black',
   shadowColor: '#171717',
   shadowOffset: {width: -2, height: 4},
   shadowOpacity: 0.2,
   shadowRadius: 3,
  },
  iconStyle:{
    width:ScrWidth / 8,
     height:ScrWidth / 8, 
     resizeMode:'stretch',   
  },
  blueButton:{
    backgroundColor:'#98DAE3',
  },
  pinkButton:{
    backgroundColor:'#F5AE92',
  },
  orangeButton:{
    backgroundColor:'#FBB651'
  },
  redButton:{
    backgroundColor:'#DF6149',
  }
})
export default HomePage;