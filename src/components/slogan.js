import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Slogan = ({ house }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sloganText}>A LANNISTER ALWAYS PAYS HIS DEBTS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  sloganText: {
    textAlign: "center",
    fontSize: 34,
    color: "#fff",
  },
});
export default Slogan;
