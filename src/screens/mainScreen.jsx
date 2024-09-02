import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './mainScreenContainer/homeScreen';
import TaskScreen from './mainScreenContainer/taskScreen';
import TeamScreen from './mainScreenContainer/teamScreen';


const Tab = createBottomTabNavigator()

const MainScreen = () => {
    console.log("Main screen rendered")
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
    </Tab.Navigator>
  );
};
export default MainScreen;
