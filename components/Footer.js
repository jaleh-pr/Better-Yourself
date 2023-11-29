
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';



const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

const Footer = (props) => {

    const onLanNumProps = (MyScreenNum) => {
        props.onLanguageName("English");
        props.onScreenNum(MyScreenNum);
    }

  return (
    <View style={styles.mainScreen}>
            
            <View style={styles.theRow}>
                <TouchableOpacity
                    onPress={() => onLanNumProps(3)}
                     style={styles.button}
                >
                    <View> 
                        <Image
                         
                            source={require('../assets/icons8-mail-50.png')}
                            style= {{width:ScrWidth / 8, height: ScrHeight / 25, resizeMode: 'contain', }}
                        ></Image>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(4)}
                     style={styles.button}
                >
                  
                    <Image
                        source={require('../assets/icons8-challenge-50.png')}
                        style= {{width:ScrWidth / 8, height: ScrHeight / 25, resizeMode: 'contain', }}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(5)}
                     style={styles.button}
                >
                   
                    <Image
                        source={require('../assets/icons8-test-48.png')}
                        style= {{width:ScrWidth / 8, height: ScrHeight / 23, resizeMode: 'contain', }}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(6)}
                     style={styles.button}
                >
                    
                    <Image
                        source={require('../assets/icons8-astrology-book-64.png')}
                        style= {{width:ScrWidth / 8, height: ScrHeight / 23, resizeMode: 'contain', }}
                    ></Image>
                </TouchableOpacity>
                
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainScreen:{
       
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        color: "black",
        paddingTop: 10,
    },
    theRow:{
        flexDirection: 'row',
        marginBottom:-70
        // paddingLeft:10,
        // paddingRight:10,
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:12,
        paddingBottom:110,
        margin:5,
        borderColor:'#55c2da',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#55c2da'
    }
})
export default Footer;