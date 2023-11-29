
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const Example = (props) => {


  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                    I am genius
                </Text>
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
    }
})
export default Example;