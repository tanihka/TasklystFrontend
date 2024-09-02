import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const TaskScreen = ()=>{
    return(
        <View style={styles.container}>
            <Text>Task Screen</Text>
        </View>
    )
    
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
      },
})
export default TaskScreen;