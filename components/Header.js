import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ headerName, leftIconName, rightIconName }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Ionicons
          style={styles.leftIcon}
          name={leftIconName}
          size={32}
          color="white"
        />
      </TouchableOpacity>

      <Text style={styles.headerTitle}> {headerName} </Text>

      <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
        <Ionicons
          style={styles.rightIcon}
          name={rightIconName}
          size={40}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#2f6be4',
    height: 143,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  headerTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    top: 25
  },

  leftIcon: {
    left: 15,
    top: 25
  },
  rightIcon: {
    right: 15,
    top: 25
  }
});

export default Header;
