
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';



const HomePage = (props) => {
    const onLanNumProps = (MyScreenNum) => {
        props.onLanguageName("English");
        props.onScreenNum(MyScreenNum);
    }

  return (
    <View style={styles.mainScreen}>
            
            <View>
                <Text>
                   HOME 
                </Text>
                <Text>
                   Better Yourself
                </Text>
            </View>
            <View>
                <TouchableOpacity
                     onPress={() => onLanNumProps(3)}
                     style={styles.button}
                >
                    <View>
                        <Text>Universe Message</Text> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(4)}
                     style={styles.button}
                >
                    <View>
                        <Text>Today's Challenge</Text> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(5)}
                     style={styles.button}
                >
                    <View>
                        <Text>Personal Test</Text> 
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                     onPress={() => onLanNumProps(6)}
                     style={styles.button}
                >
                    <View>
                        <Text>Zodiav</Text> 
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
        borderColor:'#5dbea3',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#5dbea3'
    }
})
export default HomePage;