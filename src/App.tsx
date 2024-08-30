import React from 'react';
import { StatusBar,Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <Text>Welcome To Tasklyst (Not Just A To Do App)</Text>
    </SafeAreaProvider>
  );
};

export default App;
