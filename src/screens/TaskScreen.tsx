import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const TaskScreen: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text>Task Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default TaskScreen;
