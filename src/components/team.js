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

const Team = () => {
  return (
    <View style={styles.container}>
      <View style={styles.teamTitleContainer}>
        <Image
          source={require("../../assets/lannisterLogo.png")}
          style={styles.collab}
        />
        <Text style={styles.teamTitle}>Team Name</Text>
      </View>
      <View style={styles.teamContent}>
        <Text style={styles.teamText}>1. Team Member </Text>
        <Text style={styles.teamText}>2. Team Member </Text>
        <Text style={styles.teamText}>3. Team Member </Text>
        <Text style={styles.teamText}>4. Team Member </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 320,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    gap: 10,
    paddingHorizontal: 20,
  },
  teamTitleContainer: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  teamTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    top: 25,
  },
  teamContent: {
    width: "100%",
    height: "100%",
    // alignItems: "center",
    justifyContent: "flex-start",
    top: 35,
  },
  teamText: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 5,
  },
});

export default Team;
