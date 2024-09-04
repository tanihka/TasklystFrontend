import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/splash';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';
import MainScreen from './screens/mainScreen';
import BottomTabs from './navigation/BottomTabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen}  options={{ headerShown: false }} />
       
      </Stack.Navigator> */}
      <BottomTabs/>
    </NavigationContainer>
  );
};

export default App;
