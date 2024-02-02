
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const Zodic = (props) => {
  const onLanNumProps = (MyScreenNum) => {
    props.onLanguageName("English");
    props.onScreenNum(MyScreenNum);
}

  return (
    <View style={styles.mainScreen}>
            
          
                <Text>
                Zodic
                </Text>

                <TouchableOpacity
                     onPress={() => onLanNumProps(11)}
                     style={styles.button}
                >
                    <View>
                        <Text>Start</Text> 
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
        paddingTop: 1,
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
export default Zodic;