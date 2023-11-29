
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const TodayChalleng = (props) => {
  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}

  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                Today's Challeng
                </Text>
            </View>
            <TouchableOpacity
                     onPress={() => onLanNumProps(0)}
                     style={styles.button}
                >
                    <View>
                        <Text>Back</Text> 
                    </View>
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
    }
})
export default TodayChalleng;