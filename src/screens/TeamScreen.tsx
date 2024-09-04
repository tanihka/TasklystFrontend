import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const TeamScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Team Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TeamScreen;
