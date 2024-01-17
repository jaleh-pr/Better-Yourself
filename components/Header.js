
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import MessageHistory from './MessageHistory';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;


const Header = (props) => {

    const onLanNumProps = (MyScreenNum) => {
        props.onLanguageName("English");
        props.onScreenNum(MyScreenNum);
    }
    

  return (
    <View style={styles.mainScreen}>        
            <TouchableOpacity
                     onPress={() => onLanNumProps(0)}
                     style={styles.button}
                >
                  
                <Image 
                    source={require("../assets/icons8-home-30.png")}
                    style={{width: ScrWidth / 10 , height: ScrHeight /10 , resizeMode: 'contain',}}
                ></Image>
            </TouchableOpacity>
           
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
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        padding:12,
       // paddingBottom:70,
        
        marginTop:35,
        borderColor:'#55c2da',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#55c2da'
    }
})
export default Header;