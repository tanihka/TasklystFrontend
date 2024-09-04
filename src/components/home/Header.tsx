import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { HeaderProps } from '../../types/header';

const Header: React.FC<HeaderProps> = ({ userName, status, userImage, onNotificationPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: userImage }} style={styles.userImage} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.designation}>{status}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onNotificationPress} style={styles.notificationIcon}>
        <Icon name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:10,
    paddingVertical:12,
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userDetails: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  designation: {
    fontSize: 10,
    color: '#666',
  },
  notificationIcon: {
    padding: 8,
    backgroundColor:'#FAFBFB',
    borderRadius:10
  },
});

export default Header;
