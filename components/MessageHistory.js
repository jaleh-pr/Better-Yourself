
import React , { useState }from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';

const ScrHeight = Dimensions.get('window').height;
const ScrWidth = Dimensions.get('window').width;

const UniMessageData = require("../Data/UniMessageData.json");


const MessageHistory = (props) => {

    const {messageNums} = props;

    const [theMessage, setTheMessage ] = useState("");

    // const onLanNumProps = (MyScreenNum) => {
    //     props.onLanguageName("English");
    //     props.onScreenNum(MyScreenNum);
    // }
    const setUniverseMessage = () => {
        const ms = JSON.stringify(UniMessageData[messageNums].message);
        setTheMessage(ms.replace(/['"]+/g, ""));
    } ; 

    

  return (
    <View style={styles.mainScreen}>        
            <View>
            <TouchableOpacity
                        onPress={setUniverseMessage}
                        style={styles.button}
                    >
                            <Text>History</Text> 
            </TouchableOpacity> 
        </View>
            <Text>{theMessage}</Text>
            <Text>{messageNums}</Text>
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
export default MessageHistory;