import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HousesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>1. House Stark</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default HousesScreen;