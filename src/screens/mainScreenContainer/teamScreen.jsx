import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const TeamScreen = ()=>{
    console.log("Main screen rendered")
    return(
        <View style={styles.container}>
            <Text >Team Screen</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#4CAF50',
      },
})
export default TeamScreen;