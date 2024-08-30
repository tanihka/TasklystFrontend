import React from 'react';
import { StatusBar, Text, View,StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome To Tasklyst (Not Just A To Do App)</Text>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default App;
