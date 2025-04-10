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
import Team from "../components/team";

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
            style={styles.logoImg}
          />
        </View>

        <View style={styles.teamContainer}>
          <Team />
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
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topContainer: { 
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logoImg: {
    width: "100%",
    resizeMode: "contain",
  },
  teamContainer: {
    width: "100%",
    flex: 0.8, 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignSelf: "center",
  },
});

export default HousesScreen;
