import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroVid from './src/components/introVid';
import LoginScreen from './src/screens/LoginScreen';
import HousesScreen from './src/screens/HousesScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem('hasLaunched', 'true');
      } else {
        setIsFirstLaunch(false);
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
    return <IntroVid setIsFirstLaunch={setIsFirstLaunch} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Houses" component={HousesScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
