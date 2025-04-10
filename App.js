import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import IntroVid from './src/components/introVid'; // Intro Video Component

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      } else {
        setIsFirstLaunch(true); // state of first launch (set true for testing)
      }
    };
    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    // Loading state
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isFirstLaunch) {
    return (
      <IntroVid setIsFirstLaunch={setIsFirstLaunch} /> // Prop is to update the state of Firstlaunch in App.js
    );
  }

  return (
    <View style={styles.container}>
      <Text>PRABAL</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
