
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MainSection from '../components/MainSection';

const UniMessage = (props) => {

const UniMessageData = require("../Data/UniMessageData.json");

    const onLanNumProps = (MyScreenNum) => {
        props.onLanguageName("English");
        props.onScreenNum(MyScreenNum);
    }

    let content = <Text> To see your today’s message 
    click the Start button. Watch a video
    until universe prepare your 
    message. Please note that you can not get more than 2 . messages."
    </Text>

  return (
    <View style={styles.mainScreen}>
            
            {/* <View>
                <Text>
               {content}
                </Text>
            </View>
  */}

            <MainSection myData={UniMessageData}/>
                {/* <View>
                   <MainSection myData={UniMessageData} />
                </View> */}
                {/* <TouchableOpacity
                     onPress={() => onLanNumProps(7)}
                     style={styles.button}
                >
                    <View>
                        <Text>START</Text> 
                    </View>
                </TouchableOpacity> */}
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
    }
})
export default UniMessage;