import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Header from '../components/home/Header';

const HomeScreen: React.FC = () => {
  const handleNotificationPress = () => {
  };

  return (
    <View style={styles.container}>
      <Header
        userName="John Doe"
        status="🚀 Building Things !"
        userImage="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onNotificationPress={handleNotificationPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
