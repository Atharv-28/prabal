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
          placeholder="Enter Username"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  textInput: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
    /*shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5, */
  },
  loginButton: {
    backgroundColor: "#fff",
    width: "50%",
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default LoginScreen;
