
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const LanguageSelection = (props) => {

    const onLanNumProps = (MyLanguage) =>{
        props.onLanguageName(MyLanguage);
        props.onScreenNum(1);
    }

  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                    Select your preferred language
                </Text>
            </View>
            <View>
                <TouchableOpacity
                     onPress={() => onLanNumProps("English")}
                     style={styles.button}
                >
                    <View>
                        <Text>English</Text> 
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity 
                    onPress={() => onLanNumProps("Farsi")}
                    style={styles.button}
                >
                    <View>
                        <Text>فارسی</Text> 
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
        width:130,
        padding:10,
        marginTop:10,
        borderColor:'#33b249',
        borderWidth:1,
        backgroundColor:'#33b249'
    }
})
export default LanguageSelection;