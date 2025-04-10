import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Slogan = ({house}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sloganText}>{house}</Text>
    </View>
  );
}

export default Slogan;