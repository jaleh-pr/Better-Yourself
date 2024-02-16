
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import DiskTest from './DISKtest';



const PersonalTest = (props) => {

  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}
  return (
    <View style={styles.mainScreen}>

        <View>
            
            <TouchableOpacity
                        onPress={() => onLanNumProps(7)}
                        style={styles.button}
                    >
                            <Text>DISK Test</Text> 
            </TouchableOpacity> 
            <TouchableOpacity
                       onPress={() => onLanNumProps(8)}
                        style={styles.button}
                    >
                            <Text>Self Esteem</Text> 
            </TouchableOpacity> 
            <TouchableOpacity
                        onPress={() => onLanNumProps(9)}
                        style={styles.button}
                    >
                            <Text>Introvert/Extrovert</Text> 
            </TouchableOpacity> 
        </View>
            <View>
                 {/* <TouchableOpacity
                     onPress={() => onLanNumProps(0)}
                     style={styles.button}
                >
                    <View>
                        <Text>Back</Text> 
                    </View>
                </TouchableOpacity> */}
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
      padding:12,
      marginTop:35,
      borderColor:'#55c2da',
      borderRadius:10,
      borderWidth:1,
      backgroundColor:'#55c2da'
  }
})
export default PersonalTest;