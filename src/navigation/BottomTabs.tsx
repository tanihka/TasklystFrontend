import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import TeamScreen from '../screens/TeamScreen';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Tasks':
                            iconName = 'calendar';
                            break;
                        case 'Team':
                            iconName = 'users';
                            break;
                        default:
                            iconName = 'circle';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Tasks"
                component={TaskScreen}
            />
            <Tab.Screen
                name="Team"
                component={TeamScreen}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
