import React from "react";
import { ActivityIndicator,StyleSheet } from "react-native";

const LoadingIcon = (isIconAnimating ) => {
    <ActivityIndicator  style={styles.mainScreen} size="large" color="#0000ff" animating={isIconAnimating} />
}
const styles = StyleSheet.create({
    mainScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
export default LoadingIcon;