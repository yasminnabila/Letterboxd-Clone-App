import React from "react";
import { StyleSheet, Image, View } from "react-native";
import header from "../../assets/images/header_1.png";

export default function HeaderGreeting() {
  return (
    <View style={styles.container}>
      <Image source={header} style={styles.headerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    // justifyContent: "center",
  },
  headerImage: {
    width: 400,
    height: 250,
  },
});
