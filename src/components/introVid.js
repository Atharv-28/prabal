import React from "react";
import { Video } from 'expo-av';
import { StyleSheet, View } from "react-native";

const IntroVid = ({ setIsFirstLaunch }) => { // Receive the prop
  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/intro.mp4")} // Intro video file
        style={styles.video}
        resizeMode="stretch"
        shouldPlay
        onPlaybackStatusUpdate={(status) => {
          if (status.didJustFinish) {
            setIsFirstLaunch(false); // Update the state in App.js
          }
        }}
      />
    </View>
  );
};

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

export default IntroVid;
