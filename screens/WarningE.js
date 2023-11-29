import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const WarningE = (props) => {

const onLanNumProps = (MyLanguage) => {
    props.onLanguageName(MyLanguage);
    props.onScreenNum(2);
}
  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                    Please be aware that this might be unreal
                </Text>
            </View>
            <View>
                <TouchableOpacity
                     onPress={() => onLanNumProps("English")}
                     style={styles.button}
                >
                    <View>
                        <Text>Press Me</Text> 
                    </View>
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
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign:'middle',
        padding:10,
        marginTop:10,
        borderColor:' #5dbea3',
        borderWidth:1,
        backgroundColor: '#5dbea3'
    }
})
export default WarningE;