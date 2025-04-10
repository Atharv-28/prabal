import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/login.png")}
      style={styles.background}
    >
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/collab.png")}
          style={styles.collab}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor="#5a5a5a" // 808080(Alternate color)
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#5a5a5a"
          secureTextEntry={true} 
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Houses")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
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
    alignItems: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  collab: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  inputContainer: {
    position: "absolute", 
    borderRadius: 15, 
    bottom: 40, 
    width: "80%", 
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 250, 
    backgroundColor: "rgba(255, 255, 255, 0.4)", 
    gap: 10,
    paddingHorizontal: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  loginButton: {
    backgroundColor: "black",
    width: "100%",
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  loginButtonText: {
    fontSize: 14,
    color: "#fff",
  },
});

export default LoginScreen;
