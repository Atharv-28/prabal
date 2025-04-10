import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Platform,
  StatusBar,
  Image,
} from "react-native";

const HousesScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/home.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.collab}
          />
        </View>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  topContainer: {
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HousesScreen;
